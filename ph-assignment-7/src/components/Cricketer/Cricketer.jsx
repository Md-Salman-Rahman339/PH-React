import React from 'react'

const Cricketer = ({cricketer,handleChoosePlayer}) => {
    const {Name,Country,Image,PlayerType,BattingSide,Price}=cricketer;
  return (
    <div className=" mb-6 w-96 h-96 border border-white-700 rounded-xl ">
    <div className="card flex flex-col items-center h-1/2 ">
      <img className='w-full h-32 rounded-xl' src={Image} alt="" />
      <div className="card-body">
        <h2 className="card-title items-start justify-start text-start font-extrabold">{Name}</h2>
        
        <div className='flex gap-20 border-b-gray-200'>
        <p>{Country}</p>
        <p className='bg-slate-100 rounded-md'>{PlayerType}</p>
     
        </div>
       


        <div className="card-actions flex">
            <div className='text-start font-medium'>
            <h4> Rating</h4>
            <h4>{BattingSide}</h4>
            
            </div>

          <div className='text-end mb-4 flex gap-16'>
          <h4>Price:{Price}</h4>
          <button onClick={()=>handleChoosePlayer(cricketer)} className="btn btn-primary bg-slate-200 text-black text-sm px-4 py-2 rounded">Choose Player</button>
          </div>
        </div>
      </div>
    </div>
    
  </div>
  
  )
}

export default Cricketer
