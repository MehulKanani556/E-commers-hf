import React from 'react';
import { Row, Col, Card, Badge } from 'react-bootstrap';
import './Beauty.css'
// import Minisider from '../../../darshan/components/Minisider';
import BeautySlider from './BeautySlider.jsx'
import BeautyPost from '../../Component/Beauty/BeautyPost.jsx'

function Beauty() {


    const products = [
        {
            id: 1,
            bestSeller: true,
            name: "RENEE",
            description: "Everyday Matte Lipstick ",
            image: require('../../assets/Renee.png'), // Replace with actual image URL
            price: "$120",
            actualPrice: "$140",
            rating: "4.5",
            colors: ["#F8EE72", "#000000"]
        },
        {
            id: 2,
            bestSeller: true,
            name: "SUGAR",
            description: "Ace Of Face Foundation Stick-07 Vanilla Latte",
            image: require('../../assets/Sugar.png'), // Replace with actual image URL
            price: "$120",
            actualPrice: "$140",
            rating: "4.5",
            colors: ["#000000", "#DFBCA3"]
        },
        {
            id: 3,
            bestSeller: true,
            name: "ICONIC",
            description: "Flawless Finish Duo Bundle",
            image: require('../../assets/iconic.png'), // Replace with actual image URL
            price: "$120",
            actualPrice: "$140",
            rating: "4.5",
            colors: ["#000000", "#DFBCA3"]
        },
        {
            id: 4,
            bestSeller: true,
            name: "MAC",
            description: "Connect In Colour Eye Shadow Palette: Rose",
            image: require('../../assets/Mac.png'), // Replace with actual image URL
            price: "$120",
            actualPrice: "$140",
            rating: "4.5",
            colors: ["#000000", "#ED9AD1"]
        },
        {
            id: 5,
            bestSeller: true,
            name: "FACESCANADA",
            description: "Perfect Blush",
            image: require('../../assets/Facescanada.png'), // Replace with actual image URL
            price: "$120",
            actualPrice: "$140",
            rating: "4.5",
            colors: ["#F59D96", "#F3C0F8"]
        },
        {
            id: 6,
            bestSeller: false,
            name: "COLORBAR",
            description: "Luxe Arteffects Nail Lacquer",
            image: require('../../assets/Colorbar.png'), // Replace with actual image URL
            price: "$120",
            actualPrice: "$140",
            rating: "4.5",
            colors: ["#C6C7C6", "#9FBF9F", "#BCEFEF"]
        },
        {
            id: 7,
            bestSeller: false,
            name: "RENEE",
            description: "Eau De Parfum Bloom ",
            image: require('../../assets/ReneePerfum.png'), // Replace with actual image URL
            price: "$120",
            actualPrice: "$140",
            rating: "4.5",
            colors: ["#410F29", "#4EBABA", "#EDC285"]
        },
        {
            id: 8,
            bestSeller: false,
            name: "MAC",
            description: "Locked Kiss 24hr Lipstick",
            image: require('../../assets/Maclipstick.png'), // Replace with actual image URL
            price: "$120",
            actualPrice: "$140",
            rating: "4.5",
            colors: ["#A5535D", "#DC3D3D", "#BB7423"]
        }
    ];



    return (
        <>
            <section className='V_fresh'>
                <div className='d_container h-100'>
                    <Row className='h-100'>
                        <Col lg={6} className='align-self-center'>
                            <div className='V_lipstic pe-xxl-5'>
                                <h1 className='V_try_fresh '>TRY FRESH PRODUCT
                                    FOR YOUR LIPS</h1>
                                <p className='V_try'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>

            <BeautySlider />

            <section className='text-white py-5'>
                <div className=''>
                    <Row className='p-md-5 m-0'>
                        <Col lg={4} className=' pt-3'>
                            <div className=' V_skin_care V_beauty_product_1'>
                                <div className=' pt-lg-3'>
                                    <h3 className='v_make text-dark '>
                                        Make your skin the best
                                    </h3>
                                </div>
                            </div>
                        </Col>

                        <Col lg={4} className=' pt-3'>
                            <div className=' V_skin_care V_beauty_product_2'>
                                <div className=' pt-lg-3'>
                                    <h3 className='v_Dry text-dark'>
                                        Dry skins lack mosturiser
                                    </h3>
                                </div>
                            </div>
                        </Col>

                        <Col lg={4} className=' pt-3'>
                            <div className=' V_skin_care V_beauty_product_3'>
                                <div className=' pt-lg-3'>
                                    <h3 className='v_Dry text-white'>
                                        Glowing skin always in
                                    </h3>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>




            <section className='pb-5'>
                <div className='d_container justify-content-between'>
                    <Row className=''>
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
                                        className="V_product_image"
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
                                                    {/* Mapping through colors */}
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
            </section >


            <section className='pb-5'>
                <div className='V_healty_skincare'>
                    <Row className=''>
                        <Col className=''>
                            <div className="V_overlay">
                                <p className="V_overlay_text">Healthy skin requires commitment, not a miracle.</p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>



            <BeautyPost />


        </>
    )
}

export default Beauty