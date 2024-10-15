import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import { GoArrowUpRight } from "react-icons/go";
import { FiPlus } from "react-icons/fi";
import '../css/style.css';
import Minisider from '../components/Minisider';
import Card from '../components/Card';
import Trending from '../components/Trending';

const Womenstore = () => {

  const fashionImages = [
    { src: require('./../d_img/fashion1.png'), alt: "Woman in floral saree" },
    { src: "/api/placeholder/120/300", alt: "Woman in floral gown" },
    { src: "/api/placeholder/120/290", alt: "Woman in white and floral dress" },
    { src: "/api/placeholder/120/270", alt: "Woman in mauve hijab and outfit" },
    { src: "/api/placeholder/120/260", alt: "Woman in pink dress" }
  ];


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

      {/* <Trending /> */}

      {/* Trendign section end */}

      {/* Culture section start */}

      {/* <section>
        <div className="d_culbg">
          <div className="d_container">
            <div className="row align-items-center">
              <div className="col-12 col-lg-6">
                <div className="d_heading">
                  <h5 className='mb-0'>Where culture and style unite</h5>
                </div>
              </div>
              <div className="col-12 col-lg-6">
                <div className="d_imgcol">
                  <div className="row">
                    <div className="col-2">
                      <img src={require('./../d_img/fashion1.png')} alt="" />
                    </div>
                    <div className="col-2">
                      <img src={require('./../d_img/fashion2.png')} alt="" />
                    </div>
                    <div className="col-2">
                      <img src={require('./../d_img/fashion3.png')} alt="" />
                    </div>
                    <div className="col-2">
                      <img src={require('./../d_img/fashion4.png')} alt="" />
                    </div>
                    <div className="col-2">
                      <img src={require('./../d_img/fashion5.png')} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}


      <div className="container-fluid p-0">
        <div className="row no-gutters">
          <div className="col-12">
            <div className="position-relative" style={{
              backgroundColor: '#FFC0CB',
              backgroundImage: 'radial-gradient(circle, #FFD1DC 20%, transparent 20%)',
              backgroundSize: '40px 40px',
              height: '300px',
              overflow: 'hidden'
            }}>
              <div className="container h-100">
                <div className="row h-100">
                  <div className="col-12 col-lg-6 d-flex align-items-center">
                    <h2 className="text-dark font-italic" style={{
                      fontWeight: 'bold',
                      fontSize: '2rem',
                      lineHeight: '1.2',
                      position: 'relative',
                      zIndex: 2
                    }}>
                      Where culture and<br />style unite
                    </h2>
                  </div>
                  <div className="col-12 col-lg-6">
                    <div className="d_imgcol position-relative h-100">
                      <img src={require('./../d_img/fashion1.png')} alt="Fashion 1" className="fashion-img" style={{ left: '0%', height: '95%', zIndex: 5 }} />
                      <img src={require('./../d_img/fashion2.png')} alt="Fashion 2" className="fashion-img" style={{ left: '20%', height: '100%', zIndex: 4 }} />
                      <img src={require('./../d_img/fashion3.png')} alt="Fashion 3" className="fashion-img" style={{ left: '40%', height: '97%', zIndex: 3 }} />
                      <img src={require('./../d_img/fashion4.png')} alt="Fashion 4" className="fashion-img" style={{ left: '60%', height: '93%', zIndex: 2 }} />
                      <img src={require('./../d_img/fashion5.png')} alt="Fashion 5" className="fashion-img" style={{ left: '80%', height: '90%', zIndex: 1 }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Culture section end */}



    </>
  )
}

export default Womenstore
