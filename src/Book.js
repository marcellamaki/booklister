import React from 'react';

const Book = (props) => {

  // getProps(){
  //    return Map(Object.entries(props.book));
  // }

  let display = ""
  //
  // if (props.showDescription) {
 display =
        <div onClick={props.clickFunction}>
          <h3>{props.book.title}</h3>
          <p>{props.book.authors}</p>
          <p>{props.book.description}</p>
          <p>Rating: {props.book.averageRating}</p>
          <p>Category: {props.book.categories}</p>
        </div>
    // } else {
    //   display = (<div><img  title={props.tile} alt="" onClick={props.handleFlip}/></div>)
    // }

  return (
    <div className="ui four wide column">
      {display}
    </div>
  )



}

export default Book;
