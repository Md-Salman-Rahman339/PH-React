
import {  useLoaderData, useParams } from 'react-router-dom';
import { cartC } from '../CartContext/CartContext';
import { useContext } from 'react';
const GadgetsDetails = () => {
  const { product_id } = useParams();
  const data = useLoaderData();
  const {addToCart,addToWishList}=useContext(cartC);
  


  if (!data) {
    return <p>Loading...</p>;
  }

  const id = parseInt(product_id);
  const gadget = data.find((item) => item.product_id === id);

  if (!gadget) {
    return <p>Gadget not found. Please check the product ID.</p>;
  }

  const {
    product_title,
    product_image,
    price,
    description,
    Specification,
    availability,
    rating,
  } = gadget;


  return (
    <div className="card card-side bg-base-100 shadow-xl rounded-lg border border-fuchsia-700 ">
      <figure>
        <img className='rounded-md' src={product_image} alt={product_title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product_title}</h2>
        <p>Price: ${price}</p>
        <p>{description}</p>
        <button className={`btn btn-sm w-20 ${availability === 'In Stock' ? 'btn-success' : 'btn-danger'}`}>
          {availability}
        </button>
        <h5>Specifications:</h5>
        <ul>
          {Specification.map((spec, index) => (
            <li key={index}>{spec}</li>
          ))}
        </ul>
        <div className="rating">
          <p>Rating: {rating} / 5</p>
          {[...Array(5)].map((_, index) => (
            <input
              key={index}
              type="radio"
              name="rating-4"
              className={`mask mask-star-2 ${
                index < Math.round(rating) ? 'bg-orange-500' : 'bg-gray-300'
              }`}
              defaultChecked={index + 1 === Math.round(rating)}
            />
          ))}
        </div>
        <div className="card-actions">
          <button className="btn btn-primary" onClick={()=>addToCart(gadget)}>Add To Cart</button>
          <button className="btn btn-primary" onClick={()=>addToWishList(gadget)}>WishList</button>
        </div>
      </div>
    </div>
  );
};

export default GadgetsDetails;
