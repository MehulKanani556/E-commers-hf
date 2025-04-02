import React, { useEffect, useState } from 'react'
import './home.css'
import { Col, Row } from 'react-bootstrap'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Collection = () => {

    const BaseUrl = process.env.REACT_APP_BASEURL;
    const [popularbarnd, setFilteredData] = useState([]);

    useEffect(() => {
        const fetchBrandData = async () => {
            try {
                const response = await axios.get(`${BaseUrl}/api/getAllOffers`)
                //   console.log("data" , response?.data);
                setFilteredData(response?.data?.offers)
            } catch (error) {

            }
        }

        fetchBrandData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            <section className=''>
                <div className='d_container p-0 inter'>
                    <Row className='m-0'>
                        {popularbarnd.map((item) => (
                            <Col lg={6} className='my-2'>
                                <div className='VK_watch_cont VK_first_cont'>
                                    <div className='h-100'>
                                        <img src={`${BaseUrl}/${item?.offerImage}`} className='w-100 h-100 object_cover' alt="" />
                                        <div className='VK_watch_abs text-white'>
                                            <h5 className='VK_watch_h5'>
                                                {item.offerType}
                                            </h5>
                                            <h3 className='VK_watch_h3 text-uppercase'>
                                                {item.offerName}
                                            </h3>
                                            <div>
                                               <Link to={`/product/${item.categoryId}` } state={{mainCategoryId:item.mainCategoryId}}>
                                               <button className='VK_white_btn'>
                                                    {item.buttonText}
                                                </button>
                                               </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        ))}
                        {/* <Col lg={6} className='my-2'>
                            <div className='VK_watch_cont VK_second_cont'>
                                <div className='h-100'>
                                    <img src={require('../../assets/mobile.png')} className='w-100 h-100 object_cover object_bottom' alt="" />
                                    <div className='VK_watch_abs text-white'>
                                        <h5 className='VK_watch_h5'>
                                            Special Offers
                                        </h5>
                                        <h3 className='VK_watch_h3 text-uppercase'>
                                            On Mobile Phones
                                        </h3>
                                        <div>
                                            <button className='VK_white_btn'>
                                                Shop now
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col> */}
                    </Row>
                </div>
            </section>
        </>
    )
}

export default Collection
