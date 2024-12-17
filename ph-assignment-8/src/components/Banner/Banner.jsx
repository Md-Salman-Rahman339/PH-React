import bannerimg from '../../assets/banner.jpg'

const Banner = () => {
  return (
    <div className="hero bg-purple-500  w-auto  h-96">
  <div className="hero-content flex-col lg:flex-row  ">
  
    <div className='justify-center items-center text-center'>
      <h1 className="text-5xl font-bold text-center">Box Office News!</h1>
      <p className=" w-1/2 py-9 text-center ml-52">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
     
      <button className="btn btn-primary">Get Started</button>
      <img
      src={bannerimg}
      className="absolute w-1/3  h-64 object-cover ml-60 rounded-md border border-b-gray-300 p-5" />
    </div>
  </div>
</div>
  )
}

export default Banner
