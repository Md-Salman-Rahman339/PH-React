import React, { useEffect, useState } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Gadget from '../Gadget/Gadget';
// eslint-disable-next-line react/prop-types
const TabsG = () => {

     const [gadgets,setGadgets]=useState([]);
    
      useEffect(()=>{
        fetch('/gadgetsData.json')
        .then(res=>res.json())
        .then(data=>{
          setGadgets(data);
        })
      },[])
   
      const filterByCategory = (category) =>
        gadgets.filter((gadget) => gadget.category.toLowerCase() === category.toLowerCase());
  return (
    
    
      <Tabs>
    <TabList>
      <Tab>All</Tab>
      <Tab>Laptop</Tab>
      <Tab>Phones</Tab>
      <Tab>Smart watches</Tab>
     
      
    </TabList>

    <TabPanel>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {gadgets.map((gadget) => (
            <Gadget gadget={gadget} key={gadget.product_id}></Gadget>
          ))}
        </div>
    </TabPanel>
     <TabPanel>
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filterByCategory('Laptops').map((gadget) => (
            <Gadget gadget={gadget} key={gadget.product_id}></Gadget>
          ))}
        </div>
    </TabPanel>
    <TabPanel>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filterByCategory('Smartphones').map((gadget) => (
            <Gadget gadget={gadget} key={gadget.product_id}></Gadget>
          ))}
        </div>
    </TabPanel>
    <TabPanel>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filterByCategory('Smartwatches').map((gadget) => (
            <Gadget gadget={gadget} key={gadget.product_id}></Gadget>
          ))}
        </div>
    </TabPanel>
  
  </Tabs>
   
  )
}

export default TabsG
