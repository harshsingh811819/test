import React from 'react'
import { IoMdMail } from "react-icons/io";
import { FaKey } from "react-icons/fa6";

const UserRegister = () => {
  return (
    <>
<div className="row py-2 bg-color">
        <p className='text-center fs-3'>Register <b className='text-mycolor'>Here</b></p>
        <div className="col-sm-10 mx-auto">
          <div className="row py-3">
            <div className="col-sm-8 mx-auto shadow-lg p-3 bg-light rounded-2">
              <div className="row pb-3">
                <div className="col-sm-6">
                  Your Name <br />
                  <div className="input-group flex-nowrap">
                    <span className="input-group-text" id="basic-wrapping"><FaUserAlt/></span>
                    <input type="text" className="form-control" placeholder="Enter your name" aria-label="Username" aria-describedby="basic-wrapping" />
                  </div>
                </div>
                <div className="col-sm-6">
                  Your Name <br />
                  <div className="input-group flex-nowrap">
                    <span className="input-group-text" id="basic-wrapping"><FaEnvelope/></span>
                    <input type="email" className="form-control" placeholder="Enter your email" aria-label="Username" aria-describedby="basic-wrapping" />
                  </div>
                </div>
              </div>
              <div className="row pb-3">
                <div className="col-sm-6">
                  Your Mobile no. <br />
                  <div className="input-group flex-nowrap">
                    <span className="input-group-text" id="basic-wrapping"><IoCallSharp/></span>
                    <input type="text" className="form-control" placeholder="Enter your Mobile no." aria-label="Username" aria-describedby="basic-wrapping" />
                  </div>
                </div>
                <div className="col-sm-6">
                  Your Password <br />
                  <div className="input-group flex-nowrap">
                    <span className="input-group-text" id="basic-wrapping"><MdWifiPassword/></span>
                    <input type="email" className="form-control" placeholder="Enter your password" aria-label="Username" aria-describedby="basic-wrapping" />
                  </div>
                </div>
              </div>
              <div className="row pb-3">
                <div className="col-sm-6">
                  Country <br />
                  <div className="input-group flex-nowrap">
                    <select className='form-control'>
                      <option>Select Your Country</option>
                      <option>India</option>
                      <option>USA</option>
                      <option>Australia</option>
                      <option>South Africa</option>
                    </select>
                  </div>
                </div>
                <div className="col-sm-6">
                  State <br />
                  <div className="input-group flex-nowrap">
                    <select className='form-control'>
                      <option>Select Your State</option>
                      <option>Uttar Pradesh</option>
                      <option>Bihar</option>
                      <option>Uttarakhand</option>
                      <option>Madhya Pradesh</option>
                      <option>Jharkhad</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="row pb-3">
                <div className="col-sm-6">
                  City <br />
                  <div className="input-group flex-nowrap">
                    <select className='form-control'>
                      <option>Select Your City</option>
                      <option>India</option>
                      <option>USA</option>
                      <option>Australia</option>
                      <option>South Africa</option>
                    </select>
                  </div>
                </div>
                <div className="col-sm-6">
                  Profile Photo <br />
                  <div className="input-group flex-nowrap">
                  <input type="file" className='form-control' /></div>
                </div>
              </div>
              <div className="text-center">
                  <a className='btn btn-danger'>Register Now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default UserRegister
