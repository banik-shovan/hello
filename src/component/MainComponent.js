import { Component } from 'react';
import Book from './Book';
import NewBook from './NewBook';
import { Route, NavLink } from 'react-router-dom';
import BookDetail from './BookDetail';
class MainComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [
                { id: 1, bookname: "1984", writer: "goerge ttt oeweal" },
                { id: 2, bookname: "1985", writer: "goerge oeweal" },
                { id: 3, bookname: "1987", writer: "goerge oeweal" },
            ],
            showbooks: true,
            selectedBook: null
        }

    }


    // constructor() {
    //   super();
    //   this.state = {
    //     books: [
    //       { bookname: "1984", writer: "goerge oeweal" },
    //       { bookname: "1985", writer: "goerge oeweal" },
    //       { bookname: "1987", writer: "goerge oeweal" }
    //     ]
    //   };
    // }

    // this is just an example we never use this type of thing in our real code 
    // changeBookstate = () => {
    //   //  this.state.books[0].bookname="1972" wrong
    //   this.setState({
    //     books: [
    //       { bookname: "19200", writer: "goerge ttt oeweal" },
    //       { bookname: "1985", writer: "goerge" },
    //       { bookname: "1987", writer: "goerge oeweal" }
    //     ]
    //   });
    // }

    // changeInput = (event, i) => {
    //     const book = {
    //         ...this.state.books[i]
    //     }
    //     book.bookname = event.target.value;
    //     const books = [...this.state.books];
    //     books[i] = book;
    //     this.setState({
    //         books: books
    //     });
    // }
    // deleteBook = (index) => {
    //     const books = [...this.state.books]; //sprade operator use kore amra array k copy korchi three dot is called spreed operator
    //     books.splice(index, 1);
    //     this.setState({
    //         books: books
    //     });
    // }
    // toggle = () => {
    //     this.setState({ showbooks: !this.state.showbooks })
    // }
    selectedBookHandler = (book) => {

        this.setState({
            selectedBook: book
        })
    }

    render() {

        const style = {
            border: "1px solid red",

            borderRadius: "5px",
            backgroundColor: "black",
            color: "white",
        };

        // if (this.state.showbooks) {
        //     const bookstate = this.state.books;
        //     books = bookstate.map(
        //         (book, i) => {
        //             return (
        //                 <Book bookname={book.bookname} writer={book.writer}
        //                     selectedBookHandler={this.selectedBookHandler()}
        //                 />
        //             );
        //         }
        //     );
        // }
        const books = { < Book bookname = { book.bookname } writer = { book.writer }
        selectedBookHandler = {()=> this.selectedBookHandler(book)
    }
            />}
// delete={() => this.deleteBook(i)}
// key={(book.id)}
// inputName={(event) => this.changeInput(event, i)}
// console.log(books);
return (
    <div className="App" >
        <nav className="Nav-bar">
            <ul>
                <li><NavLink to="/" exact>Home</NavLink></li>
                <li><NavLink to="/new-book">New Book</NavLink></li>
            </ul>
        </nav>

        {/* <header className="App-header">
                    <h2 style={style}>booklist:</h2> */}
        {/* <button onClick={() =>}>delete book</button> */}
        {/* <input type="text" onChange={this.changeInput} /> */}

        {/* <Book bookname={this.state.books[0].bookname} writer={this.state.books[0].writer} inputName={this.changeInput} />
              <Book bookname={this.state.books[1].bookname} writer={this.state.books[1].writer} inputName={this.changeInput} />
              <Book bookname={this.state.books[2].bookname} writer={this.state.books[2].writer} inputName={this.changeInput} /> */}
        {/* <h2>hello</h2> */}
        {/* <button onClick={this.toggle}>toogle books</button>

                </header> */}
        <Route path="/" exact render={() => books}></Route >
        <Route path="/new-book" exact component={NewBook}></Route>
        <BookDetail book={this.state.selectedBook} />
    </div >
);
    }

}

export default MainComponent;