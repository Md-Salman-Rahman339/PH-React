import React from 'react'
import { Link } from 'react-router-dom'

const Gadget = ({gadget}) => {
    // eslint-disable-next-line react/prop-types
    const {product_id,product_title, product_image, category,price}=gadget
  return (
   <Link to={`/details/${product_id}`}>
     <div className="card bg-base-300 h-72shadow-xl">
    <figure className="px-5 pt-5 py-5">
      <img
        src={product_image}
        alt="Shoes"
        className="rounded-xl " />
    </figure>
    <div className="card-body items-start text-start">
      <h2 className="card-title">{product_title}</h2>
      <p>Price: ${price}</p>
      <div className="card-actions">
      <button className="btn btn-sm border border-b-fuchsia-700 text-fuchsia-700 rounded-full">View Details</button>
      </div>
    </div>
  </div>
  </Link>
  )
}

export default Gadget
