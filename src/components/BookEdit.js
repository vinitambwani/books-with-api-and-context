import { useContext, useState } from "react";
import BooksContext from "../context/books";

function BookEdit({book, onSubmit}) {

    const [title, setTitle] = useState(book.title);

    const { updateBookById } = useContext(BooksContext);

    const handleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleSubmit= (event) =>{
        event.preventDefault();
        updateBookById(book.id, title);
        onSubmit();
        console.log("New Title is ", title);
    };


    return <form className="book-edit" onSubmit={handleSubmit}>
            <label>Title</label>
            <input className="input" value={title} onChange={handleChange}/>
            <button className="button is-primary">
                Save
            </button>
        </form>;
}

export default BookEdit;