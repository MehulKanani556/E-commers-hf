import React, { useEffect, useState } from 'react';
import '../../../darshan/css/minisider.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

const CommSlider = () => {

    const { id } = useParams();
    // console.log("id", id);

    const BaseUrl = process.env.REACT_APP_BASEURL;
    const [category, setCategory] = useState([]);

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

    const fetchMinisilder = async () => {
        // if (id) {
            try {
                setIsLoading(true);
                const response = await axios.get(`${BaseUrl}/api/allCategory`);
                // console.log("response", response.data);
                setCategory(response.data.category);
            } catch (error) {
                console.error('Data fetching Error:', error);
            }
            finally {
                setIsLoading(false);
            }
        // }
    }
    useEffect(() => {
        fetchMinisilder();
    }, []);

    if (isLoading) return <div>Loading...</div>;

    return (
        <section className='d_p-80 d_minisider'>
            <div className="d_container">
                <div className="row justify-content-center">
                    <div className="col-10">
                        <OwlCarousel className='owl-theme d_minisider' {...settings}>
                            {category.map((item, index) => (
                                <div key={index} className="d-flex justify-content-center">
                                    <div className="d_mini">
                                        <div className="d_bgimg">
                                            <Link to={`/product/${item._id}`} state={{mainCategoryId: item.mainCategoryId}}>
                                                <div className="d_img">
                                                    {item.categoryImage && (
                                                        <img
                                                            src={`${BaseUrl}/${item.categoryImage}`}
                                                            alt={item.categoryName}
                                                        />
                                                    )}
                                                </div>
                                            </Link>
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
    );
}

export default CommSlider;