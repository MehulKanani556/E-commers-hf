import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import '../../Parth/Component/Electronics/grid.css'
import Map from './../../Vivek/Component/Map'
import axios from 'axios'

const Popularbrands = () => {

    const BaseUrl = process.env.REACT_APP_BASEURL;
    const token = localStorage.getItem('token');

    const [popularbarnd, setPopularbrand] = useState([]);

    let cnt = 1

    const fetchPopularbrand = async () => {
        try {
            const response = await axios.get(`${BaseUrl}/api/getAllBrands`);
            setPopularbrand(response?.data?.popularBrand)
            console.log(response?.data?.popularBrand)
        } catch (error) {
            console.error("Error fetching brand data:", error);
        }
    }

    const fetchProductData = async () => {
        try {
            const response = await axios.get(`${BaseUrl}/api/allProduct`, {
                headers: {Authorization :` Berer ${token}`}
            });
            console.log("response",response.data.product);
            console.log("mainCategory",response.data.product[0].mainCategoryId);
            console.log("brand>>>>>>>",response.data.product[0].productVariantData[0].specifications);
            
        } catch (error) {
            console.error('Data Fetching Error:', error);
        }
    }
    useEffect(() => {
        // setgridview(data)
        fetchProductData();
        fetchPopularbrand();
    }, []);

    return (

        <React.Fragment>
            <section className='d_p-80'>
                <div className='d_container'>
                    <Row className='m-0 mb-4'>
                        <Col className='p-0'>
                            <h2 className='section_title text-uppercase m-0'>
                                Explore Popular Brands
                            </h2>
                        </Col>
                    </Row>
                    <Row className='m-0'>
                        <Col className='p-0'>
                            <div>
                                <div className="parent">
                                    {popularbarnd.map((item) => (
                                        <div className={`div${cnt++} VK_grid_parent`}>
                                            <img src={`${BaseUrl}/${item?.brandImage}`} className='w-100 h-100 object_center' alt="" />
                                            <div className='VK_grid_child'>
                                                <div className='h-100 d-flex flex-column'>
                                                    <div className='d-flex'>
                                                        <div className='VK_grid_logo text-center'>
                                                            <img src={`${BaseUrl}/${item?.brandLogo}`}className='mv_brand_logo_img' alt="" />
                                                            <p className='m-0 text-white font_12 mt-2'>
                                                                {item.offer}
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className='mt-auto'>
                                                        <h4 className='VK_pro_heading'>
                                                            {item.title}
                                                        </h4>
                                                        <div>
                                                            <button className='VK_pro_button'>
                                                                Go to Collection
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Popularbrands
