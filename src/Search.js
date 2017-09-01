import React from 'react'
import BookList from './BookList'

//by default only returns 10 books

//return must include a form
// search must pass props down to BookList
const Search = (props) => {

    return(
      <div>
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
        <BookList foundBooks={props.foundBooks}/>
      </div>
    )
}

export default Search
