import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import axios from 'axios';
import { Link } from 'react-router-dom'

const Toptoys = () => {
    const BaseUrl = process.env.REACT_APP_BASEURL;
    const token = localStorage.getItem('token');

    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${BaseUrl}/api/allProductOffer`, {
                    headers: { Authorization: `Bearer ${token}` }
                });
                
                // Shuffle the array randomly
                const shuffledProducts = response.data.productOffer
                    .sort(() => 0.5 - Math.random())
                    .slice(0, 6);
                
                setFilteredData(shuffledProducts || []);
            } catch (error) {
                console.error('Data Fetching Error:', error);
                setFilteredData([]);
            }
        }
        fetchData();
    }, []); // Remove BaseUrl from dependency array to ensure random selection on each refresh

    return (
        <React.Fragment>
            <section className='py-5'>
                <div className='d_container inter p-0'>
                    <Row className='m-0 mb-4'>
                        <Col className='d-flex justify-content-between align-items-center'>
                            <h2 className='section_title m-0'>
                                Offer
                            </h2>
                        </Col>
                    </Row>
                    <Row className='m-0'>
                        {filteredData.length > 0 ? (
                            filteredData.map((item, index) => (
                                <div 
                                    key={item.id || index} 
                                    className="col-xxl-2 col-lg-3 col-md-4 col-sm-6"
                                >
                                    <div className="product-item">
                                        <Link to={`/womendetails/${item.productId}`} >
                                            <div className='electronc_img'>
                                                <img
                                                    src={`${BaseUrl}/${item?.offerImage}`}
                                                    alt={item.productData[0]?.productName}
                                                    className='w-100 h-100 object_cover'
                                                />
                                            </div>
                                        </Link>
                                        <div className='Ele_description mt-2'>
                                            <h4 className='font_16 mb-0'>{item.productData[0]?.productName}</h4>
                                            <p className='fw-bold'>Up to {item.discountPrice}% off</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div>No product offers available</div>
                        )}
                    </Row>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Toptoys