import React from 'react'
import { FaHome } from "react-icons/fa";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { IoMdMail } from "react-icons/io";
import { FaKey } from "react-icons/fa6";

const schema = yup
  .object()
  .shape({
    email: yup.string().email(),
    password: yup.string().min(8).max(20),
  })

const Login = () => {
  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });
  return (
   <>
      <div className="row p-5" style={{background:"#f9f1f0"}}>
        <div className="col-sm-3"></div>
        <div className="col-sm-6 d-flex justify-content-center flex-column">
          <div className='text-danger text-center fs-2 mb-3'>Sign In</div>
          <div className='bg-light p-5 rounded shadow'>
            <div className="input-group mb-3 d-flex flex-column">
            <label htmlFor="" className='pt-2'>Your Email</label>
            <div className="input-group-prepend">
              <span className="input-group-text"><IoMdMail style={{height:"30px"}}/></span>
            </div>
          </div>
          <div className="input-group mb-3 d-flex flex-column">
            <label htmlFor="" className='pt-2'>Password</label>
            <div className="input-group-prepend">
              <span className="input-group-text"><FaKey style={{height:"30px"}}/></span>
            </div>
          </div>
          <button type="submit" className="btn btn-outline-danger mt-3 fw-bold" style={{width:"150px",height:"45px", marginLeft:"190px"}}>Submit</button>
          </div>
        </div>
        <div className="col-sm-3"></div>
      </div>


    </>

  )
}

export default Login
