import React from 'react'
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const Book = ({book}) => {
    const {bookId,image,bookName,author,tags,category}=book;
  return (
    <Link to={`/books/${bookId}`}>
    <div className="card bg-base-100 w-80 shadow-xl">
    <figure className='bg-blue-200 py-8 rounded-2xl'>
      <img className='h-[166px]'
        src={image}
        alt="Shoes" />
    </figure>
    <div className="card-body">
        <div className='flex justify-center gap-4'>
     {
          tags.map((tag,index)=> <button  key={index} className="btn btn-xs bg-green-200 text-green-500">{tag}</button>)
     }
        </div>
      <h2 className="card-title">
       {bookName}
        <div className="badge badge-secondary">NEW</div>
      </h2>
      <p>By:{author}</p>
      <div className="card-actions justify-between">
        <div className="badge badge-outline">{category}</div>
        <div className="rating">
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" defaultChecked />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-100" />
                        </div>
      </div>
    </div>
  </div>
    
    </Link>
  )
}

export default Book
