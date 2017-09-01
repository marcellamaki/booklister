import React from 'react';
import Book from './Book'

const BookList = (props) => {
  //map through prop of books given from search and then map through and call on Books
  // to build each book component

  return (
  <div className="ui grid container">
    {props.foundBooks.map((book, index) => {
      return(
        <Book handleClick={props.handleClick}
          book={book.volumeInfo}
          key={index}/>
        )
      }
    )
  }
  </div>
  )
}



export default BookList
