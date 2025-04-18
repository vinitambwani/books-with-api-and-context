import BookShow from "./BookShow";
import useBooksContext from "../hooks/user-books-context";

function BookList() {
    
    const { books } = useBooksContext();

    const renderedBookList = books.map((book)=><BookShow key={book.id} book={book}/>);
    return <div className="book-list">
        {renderedBookList}
        </div>;
}

export default BookList;