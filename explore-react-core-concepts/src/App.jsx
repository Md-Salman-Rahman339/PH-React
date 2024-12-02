import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Singer from './Singer'
import Counter from './Counter'
import Users from './Users'

function App() {
  const [count, setCount] = useState(0)

  const singers = [
    {id: 1,  name: 'Dr. Mahfuzur', age: 68},
    {id: 2, name: 'Eva Rahman', age: 38},
    {id: 3, name: 'Shuvro Dev', age: 58},
    {id: 4, name: 'Pritom', age: 28},
  ]

  return (

    
    <>
    {
      singers.map(singer=><Singer singer={singer}> </Singer>)
    }
     <Counter></Counter>
     <Users></Users>
    </>
  )
}

export default App
