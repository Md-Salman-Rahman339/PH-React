import  { useEffect, useState } from 'react'
import Book from '../Book/Book'
const Books = () => {
    const [books,setBooks]=useState([]);
    useEffect(()=>{
        fetch('/booksData.json')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setBooks(data);
        })
       
    },[])
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
      
      {
       books.map(book => <Book book={book} key={book.bookId}></Book>)
      }
      
    </div>
  )
}

export default Books
