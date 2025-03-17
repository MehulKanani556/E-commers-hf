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

    const images = [
        {
            image:"slid1.png",
            name:"Men Store"
        },
        {
            image:"slid2.png",
            name:"Women Store"
        },
        {
            image:"slid3.png",
            name:"Children Wear"
        },
        {
            image:"slid4.png",
            name:"Skin care"
        },
        {
            image:"slid5.png",
            name:"Footwear"
        },
        {
            image:"slid6.png",
            name:"Home & Kitchen"
        },
    ];

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
    },[]);
    return (
        <>
            <section className='d_p-80 d_minisider'>
                <div className="d_container p-0">
                    <div className="row m-0 justify-content-center">
                        <div className="col-10 p-0">
                            <OwlCarousel className='owl-theme d_minisider' items={6} {...settings}>
                                {images.map((image, index) => (
                                    <div key={index} className="d-flex justify-content-center">
                                        <div className="d_mini">
                                            <div className="d_bgimg">
                                                <div className="d_img">
                                                    <img src={require(`../../assets/${image.image}`)} className='' alt="" />
                                                </div>
                                            </div>
                                            <p className='mb-0 d_category-label'>{image.name}</p>
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
