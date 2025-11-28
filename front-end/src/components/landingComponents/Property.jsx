import React from 'react'
import { IoBedOutline } from "react-icons/io5";
import { FaUserAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { IoCallSharp } from "react-icons/io5";
import { MdWifiPassword } from "react-icons/md";


const Property = () => {
  return (
    <>
      <div className="row property py-2">
        <p className='text-center fs-3'>Featured <b className='text-mycolor'>Listings</b></p>
        <div className="col-sm-12 mx-auto">
          <div className="row py-3">
            <div className="col-sm-3 px-3">
              <div className="card mx-auto shadow-lg border border-0">
                <img src="/img/1.png" className="card-img-top img-fluid featureding" alt="..." />
                <div className="card-body">
                  <p className='text-mycolor'>Rs. 3,999/-</p>
                  <h5 className="card-title">New Apartment Nice View</h5>
                  <p className="card-text featuredp">Beautiful Huge 1 Family House In Heart Of Westbury . Newly Renovated With New Wood</p>
                  <div className="row">
                    <div className="col-4 featureddiv">
                      <p className='m-0'>3 <IoBedOutline /></p>
                      <span className='ps-2'>Bedrooms</span>
                    </div>
                    <div className="col-4 featureddiv">
                      <p className='m-0'>3 <IoBedOutline /></p>
                      <span className='ps-2'>Bedrooms</span>
                    </div>
                    <div className="col-4 ">
                      <p className='m-0'>3 <IoBedOutline /></p>
                      <span className='ps-2'>Bedrooms</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-3 px-3">
              <div className="card mx-auto shadow-lg border border-0">
                <img src="/img/2.jpg_2.jpeg" className="card-img-top img-fluid featureding" alt="..." />
                <div className="card-body">
                  <p className='text-mycolor'>Rs. 3,999/-</p>
                  <h5 className="card-title">Modern Apartments</h5>
                  <p className="card-text featuredp">Beautiful Huge 1 Family House In Heart Of Westbury . Newly Renovated With New Wood</p>
                  <div className="row">
                    <div className="col-4 featureddiv">
                      <p className='m-0'>3 <IoBedOutline /></p>
                      <span className='ps-2'>Bedrooms</span>
                    </div>
                    <div className="col-4 featureddiv">
                      <p className='m-0'>3 <IoBedOutline /></p>
                      <span className='ps-2'>Bedrooms</span>
                    </div>
                    <div className="col-4 ">
                      <p className='m-0'>3 <IoBedOutline /></p>
                      <span className='ps-2'>Bedrooms</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-3 px-3">
              <div className="card mx-auto shadow-lg border border-0">
                <img src="/img/menu-banner-1.jpg.jpeg" className="card-img-top img-fluid featureding" alt="..." />
                <div className="card-body">
                  <p className='text-mycolor'>Rs. 3,999/-</p>
                  <h5 className="card-title">Comfortable Apartment</h5>
                  <p className="card-text featuredp">Beautiful Huge 1 Family House In Heart Of Westbury . Newly Renovated With New Wood</p>
                  <div className="row">
                    <div className="col-4 featureddiv">
                      <p className='m-0'>3 <IoBedOutline /></p>
                      <span className='ps-2'>Bedrooms</span>
                    </div>
                    <div className="col-4 featureddiv">
                      <p className='m-0'>3 <IoBedOutline /></p>
                      <span className='ps-2'>Bedrooms</span>
                    </div>
                    <div className="col-4 ">
                      <p className='m-0'>3 <IoBedOutline /></p>
                      <span className='ps-2'>Bedrooms</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-3 px-3">
              <div className="card mx-auto shadow-lg border border-0">
                <img src="/img/4.png" className="card-img-top img-fluid featureding" alt="..." />
                <div className="card-body">
                  <p className='text-mycolor'>Rs. 3,999/-</p>
                  <h5 className="card-title">Luxury villa in Rego Park</h5>
                  <p className="card-text featuredp">Beautiful Huge 1 Family House In Heart Of Westbury . Newly Renovated With New Wood</p>
                  <div className="row">
                    <div className="col-4 featureddiv">
                      <p className='m-0'>3 <IoBedOutline /></p>
                      <span className='ps-2'>Bedrooms</span>
                    </div>
                    <div className="col-4 featureddiv">
                      <p className='m-0'>3 <IoBedOutline /></p>
                      <span className='ps-2'>Bedrooms</span>
                    </div>
                    <div className="col-4 ">
                      <p className='m-0'>3 <IoBedOutline /></p>
                      <span className='ps-2'>Bedrooms</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
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

export default Property
