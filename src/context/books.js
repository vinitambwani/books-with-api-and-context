import {createContext} from 'react';
import { useState, useCallback } from 'react';
import axios from 'axios';

const BooksContext = createContext();

function Provider({children}) {

    const [books, setBooks] = useState([]);

    /*
    const [count, setCount] = useState(0);

    const valueToShare = {
        count: count,
        incrementCount: () => {
            setCount(count + 1);
        }
    };
    */

    const booksToShare = {
        books,
        createBook: async (title) => {
            const response = await axios.post('http://localhost:3001/books', {
                title
            });
            setBooks([...books, response.data])
        },
        deleteBookById: async (id) => {
            await axios.delete(`http://localhost:3001/books/${id}`);
            const deletedBooks = books.filter((book)=> {
                return book.id !== id
            });
            setBooks(deletedBooks);
        },
        updateBookById: async (id, newTitle) => {
            const response = await axios.put(`http://localhost:3001/books/${id}`, {
                title : newTitle
            });
            console.log(response);
            const updatedBooks = books.map((book)=>{
                if(book.id === id){
                    //return {...book, title: title};
                    //return {...book, title};
                    return {...book, ...response.data};
                }
                return book;
            });
            setBooks(updatedBooks);
        },
        fetchBooks: useCallback(async ()=>{
            const response = await axios.get('http://localhost:3001/books');
            setBooks(response.data);
        }, [])
    };


    return (
        <BooksContext.Provider value={booksToShare}>
            {children}
        </BooksContext.Provider>
    );
    
};

export {Provider} ;
export default BooksContext;

