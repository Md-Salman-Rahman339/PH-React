import { useState } from 'react';
import banner from '../../assets/images/banner-main.png';
import shadow from '../../assets/images/bg-shadow.png'
const Banner = ({addCoin}) => {


    const [isClicked,setIsClicked]=useState(false);

    const handleCLick=()=>{
        if(!isClicked){
            addCoin()
            setIsClicked(true);
        }
    }
  return (



    <div className="relative w-full h-full">
     
      <div style={{backgroundImage:`url(${shadow})`}} className="absolute inset-0  bg-cover bg-center bg-black rounded-xl"></div>
      
     
      <div className="relative carousel rounded-box items-center text-center">
        <div className="carousel-item items-center justify-center flex flex-col mb-6">
          <img src={banner} className="w-full rounded-box" alt="Banner" />
          <h1 className='text-white font-bold'>Assemble Your Ultimate Dream 11 Cricket Team </h1>
          <p className='text-slate-300 mb-4'>Beyond Boundaries Beyond Limits</p>
       
         <button onClick={handleCLick} disabled={isClicked} className='bg-lime-400  rounded-md mb-4'>{isClicked?"credits claimed" :"Claim Free Credits"}</button>
         
        </div>
      </div>
    </div>
  );
};

export default Banner;
