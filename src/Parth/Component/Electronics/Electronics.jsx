import React, { useState } from 'react'
import { Button, Col, Row, Card, Badge } from 'react-bootstrap'
import './Electronic.css'
// import { FaRegHeart } from "react-icons/fa";
// import { BsCart3 } from "react-icons/bs";

function Electronics() {

  const [mainImage, setMainImage] = useState(require('../../assets/V_Lion_laptop_1.png'));

  // Function to handle image click and update the main image
  const handleImageClick = (imageSrc) => {
    setMainImage(imageSrc);
  };
  return (
    <>
      {/* <section className='V_gradient text-white w-100 V_lion_padding '>
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
      </section> */}


      <section className='V_gradient text-white w-100 V_lion_padding'>
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
                {/* Display the dynamically updated main image */}
                <img src={mainImage} alt="Main laptop skin" className='w-100' />
              </div>
              <div className='d-flex flex-wrap justify-content-between pt-5 mt-lg-5'>
                {/* Thumbnails that update the main image on click */}
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





      <section className='pt-5 pb-3'>
        <div className='d_container pt-5'>
          <Row className='pt-5'>
            <Col className=''>
              <div className='d-flex justify-content-between'>
                <h1 className='V_new'>
                  NEW COLLECTION OF ELECTRONICS
                </h1>
                <p className='align-item-center V_view'>
                  Viwe More
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </section>



      <section className='pb-5'>
        <div className='d_container '>
          <Row className=''>
            <Col md={6} lg={6} xl={4} xxl={3} className='gap-3 pb-5'>
              <Card className="V_card">
                <Badge className="V_best_seller_tag py-3 px-5" bg="dark">
                  Best Seller
                </Badge>
                {/* <div className=' d-flex justify-content-between pt-3 px-3'>
                  <div>
                    <FaRegHeart className='V_heart' />
                  </div>
                  <div>
                    <BsCart3 className='V_heart' />
                  </div>
                </div> */}
                <Card.Img
                  variant="top"
                  src={require("../../assets/sony tv.png")} // Replace with your image URL
                  className="V_product_image pt-3"
                  alt="Sony Bravia TV"
                />
                <Card.Body className='p-0'>
                  <Card.Title>
                    <div className='d-flex justify-content-between px-3'>
                      <h1 className="V_brand">SONY</h1>
                      <div className="V_rating">
                        <span className="V_star">⭐</span>
                        <span className="V_rating_value align-item-center">4.5</span>
                      </div>
                    </div>
                  </Card.Title>
                  <Card.Text className="V_description px-3">
                    Bravia 2 127 cm (50 inch) 4K Ultra HD LED...
                  </Card.Text>
                  <Row>
                    <Col className="text-end">
                      <div className='V_price d-flex justify-content-between px-3 py-2'>
                        <div className='V_color bg-black align-content-center'></div>
                        <div className="V_price_container py-2">
                          <span className="V_discounted_price">$120</span>
                          <span><strike className="original-price">$140</strike></span>
                        </div>
                      </div>
                      {/* <div className='V_buynow bg-black text-white  py-2'>
                        <p className=''>Buy Now</p>
                      </div> */}
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={6} xl={4} xxl={3} className='gap-3 pb-5'>
              <Card className="V_card">
                <Badge className="V_best_seller_tag py-3 px-5" bg="dark">
                  Best Seller
                </Badge>
                {/* <div className=' d-flex justify-content-between pt-3 px-3'>
                  <div>
                    <FaRegHeart className='V_heart' />
                  </div>
                  <div>
                    <BsCart3 className='V_heart' />
                  </div>
                </div> */}
                <Card.Img
                  variant="top"
                  src={require("../../assets/Canon.png")} // Replace with your image URL
                  className="V_product_image pt-3"
                  alt="Sony Bravia TV"
                />
                <Card.Body className='p-0'>
                  <Card.Title>
                    <div className='d-flex justify-content-between px-3'>
                      <h1 className="V_brand">Canon</h1>
                      <div className="V_rating">
                        <span className="V_star">⭐</span>
                        <span className="V_rating_value align-item-center">4.5</span>
                      </div>
                    </div>
                  </Card.Title>
                  <Card.Text className="V_description px-3">
                    Canon EOS R5  mark II
                  </Card.Text>
                  <Row>
                    <Col className="text-end">
                      <div className='V_price d-flex justify-content-between px-3 py-2'>
                        <div className='V_color bg-black align-content-center'></div>
                        <div className="V_price_container py-2">
                          <span className="V_discounted_price">$120</span>
                          <span><strike className="original-price">$140</strike></span>
                        </div>
                      </div>
                      {/* <div className='V_buynow bg-black text-white  py-2'>
                        <p className=''>Buy Now</p>
                      </div> */}
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={6} xl={4} xxl={3} className='gap-3 pb-5'>
              <Card className="V_card">
                <Badge className="V_best_seller_tag py-3 px-5" bg="dark">
                  Best Seller
                </Badge>
                {/* <div className=' d-flex justify-content-between pt-3 px-3'>
                  <div>
                    <FaRegHeart className='V_heart' />
                  </div>
                  <div>
                    <BsCart3 className='V_heart' />
                  </div>
                </div> */}
                <Card.Img
                  variant="top"
                  src={require("../../assets/JBL_Headphone.png")} // Replace with your image URL
                  className="V_product_image pt-3"
                  alt="Sony Bravia TV"
                />
                <Card.Body className='p-0'>
                  <Card.Title>
                    <div className='d-flex justify-content-between px-3'>
                      <h1 className="V_brand">JBL</h1>
                      <div className="V_rating">
                        <span className="V_star">⭐</span>
                        <span className="V_rating_value align-item-center">4.5</span>
                      </div>
                    </div>
                  </Card.Title>
                  <Card.Text className="V_description px-3">
                    JBL Live 770NC
                  </Card.Text>
                  <Row>
                    <Col className="text-end">
                      <div className='V_price d-flex justify-content-between px-3 py-2'>
                        <div className='d-flex gap-2'>
                          <div className='V_color bg-black align-content-center'></div>
                          <div className='V_color1 align-content-center'></div>
                        </div>
                        <div className="V_price_container py-2">
                          <span className="V_discounted_price">$120</span>
                          <span><strike className="original-price">$140</strike></span>
                        </div>
                      </div>
                      {/* <div className='V_buynow bg-black text-white  py-2'>
                        <p className=''>Buy Now</p>
                      </div> */}
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={6} xl={4} xxl={3} className='gap-3 pb-5'>
              <Card className="V_card">
                <Badge className="V_best_seller_tag py-3 px-5" bg="dark">
                  Best Seller
                </Badge>
                {/* <div className=' d-flex justify-content-between pt-3 px-3'>
                  <div>
                    <FaRegHeart className='V_heart' />
                  </div>
                  <div>
                    <BsCart3 className='V_heart' />
                  </div>
                </div> */}
                <Card.Img
                  variant="top"
                  src={require("../../assets/ASUS.png")} // Replace with your image URL
                  className="V_product_image pt-3"
                  alt="Sony Bravia TV"
                />
                <Card.Body className='p-0'>
                  <Card.Title>
                    <div className='d-flex justify-content-between px-3'>
                      <h1 className="V_brand">ASUS</h1>
                      <div className="V_rating">
                        <span className="V_star">⭐</span>
                        <span className="V_rating_value align-item-center">4.5</span>
                      </div>
                    </div>
                  </Card.Title>
                  <Card.Text className="V_description px-3">
                    ROG Zephyrus G14,AI Powered Gaming Lapt...
                  </Card.Text>
                  <Row>
                    <Col className="text-end">
                      <div className='V_price d-flex justify-content-between px-3 py-2'>
                        <div className='d-flex gap-2'>
                          <div className='V_color bg-black align-content-center'></div>
                          <div className='V_color3 align-content-center'></div>
                        </div>
                        <div className="V_price_container py-2">
                          <span className="V_discounted_price">$120</span>
                          <span><strike className="original-price">$140</strike></span>
                        </div>
                      </div>
                      {/* <div className='V_buynow bg-black text-white  py-2'>
                        <p className=''>Buy Now</p>
                      </div> */}
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={6} xl={4} xxl={3} className='gap-3 pb-5'>
              <Card className="V_card">
                <Badge className="V_best_seller_tag py-3 px-5" bg="dark">
                  Best Seller
                </Badge>
                {/* <div className=' d-flex justify-content-between pt-3 px-3'>
                  <div>
                    <FaRegHeart className='V_heart' />
                  </div>
                  <div>
                    <BsCart3 className='V_heart' />
                  </div>
                </div> */}
                <Card.Img
                  variant="top"
                  src={require("../../assets/samsung.png")} // Replace with your image URL
                  className="V_product_image pt-3"
                  alt="Sony Bravia TV"
                />
                <Card.Body className='p-0'>
                  <Card.Title>
                    <div className='d-flex justify-content-between px-3'>
                      <h1 className="V_brand">SAMSUNG</h1>
                      <div className="V_rating">
                        <span className="V_star">⭐</span>
                        <span className="V_rating_value align-item-center">4.5</span>
                      </div>
                    </div>
                  </Card.Title>
                  <Card.Text className="V_description px-3">
                    Samsung S24 Ultra 5G
                  </Card.Text>
                  <Row>
                    <Col className="text-end">
                      <div className='V_price d-flex justify-content-between px-3 py-2'>
                        <div className='d-flex gap-2'>
                          <div className='V_color bg-black align-content-center'></div>
                          <div className='V_color2 align-content-center'></div>
                        </div>
                        <div className="V_price_container py-2">
                          <span className="V_discounted_price">$120</span>
                          <span><strike className="original-price">$140</strike></span>
                        </div>
                      </div>
                      {/* <div className='V_buynow bg-black text-white  py-2'>
                        <p className=''>Buy Now</p>
                      </div> */}
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={6} xl={4} xxl={3} className='gap-3 pb-5'>
              <Card className="V_card">
                {/* <Badge className="V_best_seller_tag py-3 px-5" bg="dark">
                  Best Seller
                </Badge> */}
                {/* <div className=' d-flex justify-content-between pt-3 px-3'>
                  <div>
                    <FaRegHeart className='V_heart' />
                  </div>
                  <div>
                    <BsCart3 className='V_heart' />
                  </div>
                </div> */}
                <Card.Img
                  variant="top"
                  src={require("../../assets/Realme.png")} // Replace with your image URL
                  className="V_product_image pt-3"
                  alt="Sony Bravia TV"
                />
                <Card.Body className='p-0'>
                  <Card.Title>
                    <div className='d-flex justify-content-between px-3'>
                      <h1 className="V_brand">REALME</h1>
                      <div className="V_rating">
                        <span className="V_star">⭐</span>
                        <span className="V_rating_value align-item-center">4.5</span>
                      </div>
                    </div>
                  </Card.Title>
                  <Card.Text className="V_description px-3">
                    Realme techlife T300
                  </Card.Text>
                  <Row>
                    <Col className="text-end">
                      <div className='V_price d-flex justify-content-between px-3 py-2'>
                        <div className='d-flex gap-2'>
                          <div className='V_color4 align-content-center'></div>
                          <div className='V_color5 align-content-center'></div>
                          <div className='V_color6 align-content-center'></div>
                        </div>
                        <div className="V_price_container py-2">
                          <span className="V_discounted_price">$120</span>
                          <span><strike className="original-price">$140</strike></span>
                        </div>
                      </div>
                      {/* <div className='V_buynow bg-black text-white  py-2'>
                        <p className=''>Buy Now</p>
                      </div> */}
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={6} xl={4} xxl={3} className='gap-3 pb-5'>
              <Card className="V_card">
                {/* <Badge className="V_best_seller_tag py-3 px-5" bg="dark">
                  Best Seller
                </Badge> */}
                {/* <div className=' d-flex justify-content-between pt-3 px-3'>
                  <div>
                    <FaRegHeart className='V_heart' />
                  </div>
                  <div>
                    <BsCart3 className='V_heart' />
                  </div>
                </div> */}
                <Card.Img
                  variant="top"
                  src={require("../../assets/boat.png")} // Replace with your image URL
                  className="V_product_image pt-3"
                  alt="Sony Bravia TV"
                />
                <Card.Body className='p-0'>
                  <Card.Title>
                    <div className='d-flex justify-content-between px-3'>
                      <h1 className="V_brand">Boat</h1>
                      <div className="V_rating">
                        <span className="V_star">⭐</span>
                        <span className="V_rating_value align-item-center">4.5</span>
                      </div>
                    </div>
                  </Card.Title>
                  <Card.Text className="V_description px-3">
                    Boat smart watch
                  </Card.Text>
                  <Row>
                    <Col className="text-end">
                      <div className='V_price d-flex justify-content-between px-3 py-2'>
                        <div className='d-flex gap-2'>
                          <div className='V_color7 align-content-center'></div>
                          <div className='V_color8 align-content-center'></div>
                          <div className='V_color9 align-content-center'></div>
                        </div>
                        <div className="V_price_container py-2">
                          <span className="V_discounted_price">$120</span>
                          <span><strike className="original-price">$140</strike></span>
                        </div>
                      </div>
                      {/* <div className='V_buynow bg-black text-white  py-2'>
                        <p className=''>Buy Now</p>
                      </div> */}
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={6} xl={4} xxl={3} className='gap-3 pb-5'>
              <Card className="V_card">
                {/* <Badge className="V_best_seller_tag py-3 px-5" bg="dark">
                  Best Seller
                </Badge> */}
                {/* <div className=' d-flex justify-content-between pt-3 px-3'>
                  <div>
                    <FaRegHeart className='V_heart' />
                  </div>
                  <div>
                    <BsCart3 className='V_heart' />
                  </div>
                </div> */}
                <Card.Img
                  variant="top"
                  src={require("../../assets/LG.png")} // Replace with your image URL
                  className="V_product_image pt-3"
                  alt="Sony Bravia TV"
                />
                <Card.Body className='p-0'>
                  <Card.Title>
                    <div className='d-flex justify-content-between px-3'>
                      <h1 className="V_brand">LG</h1>
                      <div className="V_rating">
                        <span className="V_star">⭐</span>
                        <span className="V_rating_value align-item-center">4.5</span>
                      </div>
                    </div>
                  </Card.Title>
                  <Card.Text className="V_description px-3">
                    655L Side-by-Side Refrigerator with Smart...
                  </Card.Text>
                  <Row>
                    <Col className="text-end">
                      <div className='V_price d-flex justify-content-between px-3 py-2'>
                        <div className='d-flex gap-2'>
                          <div className='V_color bg-black align-content-center'></div>
                          <div className='V_color10 align-content-center'></div>
                        </div>
                        <div className="V_price_container py-2">
                          <span className="V_discounted_price">$120</span>
                          <span><strike className="original-price">$140</strike></span>
                        </div>
                      </div>
                      {/* <div className='V_buynow bg-black text-white  py-2'>
                        <p className=''>Buy Now</p>
                      </div> */}
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </section>




      <section className='pb-5'>
        <div className=''>
          <Row className=''>
            <Col className=''>
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



      <section className='pb-5'>
        <div className='d_container'>
          <Row className=''>
            <Col className='d-flex flex-wrap'>
              <div className='V_five_pro px-3 py-2'>
                <img src={require('../../assets/five_air.png')} alt="" className='w-100 V_five' />
              </div>
              <div className='V_five_pro px-3 py-2'>
                <img src={require('../../assets/five_smart.png')} alt="" className='w-100 V_five' />
              </div>
              <div className='V_five_pro px-3 py-2'>
                <img src={require('../../assets/five_head.png')} alt="" className='w-100 V_five' />
              </div>
              <div className='V_five_pro px-3 py-2'>
                <img src={require('../../assets/five_mac.png')} alt="" className='w-100 V_five' />
              </div>
              <div className='V_five_pro px-3 py-2'>
                <img src={require('../../assets/five_iphone.png')} alt="" className='w-100 V_five' />
              </div>
            </Col>
          </Row>
        </div>
      </section>




      <section className=' pb-3'>
        <div className='d_container'>
          <Row className='pt-5'>
            <Col className=''>
              <div className=''>
                <h1 className='V_new'>
                  EXPLORE POPULAR BRANDS
                </h1>
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </>
  )
}

export default Electronics
