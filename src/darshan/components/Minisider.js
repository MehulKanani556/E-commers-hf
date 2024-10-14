import React from 'react'
import './../css/minisider.css'
import OwlCarousel from 'react-owl-carousel';
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";


const Minisider = () => {

    const settings = {
        loop: true,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1200:{
                items:5
            },
            1500: {
                items: 6
            }
        },
        navText: [
            `<span class='nav-btn prev-slide'><MdOutlineKeyboardArrowLeft /></span>`,
            `<span class='nav-btn next-slide'><MdKeyboardArrowRight /></span>`
        ],
    };

    const images = [
        { bg: require('./../d_img/minisilderbg.png'), main: require('./../d_img/minisiderimg1.png'), category: "Western Wear" },
        { bg: require('./../d_img/minisilderbg.png'), main: require('./../d_img/minisiderimg2.png'), category: "Western Wear" },
        { bg: require('./../d_img/minisilderbg.png'), main: require('./../d_img/minisiderimg3.png'), category: "Western Wear" },
        { bg: require('./../d_img/minisilderbg.png'), main: require('./../d_img/minisiderimg4.png'), category: "Western Wear" },
        { bg: require('./../d_img/minisilderbg.png'), main: require('./../d_img/minisiderimg5.png'), category: "Western Wear" },
        { bg: require('./../d_img/minisilderbg.png'), main: require('./../d_img/minisiderimg6.png'), category: "Western Wear" },
    ];

    return (
        <>

            <section className='d_p-80 d_secsection'>
                <div className="d_container">
                    <OwlCarousel className='owl-theme' {...settings}>
                        {images.map((image, index) => (
                            <div key={index} className="d_minisilder">
                                <div className="d_bgimg">
                                    <img src={image.bg} alt={`Background ${index + 1}`} className="background-image" />
                                    <div className="d_img">
                                        <img src={image.main} alt={`Main ${index + 1}`} className="main-image" />
                                    </div>
                                </div>
                                <p className='d_category-label mb-0'>{image.category}</p>
                            </div>
                        ))}
                    </OwlCarousel>
                </div>
            </section>

        </>
    )
}

export default Minisider
