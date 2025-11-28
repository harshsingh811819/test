import React from 'react'
import { BiArea } from "react-icons/bi";
import { FaRegBuilding } from "react-icons/fa";
import { PiSeatFill } from "react-icons/pi";
import { GiBulldozer } from "react-icons/gi";

const Counter = () => {
  return (
    <>
      <div className="row divcounter bg-light">
        <div className="col-sm-10 mx-auto">
          <div className="row">
            <div className="col-sm-3">
              <div className='countericon'><BiArea className="fs-1"/></div>
              <h1 className='text-center pt-3'>560+</h1>
              <p className='text-center'>Total Area Sq</p>
            </div>
            <div className="col-sm-3">
              <div className='countericon'><FaRegBuilding className="fs-1"/></div>
              <h1 className='text-center pt-3'>197K+</h1>
              <p className='text-center'>Apartments Sold</p>
            </div>
            <div className="col-sm-3">
              <div className='countericon'><GiBulldozer className="fs-1"/></div>
              <h1 className='text-center pt-3'>268+</h1>
              <p className='text-center'>Total Construction</p>
            </div>
            <div className="col-sm-3">
              <div className='countericon'><PiSeatFill className="fs-1"/></div>
              <h1 className='text-center pt-3'>340+</h1>
              <p className='text-center'>Apartio Rooms</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Counter
