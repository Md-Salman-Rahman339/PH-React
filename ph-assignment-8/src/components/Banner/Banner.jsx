import bannerimg from '../../assets/banner.jpg'
import TabsG from '../TabsG/TabsG'

const Banner = () => {
  return (
    <>
   
    <div className="hero bg-fuchsia-700  w-auto  h-96 rounded-lg" >
    
  <div className="hero-content flex-col lg:flex-row  ">
  
    <div className='justify-center items-center text-center'>
      <h1 className="text-5xl font-bold text-center">Upgrade Your Tech Accessorize with Gadget Heaven Accessories!</h1>
      <p className=" w-1/2 py-9 text-center ml-52">
      Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
      </p>
      <button className="btn btn-sm bg-white text-fuchsia-600">Shop Now</button>
      <br />
      <img
      src={bannerimg}
      className="absolute w-1/3  h-64 object-cover ml-64 rounded-md border border-b-gray-300 p-5" />
    </div>
  </div>
</div>
</>
  )
}

export default Banner
