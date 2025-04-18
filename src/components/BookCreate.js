import { useContext, useState } from "react";
import BooksContext from "../context/books";
function BookCreate() {
    const [bookTitle, setBookTitle] = useState("");
    const {createBook} = useContext(BooksContext);

    const handleBookTitleChange = (event) =>{
        setBookTitle(event.target.value);
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        createBook(bookTitle);
        setBookTitle('');
    }

    return<div className="book-create">
            <form onSubmit={handleSubmit}>
                <label value="Title" />
                <input className="input" value={bookTitle} onChange={handleBookTitleChange} />
                <button className="button">Create</button>
            </form>
        </div>;
}

export default BookCreate;