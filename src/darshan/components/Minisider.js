import React, { useEffect, useState } from 'react';
import './../css/minisider.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Minisider = () => {

    const { id } = useParams();
    // console.log("id", id);

    const BaseUrl = process.env.REACT_APP_BASEURL;
    const [category, setCategory] = useState([]);
    const [loading, setLoading] = useState(true);

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
        setLoading(true);
        if (id) {
            try {
                const response = await axios.get(`${BaseUrl}/api/getMainCategoryAndCategory/${id}`);
                // console.log("response", response.data.category);
                setCategory(response.data.category);
            } catch (error) {
                console.error('Data fetching Error:', error);
            } finally {
                setLoading(false);
            }
        // try {
        //     const response = await axios.get(`${BaseUrl}/api/allCategory`);
        //     // console.log("response", response.data.category);
        //     setCategory(response.data.category);
        // } catch (error) {
        //     console.error('Data fetching Error:', error);
        // } finally {
        //     setLoading(false);
        // }
        }
    }

    useEffect(() => {
        fetchMinisilder();
    }, [id]);

    // Show loading state when data is being fetched
    if (loading) {
        return (
            <section className='d_p-80 d_minisider'>
                <div className="d_container">
                    <div className="row justify-content-center">
                        <div className="col-10">
                            <div className="text-center">Loading categories...</div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    // Return null if no data is available
    if (category.length === 0) {
        return (
            <section className='d_p-80 d_minisider'>
                <div className="d_container">
                    <div className="row justify-content-center">
                        <div className="col-10">
                            <div className="text-center">No categories available</div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

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
                                            <div className="d_img">
                                                {item.categoryImage && (
                                                    <img
                                                        src={`${BaseUrl}/${item.categoryImage}`}
                                                        alt={item.categoryName}
                                                    />
                                                )}
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
    );
}

export default Minisider;