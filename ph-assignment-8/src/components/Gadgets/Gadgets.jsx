import React, { useEffect, useState } from 'react'
import Gadget from '../Gadget/Gadget';
import TabsG from '../TabsG/TabsG';
import GadgetsDetails from '../GadgetsDetails/GadgetsDetails';
const Gadgets = () => {
  const [gadgets,setGadgets]=useState([]);

  useEffect(()=>{
    fetch('/gadgetsData.json')
    .then(res=>res.json())
    .then(data=>{
      setGadgets(data);
    })
  },[])
  if (gadgets.length === 0) {
    return <p>Loading gadgets...</p>; 
  }
  return (
  <div>
     {/* {
      gadgets.map(gadget=> <Gadget gadget={gadget} key={gadget.product_id}></Gadget>)
      

    }   */}
    
  </div>
  )
}

export default Gadgets
