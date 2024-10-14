import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import './Electronic.css'

function Electronics() {
  return (
    <>
      <section className='V_gradient text-white w-100 V_lion_padding '>
        <div className='d_container'>
          <Row className=''>
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
                <img src={require("../../assets/V_Lion_laptop_1.png")} alt="" className='w-100' />
              </div>
              <div className='d-flex flex-wrap justify-content-between pt-5 mt-lg-5 '>
                <img src={require("../../assets/V_lion_laptop_2.png")} alt="" className='V_img_height ' />
                <img src={require("../../assets/V_lion_laptop_3.png")} alt="" className='V_img_height' />
                <img src={require("../../assets/V_lion_laptop_4.png")} alt="" className='V_img_height' />
                <img src={require("../../assets/V_lion_laptop_5.png")} alt="" className='V_img_height' />
              </div>
            </Col>
          </Row>
        </div>
      </section>

      <section className='text-white'>
        <div className=''>
          <Row className='py-5 px-3 p-lg-5'>
            <Col lg={4} className='mt-lg-3 pt-3'>
              <div className='text-white V_best_img V_best_img_1'>
                <div className='V_laptop pt-lg-3'>
                  <h3 className='v_mega pt-5 '>
                    Best Deal On Laptops
                  </h3>
                </div>
              </div>
            </Col>

            <Col lg={4} className='pt-3'>
              <div className='text-white V_best_img V_best_img_2'>
                <div className='V_laptop pt-lg-3'>
                  <h3 className='v_mega pt-5'>
                    MEGA SALE
                  </h3>
                  <p className='V_on'>On Home Appliances</p>
                </div>
              </div>
            </Col>

            <Col lg={4} className='mt-lg-3 pt-3'>
              <div className='text-white V_best_img V_best_img_3'>
                <div className='V_laptop1 pt-lg-3'>
                  <p className='V_on1 pt-5'>Galaxy S24</p>
                  <h3 className='v_mega1 '>
                    BEST SAMSUNG MOBILE PHONES
                  </h3>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>





      <section className='pt-5'>
        <div className='d_container pt-5'>
          <Row className='pt-5'>
            <Col className=''>
              <div className='d-flex justify-content-between'>
                <h1 className='V_new'>
                  NEW COLLECTION OF ELECTRONICS
                </h1>
                <p className='align-self-center V_view'>
                  Viwe More
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </>
  )
}

export default Electronics
