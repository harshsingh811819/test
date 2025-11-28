import React from 'react'
import { FaCar } from "react-icons/fa";
import { LiaSwimmingPoolSolid } from "react-icons/lia";
import { MdSecurity } from "react-icons/md";
import { BiPlusMedical } from "react-icons/bi";
import { IoLibrarySharp } from "react-icons/io5";
import { IoIosBed } from "react-icons/io";
import { BsHouseHeartFill } from "react-icons/bs";
import { FaRegBuilding } from "react-icons/fa6";


const OurAnimities = () => {
  return (
    <>
      <div className="row py-2">
        <p className='fd-3 text-center'><b className='text-mycolor'>Our Animities</b></p>
        <div className="col-sm-10 mx-auto">
          <div className="row py-3">
            <div className="col-sm-3 pt-5">
              <div className="card mx-auto shadow-lg border border-0 p-4 position-relative">
                <div className='cardic'><FaCar/></div>
                <h3 className='mt-3 text-center'>Parking Space</h3>
                <div className="cardbtn position-absolute top-100 start-50 translate-middle">&rarr;</div>
              </div>
            </div>
            <div className="col-sm-3 pt-5">
              <div className="card mx-auto shadow-lg border border-0 p-4 position-relative">
                <div className='cardic'><LiaSwimmingPoolSolid/></div>
                <h3 className='mt-3 text-center'>Parking Space</h3>
                <div className="cardbtn position-absolute top-100 start-50 translate-middle">&rarr;</div>
              </div>
            </div>
            <div className="col-sm-3 pt-5">
              <div className="card mx-auto shadow-lg border border-0 p-4 position-relative">
                <div className='cardic'><MdSecurity/></div>
                <h3 className='mt-3 text-center'>Parking Space</h3>
                <div className="cardbtn position-absolute top-100 start-50 translate-middle">&rarr;</div>
              </div>
            </div>
            <div className="col-sm-3 pt-5">
              <div className="card mx-auto shadow-lg border border-0 p-4 position-relative">
                <div className='cardic'><BiPlusMedical/></div>
                <h3 className='mt-3 text-center'>Parking Space</h3>
                <div className="cardbtn position-absolute top-100 start-50 translate-middle">&rarr;</div>
              </div>
            </div>
            <div className="col-sm-3 pt-5">
              <div className="card mx-auto shadow-lg border border-0 p-4 position-relative">
                <div className='cardic'><IoLibrarySharp/></div>
                <h3 className='mt-3 text-center'>Parking Space</h3>
                <div className="cardbtn position-absolute top-100 start-50 translate-middle">&rarr;</div>
              </div>
            </div>
            <div className="col-sm-3 pt-5">
              <div className="card mx-auto shadow-lg border border-0 p-4 position-relative">
                <div className='cardic'><IoIosBed/></div>
                <h3 className='mt-3 text-center'>Parking Space</h3>
                <div className="cardbtn position-absolute top-100 start-50 translate-middle">&rarr;</div>
              </div>
            </div>
            <div className="col-sm-3 pt-5">
              <div className="card mx-auto shadow-lg border border-0 p-4 position-relative">
                <div className='cardic'><BsHouseHeartFill/></div>
                <h3 className='mt-3 text-center'>Parking Space</h3>
                <div className="cardbtn position-absolute top-100 start-50 translate-middle">&rarr;</div>
              </div>
            </div>
            <div className="col-sm-3 pt-5">
              <div className="card mx-auto shadow-lg border border-0 p-4 position-relative">
                <div className='cardic'><FaRegBuilding/></div>
                <h3 className='mt-3 text-center'>Parking Space</h3>
                <div className="cardbtn position-absolute top-100 start-50 translate-middle">&rarr;</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default OurAnimities
