import Header from "../Header/Header";

import { Outlet } from 'react-router-dom';

export default function Home() {
  return (
    <div>

        <Header></Header>
      <p>This is home router</p>
      <Outlet></Outlet>
    </div>
  )
}
