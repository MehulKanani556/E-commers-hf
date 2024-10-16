import React from 'react'
import { FaStar } from "react-icons/fa";

import './../css/trending.css'
import { IoMdHeartEmpty } from 'react-icons/io';
import { IoCartOutline } from 'react-icons/io5';

const Trending = () => {
  return (
    <>

      <section className='d_p-80 d_trend'>
        <div className="d_container">
          <div className="d_margin">
            <div className="d_head d-flex justify-content-between align-items-center">
              <h4 className='mb-0'>trending Navratri Collection for you</h4>
              <p className='mb-0'><a href="" className='text-decoration-none'>View More</a></p>
            </div>
            <div className="row gy-3">
              <div className="col-12 col-sm-6 col-lg-3">
                <div className="d_box mx-2">
                  <div className="d_img">
                    <img src={require('./../d_img/trend1.png')} alt="" />
                    <div className="d_seller">
                      Best Seller
                    </div>
                    <div className="d_trendicon d-flex  justify-content-between w-100">
                      <IoMdHeartEmpty className='d_icon' />
                      <IoCartOutline className='d_icon' />
                    </div>
                  </div>
                  <div className="d_content">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="d_name">Traditional Chaniya choli</div>
                      <div className='d-flex align-items-center'>
                        <FaStar className='d_staricon me-1' />
                        <div className="d_review">4.5</div>
                      </div>
                    </div>
                    <div className="d_desc">Magenta cotton silk chaniya choli</div>
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="d-flex align-items-center">
                        <div className="d_color active"></div>
                        <div className="d_color" style={{ backgroundColor: "#6BC89B" }}></div>
                        <div className="d_color" style={{ backgroundColor: "#C796D8" }}></div>
                        <div className="d_color" style={{ backgroundColor: "#6B8AC8" }}></div>
                      </div>
                      <div className="d-flex align-items-end">
                        <div className="d_price">$120</div>
                        <div className="d_disprice ms-1 text-decoration-line-through">$140</div>
                      </div>
                    </div>
                  </div>
                  <div className="d_buy">
                    <a href="" className='d-block text-center text-decoration-none'>Buy Now</a>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-lg-3">
                <div className="d_box mx-2">
                  <div className="d_img">
                    <img src={require('./../d_img/trend2.png')} alt="" />
                    {/* <div className="d_seller">
                    Best Seller
                  </div> */}
                    <div className="mx-1">
                      <div className="d_trendicon d-flex  justify-content-between w-100">
                        <IoMdHeartEmpty className='d_icon' />
                        <IoCartOutline className='d_icon' />
                      </div>
                    </div>
                  </div>
                  <div className="d_content">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="d_name">Traditional Chaniya choli</div>
                      <div className='d-flex align-items-center'>
                        <FaStar className='d_staricon me-1' />
                        <div className="d_review">4.5</div>
                      </div>
                    </div>
                    <div className="d_desc">Magenta cotton silk chaniya choli</div>
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="d-flex align-items-center">
                        <div className="d_color active"></div>
                        <div className="d_color" style={{ backgroundColor: "#6BC89B" }}></div>
                        <div className="d_color" style={{ backgroundColor: "#C796D8" }}></div>
                        <div className="d_color" style={{ backgroundColor: "#6B8AC8" }}></div>
                      </div>
                      <div className="d-flex align-items-end">
                        <div className="d_price">$120</div>
                        <div className="d_disprice ms-1 text-decoration-line-through">$140</div>
                      </div>
                    </div>
                  </div>
                  <div className="d_buy">
                    <a href="" className='d-block text-center text-decoration-none'>Buy Now</a>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-lg-3">
                <div className="d_box mx-2">
                  <div className="d_img">
                    <img src={require('./../d_img/trend3.png')} alt="" />
                    <div className="d_seller">
                      Best Seller
                    </div>
                    <div className="mx-1">
                      <div className="d_trendicon d-flex  justify-content-between w-100">
                        <IoMdHeartEmpty className='d_icon' />
                        <IoCartOutline className='d_icon' />
                      </div>
                    </div>
                  </div>
                  <div className="d_content">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="d_name">Traditional Chaniya choli</div>
                      <div className='d-flex align-items-center'>
                        <FaStar className='d_staricon me-1' />
                        <div className="d_review">4.5</div>
                      </div>
                    </div>
                    <div className="d_desc">Magenta cotton silk chaniya choli</div>
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="d-flex align-items-center">
                        <div className="d_color active"></div>
                        <div className="d_color" style={{ backgroundColor: "#6BC89B" }}></div>
                        <div className="d_color" style={{ backgroundColor: "#C796D8" }}></div>
                        <div className="d_color" style={{ backgroundColor: "#6B8AC8" }}></div>
                      </div>
                      <div className="d-flex align-items-end">
                        <div className="d_price">$120</div>
                        <div className="d_disprice ms-1 text-decoration-line-through">$140</div>
                      </div>
                    </div>
                  </div>
                  <div className="d_buy">
                    <a href="" className='d-block text-center text-decoration-none'>Buy Now</a>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-lg-3">
                <div className="d_box mx-2">
                  <div className="d_img">
                    <img src={require('./../d_img/trend4.png')} alt="" />
                    <div className="d_seller">
                      Best Seller
                    </div>
                    <div className="mx-1">
                      <div className="d_trendicon d-flex  justify-content-between w-100">
                        <IoMdHeartEmpty className='d_icon' />
                        <IoCartOutline className='d_icon' />
                      </div>
                    </div>
                  </div>
                  <div className="d_content">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="d_name">Traditional Chaniya choli</div>
                      <div className='d-flex align-items-center'>
                        <FaStar className='d_staricon me-1' />
                        <div className="d_review">4.5</div>
                      </div>
                    </div>
                    <div className="d_desc">Magenta cotton silk chaniya choli</div>
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="d-flex align-items-center">
                        <div className="d_color active"></div>
                        <div className="d_color" style={{ backgroundColor: "#6BC89B" }}></div>
                        <div className="d_color" style={{ backgroundColor: "#C796D8" }}></div>
                        <div className="d_color" style={{ backgroundColor: "#6B8AC8" }}></div>
                      </div>
                      <div className="d-flex align-items-end">
                        <div className="d_price">$120</div>
                        <div className="d_disprice ms-1 text-decoration-line-through">$140</div>
                      </div>
                    </div>
                  </div>
                  <div className="d_buy">
                    <a href="" className='d-block text-center text-decoration-none'>Buy Now</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default Trending
