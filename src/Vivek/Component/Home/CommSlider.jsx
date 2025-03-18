import React, { useEffect, useState } from 'react'
import OwlCarousel from 'react-owl-carousel';
import '../../../darshan/css/minisider.css';
import axios from 'axios';

const CommSlider = () => {

    const BaseUrl = process.env.REACT_APP_BASEURL;
    const token = localStorage.getItem('token');

    const [category,setCategory] = useState([]);

    const settings = {
        loop: true,
        nav: true,
        dots: false,
        margin: 30,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1200: {
                items: 5
            },
            1500: {
                items: 6
            }
        },
    };


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${BaseUrl}/api/allCategory`, {
                    headers : { Authorization : `Bearer ${token}`}
                });
                // console.log("resposnse",response.data.category);
                setCategory(response.data.category);
                
            } catch (error) {
                console.error('Data Fetching Error:', error);
            }
        }
        fetchData();
    },[BaseUrl, token]);
    return (
        <>
            <section className='d_p-80 d_minisider'>
                <div className="d_container p-0">
                    <div className="row m-0 justify-content-center">
                        <div className="col-10 p-0">
                            <OwlCarousel className='owl-theme d_minisider' items={6} {...settings}>
                                {category.map((item) => (
                                    <div key={item._id} className="d-flex justify-content-center">
                                        <div className="d_mini">
                                            <div className="d_bgimg">
                                                <div className="d_img">
                                                    <img src={`${BaseUrl}/${item.categoryImage}`} className='' alt={item.categoryName} />
                                                </div>
                                            </div>
                                            <p className='mb-0 d_category-label'>{item.categoryName}</p>
                                        </div>
                                    </div>
                                ))}
                            </OwlCarousel>
                        </div>
                    </div>

                </div>
            </section>

        </>
    )
}

export default CommSlider
