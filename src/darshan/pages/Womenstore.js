import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import { GoArrowUpRight } from "react-icons/go";
import { FiPlus } from "react-icons/fi";
import '../css/style.css';
import Minisider from '../components/Minisider';
import Card from '../components/Card';
import Trending from '../components/Trending';
import Post from '../components/Post';
import Popularbrands from '../components/Popularbrands';

const Womenstore = () => {


  return (
    <>

      {/* Banner section Start */}

      <section className='d_firstbg'>
        <OwlCarousel className='owl-theme' loop items={1}>
          <div className='item owl_height'>
            <div className=" d_womenbannerbg overflow-hidden">
              <div className="d_container">
                <div className="row align-items-center mx-0">
                  <div className="col-12 col-sm-6">
                    <div className="d_content">
                      <p className='mb-0'>The new stylish collection</p>
                      <div className="d_head">
                        <h2>New fall season 2024 </h2>
                      </div>
                      <div className="d_cta">
                        <a href="" className='text-decoration-none'>Shop now <GoArrowUpRight className='ms-1 d_arrowicon' /></a>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-sm-6 px-0">
                    <div className="d_img d_fall_img">
                      <img src={require('./../d_img/womenbanner1.png')} className='w-100' alt="" />
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
          <div className='item owl_height'>
            <div className="d_bannersilder2 h-100 overflow-hidden">
              <div className="d_container ">
                <div className="row">
                  <div className="col-6 ">
                    <div className="d_content">
                      <h2>FASTRACK</h2>
                      <h3>BLACK FABRIC STRAP</h3>
                      <p>It’s Fastrack’s philosophy, its mantra, its battle cry. This simple phrase is the expression of the way the brand thinks, operates, communicates and works. It’s a blueprint for all that is Fastrack.</p>
                      <div className="d_cta mt-5">
                        <a href="" className='text-decoration-none'>Buy Now</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='item owl_height'>
            <div className="d_bannersilder3 h-100 overflow-hidden">
              <div className="d_container">
                <div className="row">
                  <div className="col-12">
                    <div className="d_text">
                      <h6>Simple & Elegant</h6>
                      <h2>Latest Jewelry Collections</h2>
                      <p className='mb-0'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document.</p>
                      <div className="d_cta mt-5">
                        <a href="" className='text-decoration-none'>Buy Now</a>
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

      {/* MinisSider section Start */}

      <Minisider />

      {/* MinisSider section End */}

      {/* Card section Start */}

      <Card />

      {/* Card section End */}

      {/* Trendign section start */}

      <Trending />

      {/* Trendign section end */}

      {/* Culture section start */}

      <section className='my-5'>
        <div className="d_culbg">
          <div className="d_container">
            <div className="row align-items-center">
              <div className="col-12 col-lg-5 col-xl-4 col-xxl-6">
                <h2>Where culture and style unite</h2>
              </div>
              <div className="col-12 col-lg-7 col-xl-8 col-xxl-6">
                <div className="d_imgcol position-relative ">
                  <img src={require('./../d_img/fashion1.png')} alt="Fashion 1" className="d_fimg1" />
                  <img src={require('./../d_img/fashion2.png')} alt="Fashion 2" className="d_fimg2" />
                  <img src={require('./../d_img/fashion3.png')} alt="Fashion 3" className="d_fimg3" />
                  <img src={require('./../d_img/fashion4.png')} alt="Fashion 4" className="d_fimg4" />
                  <img src={require('./../d_img/fashion5.png')} alt="Fashion 5" className="d_fimg5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Culture section end */}

      {/* Post section Start */}

      <Post />

      {/* Post section End */}

      {/* Popular Brands Section Start */}

      <Popularbrands />

      {/* Popular Brands Section End */}

    </>
  )
}

export default Womenstore
