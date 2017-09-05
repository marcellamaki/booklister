import React from 'react';

const Book = (props) => {

  // getProps(){
  //    return Map(Object.entries(props.book));
  // }

  let display = ""
  if (props.book.showDescription) {
    // let's ask about why it works on the p tag and not the div tag
 display =
        <div onClick={props.clickToFlip}>
          <div className="book" id={props.book.title}>
            <h3 className="bookTitle">{props.book.title}</h3>
            <p>{props.book.authors}</p>
            <p >{props.book.description}</p>
            <p>Rating: {props.book.averageRating}</p>
            <p>Category: {props.book.categories}</p>
          </div>
        </div>
    } else {
      if (!!props.book.imageLinks){
      display =
      <div onClick={props.clickToFlip}>
        <img src={props.book.imageLinks.thumbnail}
          id={props.book.title} />
      </div>
    }
  }

  return (
    <div className="ui four wide column">
      {display}
    </div>
  )

}

export default Book;
