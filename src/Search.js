import React from 'react'
import BookList from './BookList'

//by default only returns 10 books

//return must include a form
// search must pass props down to BookList
const Search = (props) => {

    return(
      <div>
        <h2>Book Lister</h2>
        <h4>Find a book by entering you search in the fields below. You can search by more than one category at once! The more search parameters entered, the more likely you are to find accurate results.</h4>
        <form onSubmit={props.handleSearch}>
          <label>Keyword:
            <input type="text" value={props.subject} onChange={props.changeKeyword}/></label><br></br>
          <label>Title:
            <input type="text" value={props.title} onChange={props.changeTitle}/></label><br></br>
          <label>Author:
            <input type="text" value={props.author} onChange={props.changeAuthor}/></label><br></br>
          <input type="submit" value="Search"/>
        </form>
        <br></br>
        <BookList
          searchedBooks={props.foundBooks}
          clickToFlip={props.clickToFlip}
        />
      </div>
    )
}

export default Search
