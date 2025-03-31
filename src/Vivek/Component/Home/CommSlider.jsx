import React, { useEffect, useState } from 'react'
import OwlCarousel from 'react-owl-carousel';
import '../../../darshan/css/minisider.css';
import axios from 'axios';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const CommSlider = () => {

    const BaseUrl = process.env.REACT_APP_BASEURL;
    const token = localStorage.getItem('token');

    const [category,setCategory] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

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
                setIsLoading(true);
                const response = await axios.get(`${BaseUrl}/api/allMainCategory`, {
                    headers : { Authorization : `Bearer ${token}`}
                });
                // console.log("resposnse",response.data.users);
                setCategory(response.data.users);
                
            } catch (error) {
                console.error('Data Fetching Error:', error);
            }
            finally {
                setIsLoading(false);
            }
        }
        fetchData();
    },[BaseUrl, token]);

    if (isLoading) return <div>Loading...</div>;
    
    return (
        <>
            <section className='d_p-80 d_minisider'>
                <div className="d_container p-0">
                    <div className="row m-0 justify-content-center">
                        <div className="col-10 p-0">
                            <OwlCarousel className='owl-theme d_minisider' {...settings}>
                                {category.map((item) => (
                                    <div key={item._id} className="d-flex justify-content-center">
                                        <div className="d_mini">
                                            <div className="d_bgimg">
                                                <div className="d_img">
                                                    <img src={`${BaseUrl}/${item.mainCategoryImage}`} className='' alt={item.mainCategoryName} />
                                                </div>
                                            </div>
                                            <p className='mb-0 d_category-label'>{item.mainCategoryName}</p>
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
