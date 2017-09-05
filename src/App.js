import React, { Component } from 'react';
import './App.css';
import Search from './Search'

class App extends Component {

  state = {
    searchedBooks: [],
    title: '',
    author: '',
    keyword: ''

  }

  constructor() {
    super();

    this.clickToFlip = this.clickToFlip.bind(this)
  }

  //arr.splice(0, 20)
  //
  // handleFlip

  //get user input, set up URL, then do fetch, THEN add to array (change state)

  changeTitle = (event) => {
    let title = event.target.value.replace(/ /g,"+")
    this.setState({title: title})
  }

  changeAuthor = (event) => {
    let author = event.target.value.replace(/ /g,"+")
    this.setState({author: author})
  }

  changeKeyword = (event) => {
    let keyword = event.target.value.replace(/ /g,"+")
    this.setState({keyword: keyword})
  }

// https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=AIzaSyBvyef3GF53PX2VJXX1Kppt3NW-E0BCJPw
  fetchBooks = () => {
    let url = 'https://www.googleapis.com/books/v1/volumes?q='
    //create the search URL by checking that title author keyword are not empty and then concatenating
    if (this.state.keyword !== ''){
      url = url + this.state.keyword
    }
    if (this.state.author !== ''){
      url = url + '+inauthor:' + this.state.author
    }
    if (this.state.title !== ''){
      url = url + '+intitle: ' + this.state.title
    }

    url = url + '&key=AIzaSyBvyef3GF53PX2VJXX1Kppt3NW-E0BCJPw'


    fetch(url).then(res => res.json()).then(json => {
      this.setSearchedBooks(json.items)
    })
  }

  setSearchedBooks = (foundBooks) => {
    foundBooks.map(book => book.volumeInfo.showDescription = false)
    this.setState({ searchedBooks: foundBooks })
    // console.log(this.state.searchedBooks)
  }

  handleSearch = (e) => {
    e.preventDefault()
    this.fetchBooks()
    // this.resetState()
    // console.log("state after reset", this.state)
  }


  resetState = () => this.setState({ keyword:'', title:'', author:''})

  clickToFlip = (event) => {
    let bookDisplays = this.state.searchedBooks.slice(0)
    bookDisplays.map((book) => {
    // console.log(book.volumeInfo.title)
    // let's ask about why it works on the p tag and not the div tag
      if (book.volumeInfo.title === event.target.id && book.volumeInfo.showDescription === false){
        book.volumeInfo.showDescription = true
      }else if (book.volumeInfo.title === event.target.id && book.volumeInfo.showDescription === true){
        book.volumeInfo.showDescription = false
     }

    })
    // console.log(bookDisplays)
    // console.log(this.state.searchedBooks)
      this.setState({searchedBooks: bookDisplays})
      // debugger
  }

  render(){
    // console.log(this.state.searchedBooks)
    return (
      <div className="App">
        <Search
          handleSearch={this.handleSearch}
          changeKeyword={this.changeKeyword}
          changeAuthor={this.changeAuthor}
          changeTitle={this.changeTitle}
          foundBooks={this.state.searchedBooks}
          clickToFlip={this.clickToFlip}
          showDescription={this.state.showDescription}
        />
      </div>
    );
  }
}

export default App;


// make our fetch request
// event handlers
// setting state
// pass props to the book list based on state


// q - Search for volumes that contain this text string. There are special keywords you can specify in the search terms to search in particular fields, such as:
// intitle: Returns results where the text following this keyword is found in the title.
// inauthor: Returns results where the text following this keyword is found in the author.
// subject: Returns results where the text following this keyword is listed in the category list of the volume.
