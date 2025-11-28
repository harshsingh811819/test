import React from 'react'
import {RiDoubleQuotesL} from 'react-icons/ri'

const Testimonial = () => {
  return (
    <>
      <div className="row py-2">
        <p className='fd-3 text-center'><b className='text-mycolor'>Our Testimonial</b></p>
        <div className="col-sm-10 mx-auto">
          <div className="row py-3">
            <div className="col-sm-4">
              <div className="card border-0 shadow-lg mx-auto rounded-2 feedcard w-75 pb-3">
                <span className='feedtop'><RiDoubleQuotesL/></span>
                <p className=' px-3 feedtext'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus, a? Alias ad illum iusto quae maxime vero eius architecto, beatae distinctio, illo assumenda quam magnam autem! Ullam corporis dolore asperiores?</p>
                <div className="row g-0">
                  <div className="col-4">
                    <img src="/img/1.jpg_1.jpeg" alt="" className='img-fluid feedimg'/>
                  </div>
                  <div className="col-8">
                    <span>
                      <b>ABC SINGH</b> <br />
                      Selling Agent
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="card border-0 shadow-lg mx-auto rounded-2 feedcard w-75 pb-3">
                <span className='feedtop'><RiDoubleQuotesL/></span>
                <p className=' px-3 feedtext'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus, a? Alias ad illum iusto quae maxime vero eius architecto, beatae distinctio, illo assumenda quam magnam autem! Ullam corporis dolore asperiores?</p>
                <div className="row g-0">
                  <div className="col-4">
                    <img src="/img/1.jpg_1.jpeg" alt="" className='img-fluid feedimg'/>
                  </div>
                  <div className="col-8">
                    <span>
                      <b>ABC SINGH</b> <br />
                      Selling Agent
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="card border-0 shadow-lg mx-auto rounded-2 feedcard w-75 pb-3">
                <span className='feedtop'><RiDoubleQuotesL/></span>
                <p className=' px-3 feedtext'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus, a? Alias ad illum iusto quae maxime vero eius architecto, beatae distinctio, illo assumenda quam magnam autem! Ullam corporis dolore asperiores?</p>
                <div className="row g-0">
                  <div className="col-4">
                    <img src="/img/1.jpg_1.jpeg" alt="" className='img-fluid feedimg'/>
                  </div>
                  <div className="col-8">
                    <span>
                      <b>ABC SINGH</b> <br />
                      Selling Agent
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Testimonial
