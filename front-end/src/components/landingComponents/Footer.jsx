import React from 'react'
import { IoLocationSharp } from "react-icons/io5";
import { IoIosCall } from "react-icons/io";
import { IoMdMail } from "react-icons/io";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { TfiLinkedin } from "react-icons/tfi";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="row footer">
        <div className="col-sm-10 mx-auto pb-3">
          <div className="row">
            <div className="col-sm-3 pt-3 text-light">
              <img src="/img/logo-2.png" alt="" className='img-fluid footerlogo'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolor quaerat laudantium, quam veniam eaque. Debitis architecto, </p>
              <span><IoLocationSharp/> Sec-5 Vikas Nagar</span><br />
              <span><IoIosCall/> +91-0123456789</span><br />
              <span><IoMdMail/> abc@example.com</span><br />
              <span className='fs-4'><FaYoutube />  <FaFacebookF/> <TfiLinkedin/> <FaTwitter/></span>
            </div>
            <div className="col-sm-6 pt-3 ps-5">
              <div className="row">
                <div className="col-sm-4 pt-2 text-light">
                  <p><b>Company</b></p>
                  <span>About</span><br />
                  <span>Blog</span><br />
                  <span>All Product</span><br />
                  <span>Locations Map</span><br />
                  <span>FAQ</span><br />
                  <span>Contact us</span><br />
                </div>
                <div className="col-sm-4 pt-2 text-light">
                  <p><b>Services</b></p>
                  <span>Order tracking</span><br />
                  <span>Wish List</span><br />
                  <span>Login</span><br />
                  <span>My account</span><br />
                  <span>Terms & Conditions</span><br />
                  <span>Promotional Offers</span><br />
                </div>
                <div className="col-sm-4 pt-2 text-light">
                  <p><b>Customer Care</b></p>
                  <span>Login</span><br />
                  <span>My account</span><br />
                  <span>Wish List</span><br />
                  <span>Order tracking</span><br />
                  <span>FAQ</span><br />
                  <span>Contact us</span><br />
                </div>
              </div>
            </div>
            <div className="col-sm-3 pt-3 text-light">
              <p><b>Write your Feedback</b></p>
              <input type="text" className='form-control px-4 feedinput mb-2' placeholder='Enter your name?' />
              <input type="text" className='form-control px-4 feedinput mb-2' placeholder='Enter your Designation?' />
              <input type="text" className='form-control px-4 feedinput mb-2' placeholder='Enter your Feedback?' />
              <input type="file" className='form-control px-4 feedinput' />
              <input type="submit" value='Submit Now' className='mt-2 bg-success border-0 rounded-5'/>
            </div>
          </div>
        </div>
      </div> 
    </>
  )
}

export default Footer
