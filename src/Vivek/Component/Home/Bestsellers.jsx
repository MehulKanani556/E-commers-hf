import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Bestsellers = () => {
    const BaseUrl = process.env.REACT_APP_BASEURL;
    const token = localStorage.getItem('token');

    const [topProduct, setTopProduct] = useState([]);
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        const fetchTopProduct = async () => {
            try {
                const response = await axios.get(`${BaseUrl}/api/topProducts`);
                setTopProduct(response.data.data);
            } catch (error) {
                console.error('Top Products Fetching Error:', error);
            }
        }
        fetchTopProduct()
    }, [])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${BaseUrl}/api/allProductOffer`, {
                    headers: { Authorization: `Bearer ${token}` }
                });
                setFilteredData(response.data.productOffer);
            } catch (error) {
                console.error('Product Offer Fetching Error:', error);
            }
        }
        fetchData()
    }, [])

    // Function to find full product details by matching product ID
    const findProductDetails = (topProductId) => {
        return filteredData?.find(product => product.productId === topProductId);
    }

    return (
        <React.Fragment>
            <div className='py-5'>
                <div className='d_container inter'>
                    <Row className='m-0 mb-4'>
                        <Col className='d-flex justify-content-between align-items-center'>
                            <h2 className='section_title m-0'>
                                BEST SELLERS
                            </h2>
                        </Col>
                    </Row>
                    <Row className='m-0'>
                        {topProduct.map((item) => {
                            // Find the full product details for this top product
                            const fullProductDetails = findProductDetails(item.productId);
                            
                            return (
                                <div 
                                    className="col-xxl-3 col-lg-4 col-sm-6 my-3 px-0 px-sm-2" 
                                    key={item.productId}
                                >
                                    <div className="product-item">
                                        <Link to={`/womendetails/${item.productId}`} >
                                            <div className='best_seller_img'>
                                                <img
                                                    src={`${BaseUrl}/${item.images[0]}`}
                                                    className='w-100 h-100 object_cover'
                                                    alt={item.productName}
                                                />
                                            </div>
                                        </Link>
                                        <div className='Ele_description mt-2'>
                                            <h4 className='font_16 pt-1 mb-1'>{item.productName}</h4>
                                            {/* Display discount price from allProductOffer */}
                                            <p className='fw-bold font_18 mb-0'>
                                                Up to {fullProductDetails?.discountPrice}% off
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </Row>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Bestsellers