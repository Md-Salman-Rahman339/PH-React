import  { useContext, useState } from 'react';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { cartC } from '../CartContext/CartContext';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const { cart, setCart, wishList } = useContext(cartC);
  const [sortedCart, setSortedCart] = useState(cart);
  const [showModal, setshowModal] = useState(false);
  const navigate = useNavigate();

  const totalPrice = sortedCart.reduce((total, item) => total + item.price, 0);

  const sortByPrice = () => {
    const sorted = [...sortedCart].sort((a, b) => b.price - a.price);
    setSortedCart(sorted);
  };

  const handlePurchase = () => {
    setSortedCart([]); 
    setCart([]);       
    navigate("/"); 
  };

  const removeItemAndRedirect = (itemIndex) => {
    const updatedCart = sortedCart.filter((_, index) => index !== itemIndex);
    setSortedCart(updatedCart);
    setCart(updatedCart);
    navigate("/"); 
  };

  return (
    <div className="min-h-screen bg-gray-100">
 
      <div className="bg-fuchsia-700 text-white text-center py-8">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-sm mt-2">
          Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
        </p>
      </div>


      <div className="max-w-5xl mx-auto mt-6">
        <Tabs>
          <TabList className="flex justify-center space-x-4 mb-6">
            <Tab className="px-6 py-2 rounded-lg text-sm font-medium bg-white shadow-md cursor-pointer hover:bg-fuchsia-600">
              Cart
            </Tab>
            <Tab className="px-6 py-2 rounded-lg text-sm font-medium bg-white shadow-md cursor-pointer hover:bg-fuchsia-600">
              WishList
            </Tab>
          </TabList>

          <TabPanel>
            <div className="bg-white p-6 rounded-md shadow-lg">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold">Cart</h2>
                <h3 className="text-lg font-semibold">
                  Total cost: ${totalPrice.toFixed(2)}
                </h3>
              </div>
              {sortedCart.length === 0 ? (
                <p>No items in the cart.</p>
              ) : (
                <div>
                  <div className="flex justify-end items-center mb-4 gap-4">
                    <button
                      className="px-4 py-2 bg-gray-200 text-white text-sm font-medium rounded-md hover:bg-fuchsia-600"
                      onClick={sortByPrice}
                    >
                      Sort by Price
                    </button>
                    
                    <button
                      onClick={handlePurchase}
                      className={`px-4 py-2 text-sm font-medium rounded-md ${
                        sortedCart.length === 0 || totalPrice === 0
                          ? 'bg-gray-300 cursor-not-allowed'
                          : 'bg-fuchsia-700 hover:bg-fuchsia-800 text-white'
                      }`}
                      disabled={sortedCart.length === 0 || totalPrice === 0} 
                    >
                      Purchase
                    </button>
                    
                  </div>
                  <div className="space-y-4">
                    {sortedCart.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center bg-gray-50 p-4 rounded-md shadow-md"
                      >
                        <img
                          src={item.product_image}
                          alt={item.product_title}
                          className="w-16 h-16 object-cover rounded-md"
                        />
                        <div className="ml-4">
                          <h3 className="text-md font-bold">{item.product_title}</h3>
                          <p className="text-sm text-gray-600">{item.description}</p>
                          <p className="text-sm font-medium">Price: ${item.price}</p>
                        </div>
                        <button
                          onClick={() => removeItemAndRedirect(index)}
                          className="ml-auto text-red-500 hover:text-red-700"
                        >
                          ✖
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </TabPanel>

   
          <TabPanel>
            <div className="bg-white p-6 rounded-md shadow-lg">
              <h2 className="text-xl font-bold mb-4">Wish List</h2>
              {wishList.length === 0 ? (
                <p>No items in the wishlist.</p>
              ) : (
                <div className="space-y-4">
                  {wishList.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center bg-gray-50 p-4 rounded-md shadow-md"
                    >
                      <img
                        src={item.product_image}
                        alt={item.product_title}
                        className="w-16 h-16 object-cover rounded-md"
                      />
                      <div className="ml-4">
                        <h3 className="text-md font-bold">{item.product_title}</h3>
                        <p className="text-sm text-gray-600">{item.description}</p>
                        <p className="text-sm font-medium">Price: ${item.price}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;
