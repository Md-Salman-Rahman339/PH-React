import './App.css'
import Banner from './components/Banner/Banner'
// import Cricketer from './components/Cricketer/Cricketer'
import Cricketers from './components/Cricketers/Cricketers'
import Navbar from './components/Navbar/Navbar'

function App() {
 
  return (
    <>
    <div className='justify-center mb-4'>

   <div className='mb-4 '>
   <Navbar></Navbar>
   <Banner></Banner>
   </div>
    
    <div className='min-h-fit'>
    <Cricketers></Cricketers>
    </div>
   
    </div>

  
    
    
     
    </>
  )
}

export default App
