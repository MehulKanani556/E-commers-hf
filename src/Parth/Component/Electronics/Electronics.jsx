import React, { useRef } from 'react';
// import { Button, Col, Row, Card, Badge } from 'react-bootstrap';
import './Electronic.css';
import ElectronicSlider from '../Electronics/ElectronicSlider'
import Elecroniccollection from './Elecroniccollection';
import Header from '../../../Vivek/Component/header/Header';
import Subscribe from '../../../Vivek/Component/common/Subscribe';
import ElectronicPost from './ElectronicPost'
import Process from '../../../Vivek/Component/common/Process';
import Footer from '../../../Vivek/Component/footer/Footer';
import Gridcomponent from './Gridcomponent';
import Threeview from './Threeview';
import { Row, Col, Button } from 'react-bootstrap'
import OwlCarousel from 'react-owl-carousel';
import mainImageSrc from '../../assets/V_Lion_laptop_1.png';


function Electronics() {

  const mainImageRef = useRef(null); // Create a ref for the main image

  const handleImageClick = (newImageSrc) => {
    if (mainImageRef.current) {
      mainImageRef.current.src = newImageSrc; // Update the main image src directly
    }
  };


  return (
    <>
      {/* header */}
      <Header />


      {/* 
      <section className='V_gradient text-white w-100 V_lion_padding'>
        <div className='d_container'>
          <Row className='m-0'>
            <Col lg={6} className='align-self-center'>
              <div className='pe-xxl-5'>
                <h1 className='V_lion_skin pe-xxl-5'>Laptop <b>Skin</b> Cover Laminated Black <b>The Lion</b></h1>
                <p className='V_lion_ptag pe-xxl-5'>Story Stickers and Free Track pad Skin Girls Boys Kids Students Office Vinyl Printed Multicolored Sticker 14 Inches (MC 7)</p>
              </div>
              <div className='pt-3'>
                <Button className='py-2 px-5 bg-white text-dark'>Buy Now</Button>
              </div>
            </Col>
            <Col lg={6} className='pt-5 pt-lg-0'>
              <div>
                <img src={mainImage} alt="Main laptop skin" className='w-100' />
              </div>
              <div className='d-flex flex-wrap justify-content-between pt-5 mt-lg-5'>
                <img
                  src={require('../../assets/V_lion_laptop_2.png')}
                  alt="Laptop skin option 1"
                  className='V_img_height'
                  onClick={() => handleImageClick(require('../../assets/V_lion_laptop_2.png'))}
                />
                <img
                  src={require('../../assets/V_lion_laptop_3.png')}
                  alt="Laptop skin option 2"
                  className='V_img_height'
                  onClick={() => handleImageClick(require('../../assets/V_lion_laptop_3.png'))}
                />
                <img
                  src={require('../../assets/V_lion_laptop_4.png')}
                  alt="Laptop skin option 3"
                  className='V_img_height'
                  onClick={() => handleImageClick(require('../../assets/V_lion_laptop_4.png'))}
                />
                <img
                  src={require('../../assets/V_lion_laptop_5.png')}
                  alt="Laptop skin option 4"
                  className='V_img_height'
                  onClick={() => handleImageClick(require('../../assets/V_lion_laptop_5.png'))}
                />
              </div>
            </Col>
          </Row>
        </div>
      </section> */}



      <section className=''>
        <OwlCarousel className='owl-theme' loop items={1}>
          <div className='item V_slider_height'>
            <div className='V_ele_slider_2_back'>
              <div className="d_container h-100">
                <div className="row m-0 h-100 d-flex justify-content-center flex-md-column-reverse flex-column-reverse">
                  <div className='col-md-6 text-white align-self-center'>
                    <div className='text-white V_laptop_text_width'>
                      <h1 className='V_the_lion'>Laptop <strong>Skin</strong> Cover Laminated Black <strong>The Lion</strong></h1>
                      <p className='V_story_stickers'>Story Stickers and Free Track pad Skin Girls Boys Kids Students Office Vinyl Printed Multicolored Sticker 14 Inches (MC 7)</p>
                    </div>
                    <div className='pt-2 pt-sm-3 pt-lg-5'>
                      <Button className='py-2 px-5 V_skin_button'>Buy Now</Button>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className='d-flex justify-content-between flex-md-column flex-row'>
                      <div className="py-2 py-sm-3 py-md-5 mt-lg-5 d-flex justify-content-center">
                        {/* Main image that changes on click */}
                        <img ref={mainImageRef} src={mainImageSrc} alt="Main laptop skin" className='w-100 V_main_img' />
                      </div>
                      <div className="py-2 py-sm-3 py-md-5 d-flex justify-content-between">
                        <div className='d-flex'>
                          <div className='d-flex flex-md-row flex-column'>
                            {/* Child images that update the main image on click */}
                            <img
                              src={require('../../assets/V_lion_laptop_2.png')}
                              alt="Laptop skin option 1"
                              className='V_child_img px-xl-3 px-2'
                              onClick={() => handleImageClick(require('../../assets/V_lion_laptop_2.png'))}
                            />
                            <img
                              src={require('../../assets/V_lion_laptop_3.png')}
                              alt="Laptop skin option 2"
                              className='V_child_img px-xl-3 px-2'
                              onClick={() => handleImageClick(require('../../assets/V_lion_laptop_3.png'))}
                            />
                          </div>
                          <div className='d-flex flex-md-row flex-column'>
                            <img
                              src={require('../../assets/V_lion_laptop_4.png')}
                              alt="Laptop skin option 3"
                              className='V_child_img px-xl-3 px-2'
                              onClick={() => handleImageClick(require('../../assets/V_lion_laptop_4.png'))}
                            />
                            <img
                              src={require('../../assets/V_lion_laptop_5.png')}
                              alt="Laptop skin option 4"
                              className='V_child_img px-xl-3 px-2'
                              onClick={() => handleImageClick(require('../../assets/V_lion_laptop_5.png'))}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='item V_slider_height'>
            <div className="V_boat">
              <div className="d_container h-100">
                <div className="row m-0 V_boat_text  d-flex align-items-center h-100 flex-column-reverse flex-md-row">
                  <div className="col-md-6">
                    <div className="V_460 py-2">
                      <div>
                        <h1 className='V_rockerz '>boAt Rockerz 460</h1>
                        <p className="V_bluethooth text-white">BLUETOOTH HEADPHONES</p>
                      </div>
                      <div className='my-2 my-sm-3 my-lg-5'>
                        <Button className=' py-2 px-5 V_buy_head'>Buy Now</Button>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <img src={require('../../assets/boat rockrez.png')} alt="" className=' V_boat_img ' />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='item V_slider_height'>
            <div className="V_noise">
              <div className="d_container h-100">
                <div className="row m-0 d-flex align-items-center h-100 flex-column-reverse flex-md-row">
                  <div className="col-md-6">
                    <div className="V_noise_width py-2">
                      <img src={require('../../assets/noise logo.png')} alt="" className=' V_logo_img ' />
                      <h1 className='V_moment pt-sm-2 pt-md-3'>The Perfect Moment
                        <span className='V_between'> Between Past And
                          Future.</span></h1>

                      <Button className='my-2 my-sm-3 my-lg-5 py-2 px-5 V_buy_noise'>Buy Now</Button>
                    </div>
                  </div>
                  <div className="col-md-6 align-self-center m-0">
                    <img src={require('../../assets/noise watch.png')} alt="" className=' V_noise_img ' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </OwlCarousel>
      </section >


      {/* sldier */}
      <ElectronicSlider />

      {/* product best deal */}
      <Threeview />

      {/* Electronics collection */}
      <Elecroniccollection />


      <section className='pb-5'>
        <div className=''>
          <Row className='m-0'>
            <Col className='p-0'>
              <div className='V_back_spe_off d-flex align-items-center'>
                <div className="d_container">
                  <div className='V_special '>
                    <p className='px-3 py-2 text-white text-center'>Special Offer</p>
                  </div>
                  <div>
                    <h1 className='V_sale'>On Mobile Phones
                      Sale Up To
                      <span className='V_thirty30'> 30%</span> Off</h1>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>


      {/* Electronic post */}
      <ElectronicPost />

      {/* grid view */}
      <Gridcomponent />

      {/* new sletter */}
      <Subscribe />

      {/* process */}
      <Process />

      {/* footer */}
      <Footer />






    </>
  )
}

export default Electronics
