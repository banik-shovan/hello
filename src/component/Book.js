import React from 'react';
import '../stylesheets/Book.css'
const Book = (props) => {


    return (
        <div className="Book" onclick={props.selectedBookHandler}>

            <h3 >Book Name Name:{props.bookname}</h3>
            <h4>writer name Name:{props.writer}</h4>
            {/* <input type="text" onChange={props.inputName} value={props.bookname} /> */}
        </div>
    );
}

export default Book;