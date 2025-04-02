import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import axios from 'axios';
import { Link } from 'react-router-dom'

const Toptoys = () => {
    const BaseUrl = process.env.REACT_APP_BASEURL;
    const token = localStorage.getItem('token');

    const [filteredData, setFilteredData] = useState([]);
    const [showAllProducts, setShowAllProducts] = useState(false);
    const [allProducts, setAllProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${BaseUrl}/api/allProductOffer`, {
                    headers: { Authorization: `Bearer ${token}` }
                });
                
                // Store all products
                const allProductOffers = response.data.productOffer || [];
                setAllProducts(allProductOffers);

                // Initially show first 6 products
                const initialProducts = allProductOffers.slice(0, 6);
                setFilteredData(initialProducts);
            } catch (error) {
                console.error('Data Fetching Error:', error);
                setFilteredData([]);
                setAllProducts([]);
            }
        }
        fetchData();
    }, []); 

    // Toggle between showing 6 products and all products
    const handleViewAll = () => {
        setShowAllProducts(!showAllProducts);
        
        // If switching to view all, show all products
        // If switching back, show first 6 products
        if (!showAllProducts) {
            setFilteredData(allProducts);
        } else {
            setFilteredData(allProducts.slice(0, 6));
        }
    };

    return (
        <React.Fragment>
            <section className='py-5 pt-0'>
                <div className='d_container inter p-0'>
                    <Row className='m-0 mb-4'>
                        <Col className='d-flex justify-content-between align-items-center'>
                            <h2 className='section_title m-0'>
                                Product Offer
                            </h2>
                            {allProducts.length > 6 && (
                                <p 
                                    onClick={handleViewAll} 
                                    className='m-0 font_14 primary_color fw-500 inter'
                                    style={{ cursor: 'pointer' }}
                                >
                                    {showAllProducts ? 'SHOW LESS' : 'VIEW ALL'}
                                </p>
                            )}
                        </Col>
                    </Row>
                    <Row className='m-0'>
                        {filteredData.length > 0 ? (
                            filteredData.map((item, index) => (
                                <div 
                                    key={item.id || index} 
                                    className="col-xxl-2 col-lg-3 col-md-4 col-sm-6 my-3"
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
                                            <p className='fw-bold font_18 mb-0'>Up to {item.discountPrice}% off</p>
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