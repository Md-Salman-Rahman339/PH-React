
import { useLoaderData, useParams } from 'react-router-dom'

import { addToStoredReadList,addToStoredWishList } from '../../utility/addToDb';

const BookDetail = () => {
    const {bookId}=useParams();
    const data=useLoaderData();
    const id=parseInt(bookId);
   
    const book=data.find(book=>book.bookId===id)
    const {bookId:currentBookId,image}=book;
    const handleMarkAsRead=(id)=>{
        addToStoredReadList(id);
    }
    const handleAddToWishList=(id)=>{
        addToStoredWishList(id);
    }

  return (
    <div>
      <h2>Book details:{bookId} </h2>
      <img src={image} className='w-36' alt="" />
      <button onClick={()=>handleMarkAsRead(bookId)} className="btn btn-outline mr-4 btn-accent">Read</button>
            <button onClick={()=>handleAddToWishList(bookId)} className="btn btn-accent">Add to Wish List</button>
    </div>
  )
}

export default BookDetail
