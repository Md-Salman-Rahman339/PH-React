import React from 'react'
import p1 from '../assets/c1.jpg'
import p2 from '../assets/c2.jpg'
import p3 from '../assets/c3.jpg'
import p4 from '../assets/c4.jpg'
const Banner = () => {
  return (
    <>
    <div className="carousel max-w-4xl rounded-lg">
    <div id="item1" className="carousel-item w-full">
      <img
        src={p1}
        className="w-full" />
    </div>
    <div id="item2" className="carousel-item w-full">
      <img
        src={p2}
        className="w-full" />
    </div>
    <div id="item3" className="carousel-item w-full">
      <img
        src={p3}
        className="w-full" />
    </div>
    <div id="item4" className="carousel-item w-full">
      <img
        src={p4}
        className="w-full" />
    </div>
  </div>
  <div className="flex w-full justify-center gap-2 py-2">
    <a href="#item1" className="btn btn-xs">1</a>
    <a href="#item2" className="btn btn-xs">2</a>
    <a href="#item3" className="btn btn-xs">3</a>
    <a href="#item4" className="btn btn-xs">4</a>
  </div>
  </>
  )
}

export default Banner
