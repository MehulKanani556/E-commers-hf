import React, { useState } from 'react'
import OwlCarousel from 'react-owl-carousel';
import { GoArrowUpRight } from "react-icons/go";
import { FiPlus } from "react-icons/fi";
import '../css/style.css';

const Womenstore = () => {


  return (
    <>

      {/* Banner section Start */}

      <section>
        <OwlCarousel className='owl-theme' loop margin={10} nav items={1}>
          <div className='item'>
            <div className=" d_womenbannerbg">
              <div className="d_container">
                <div className="row align-items-center mx-0">
                  <div className="col-12 col-sm-6">
                    <div className="d_content">
                      <p className='mb-0'>The new stylish collection</p>
                      <div className="d_head">
                        <h2>New fall season 2024 </h2>
                      </div>
                      <div className="d_cta">
                        <a href="">Shop now <GoArrowUpRight className='ms-1 d_arrowicon' /></a>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-sm-6 px-0">
                    <div className="d_img d_fall_img">
                      <img src={require('./../d_img/womenbanner1.png')} alt="" />
                      <div className='d_pls'>
                        <div className='d_popup_par'>
                          <span className='d_plus d-flex align-items-center justify-content-center'>
                            <FiPlus className='d_plusicon' />
                          </span>
                          <div className='d_popup'>
                            <div className="d-flex  d_popbox me-4">
                              <div className="d_img">
                                <img src={require('./../d_img/subbannerimg1.png')} alt="" />
                              </div>
                              <div className="d_text d-flex flex-column">
                                <h6>White cotton blouse</h6>
                                <div className="d_price mt-auto">$38.50</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='d_pls2'>
                        <div className='d_popup_par'>
                          <span className='d_plus d-flex align-items-center justify-content-center'>
                            <FiPlus className='d_plusicon' />
                          </span>
                          <div className='d_popup'>
                            <div className="d-flex  d_popbox me-4">
                              <div className="d_img">
                                <img src={require('./../d_img/subbannerimg1.png')} alt="" />
                              </div>
                              <div className="d_text d-flex flex-column">
                                <h6>White cotton blouse</h6>
                                <div className="d_price mt-auto">$38.50</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='d_pls3'>
                        <div className='d_popup_par'>
                          <span className='d_plus d-flex align-items-center justify-content-center'>
                            <FiPlus className='d_plusicon' />
                          </span>
                          <div className='d_popup'>
                            <div className="d-flex  d_popbox me-4">
                              <div className="d_img">
                                <img src={require('./../d_img/subbannerimg1.png')} alt="" />
                              </div>
                              <div className="d_text d-flex flex-column">
                                <h6>White cotton blouse</h6>
                                <div className="d_price mt-auto">$38.50</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </OwlCarousel>
      </section >

      {/* Banner section End */}

    </>
  )
}

export default Womenstore
