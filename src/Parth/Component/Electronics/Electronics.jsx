import React, { useState } from 'react';
// import { Button, Col, Row, Card, Badge } from 'react-bootstrap';
import './Electronic.css';
import ElectronicSlider from '../Electronics/ElectronicSlider'
import Elecroniccollection from './Elecroniccollection';
import Header from '../../../Vivek/Component/header/Header';
import Subscribe from '../../../Vivek/Component/common/Subscribe';
import Process from '../../../Vivek/Component/common/Process';
import Footer from '../../../Vivek/Component/footer/Footer';
import Gridcomponent from '../gridcomponent/Gridcomponent';
import Threeview from './Threeview';

function Electronics() {

  const [mainImage, setMainImage] = useState(require('../../assets/V_Lion_laptop_1.png'));

  // Function to handle image click and update the main image
  const handleImageClick = (imageSrc) => {
    setMainImage(imageSrc);
  };

  const products = [
    {
      id: 1,
      bestSeller: true,
      name: "SONY",
      description: " Bravia 2 127 cm (50 inch) 4K Ultra HD LED...",
      image: require('../../assets/sony tv.png'), // Replace with actual image URL
      price: "$120",
      actualPrice: "$140",
      rating: "4.5",
      colors: ["#000000"]
    },
    {
      id: 2,
      bestSeller: false,
      name: "CANON",
      description: " Canon EOS R5  mark II",
      image: require('../../assets/Canon.png'), // Replace with actual image URL
      price: "$120",
      actualPrice: "$140",
      rating: "4.5",
      colors: ["#000000"]
    },
    {
      id: 3,
      bestSeller: true,
      name: "JBL",
      description: "JBL Live 770NC",
      image: require('../../assets/JBL_Headphone.png'), // Replace with actual image URL
      price: "$120",
      actualPrice: "$140",
      rating: "4.5",
      colors: ["#1D1D1E", "#16325B"]
    },
    {
      id: 4,
      bestSeller: true,
      name: "ASUS",
      description: "ROG ZephyrusG14,AI Powered Gaming Lapt..",
      image: require('../../assets/ASUS.png'), // Replace with actual image URL
      price: "$120",
      actualPrice: "$140",
      rating: "4.5",
      colors: ["#000000", "#989898"]
    },
    {
      id: 5,
      bestSeller: true,
      name: "SAMSUNG",
      description: " Samsung S24 Ultra 5G",
      image: require('../../assets/samsung.png'), // Replace with actual image URL
      price: "$120",
      actualPrice: "$140",
      rating: "4.5",
      colors: ["#DFD1A2", "#000000"]
    },
    {
      id: 6,
      bestSeller: false,
      name: "REALME",
      description: "Realme techlife T300",
      image: require('../../assets/Realme.png'), // Replace with actual image URL
      price: "$120",
      actualPrice: "$140",
      rating: "4.5",
      colors: ["#C6C7C6", "#9FBF9F", "#BCEFEF"]
    },
    {
      id: 7,
      bestSeller: false,
      name: "BOAT",
      description: " Boat smart watch",
      image: require('../../assets/boat.png'), // Replace with actual image URL
      price: "$120",
      actualPrice: "$140",
      rating: "4.5",
      colors: ["#BD9590", "#333134", "#EDC285"]
    },
    {
      id: 8,
      bestSeller: false,
      name: "LG",
      description: "655L Side-by-Side Refrigerator with Smart...",
      image: require('../../assets/LG.png'), // Replace with actual image URL
      price: "$120",
      actualPrice: "$140",
      rating: "4.5",
      colors: ["#18181A", "#C5C3C3"]
    }
  ];

  return (
    <>

      {/* header */}
      <Header />

      {/* sldier */}
      <ElectronicSlider />

      {/* product best deal */}
      <Threeview />

      {/* Electronics collection */}
      <Elecroniccollection />


      {/* grid view */}
      <Gridcomponent />

      {/* new sletter */}
      <Subscribe />

      {/* process */}
      <Process />

      {/* footer */}
      <Footer />


      {/* <section className='V_gradient text-white w-100 V_lion_padding'>
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
                Display the dynamically updated main image
                <img src={mainImage} alt="Main laptop skin" className='w-100' />
              </div>
              <div className='d-flex flex-wrap justify-content-between pt-5 mt-lg-5'>
                Thumbnails that update the main image on click
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



      {/* sldier */}
      {/* <ElectronicSlider /> */}






      {/* <section className='text-white'>
        <div className=''>
          <Row className='py-5 px-3 p-lg-5 m-0'>
            <Col sm={6} lg={4} className='mt-lg-3 pt-3'>
              <div className='text-white V_best_img V_best_img_1'>
                <div className='V_laptop pt-lg-3'>
                  <h3 className='v_mega pt-5 '>
                    Best Deal On Laptops
                  </h3>
                </div>
              </div>
            </Col>

            <Col sm={6} lg={4} className='mt-lg-3 pb-0'>
              <div className='text-white V_best_img V_best_img_2 pb-3'>
                <div className='V_laptop pt-lg-3'>
                  <h3 className='v_mega pt-5'>
                    MEGA SALE
                  </h3>
                  <p className='V_on'>On Home Appliances</p>
                </div>
              </div>
            </Col>

            <Col sm={6} lg={4} className='mt-lg-3 pt-3'>
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
      </section> */}





      {/* <section className='pt-lg-5 pb-3'>
        <div className='d_container pt-lg-5'>
          <Row className='pt-5 m-0'>
            <Col className='p-0'>
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
      </section> */}

      {/* <section className='pb-5'>
        <div className='d_container justify-content-between'>
          <Row className='m-0'>
            {products.map(product => (
              <Col sm={6} md={6} lg={4} xl={4} xxl={3} className="gap-3 pb-5 d-flex justify-content-center" key={product.id}>
                <Card className="V_card align-content-center">
                  {product.bestSeller && (
                    <Badge className="V_best_seller_tag py-3 px-5" bg="dark">
                      Best Seller
                    </Badge>
                  )}
                  <Card.Img
                    variant="top"
                    src={product.image} // Dynamically setting image URL
                    className="V_product_image pt-5"
                    alt={product.name}
                  />
                  <Card.Body className="px-0">
                    <Card.Title>
                      <div className="d-flex justify-content-between  align-self-center px-3">
                        <h1 className="V_brand">{product.name}</h1>
                        <div className="V_rating">
                          <span className="V_star align-self-center">⭐</span>
                          <span className="V_rating_value ">{product.rating}</span>
                        </div>
                      </div>
                    </Card.Title>
                    <Card.Text className="V_description px-3">
                      {product.description}
                    </Card.Text>
                    <Row>
                      <Col className="text-end">
                        <div className="V_price d-flex justify-content-between px-3">
                          Mapping through colors
                          <div className="d-flex">
                            {product.colors.map((color, index) => (
                              <div
                                key={index}
                                className=" align-self-center me-2"
                                style={{ backgroundColor: color, width: '20px', height: '20px', borderRadius: '50%' }}
                              ></div>
                            ))}
                          </div>
                          <div className="V_price_container">
                            <span className="V_discounted_price">{product.price}</span>
                            <span><strike className="original-price">{product.actualPrice}</strike></span>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </section > */}






      {/* <section className='pb-5'>
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
      </section> */}


      {/* 
      <section className='pb-5'>
        <div className='d_container'>
          <Row className='m-0'>
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
      </section> */}




      {/* <section className=' pb-3'>
        <div className='d_container'>
          <Row className='pt-5 m-0'>
            <Col className=''>
              <div className=''>
                <h1 className='V_new'>
                  EXPLORE POPULAR BRANDS
                </h1>
              </div>
            </Col>
          </Row>
        </div>
      </section> */}


      {/* <section className=''>
        <div className="d_container">
          <Row className='m-0'>
            <div className="V_grid_container ">
              <div className="V_eat">
                <img src={require('../../assets/eat_sleep.png')} alt="Eat Sleep Game Repeat" className='' />
                <h3>Eat Sleep Game Repeat</h3>
              </div>
              <div className="V_unleshing">
                <img src={require('../../assets/unlashing.png')} alt="Unleashing Creativity" className='' />
                <h3>Unleashing Creativity, one keystroke at a time</h3>
              </div>
              <div className="V_build">
                <img src={require('../../assets/build for.png')} alt="Build for Intelligence" className='' />
                <h3>Build for Intelligence</h3>
              </div>
              <div className="V_watch">
                <img src={require('../../assets/dont watch.png')} alt="Don't watch the clock" className='' />
                <h3>Don't watch the clock, do what it does: keep going</h3>
              </div>
              <div className="V_same">
                <img src={require('../../assets/dont be the same.png')} alt="Don't be the same, be better" className='' />
                <h3>Don't be the same, be better</h3>
              </div>
              <div className="V_plugin">
                <img src={require('../../assets/plug in.png')} alt="Plug in, tune out, and enjoy the beats" className='' />
                <h3>Plug in, tune out, and enjoy the beats</h3>
              </div>
              <div className="V_lost">
                <img src={require('../../assets/lost in the rythem.png')} alt="Lost in the rhythm" className='' />
                <h3>Lost in the rhythm of my favorite tunes</h3>
              </div>
            </div>
          </Row>
        </div>
      </section> */}

    </>
  )
}

export default Electronics
