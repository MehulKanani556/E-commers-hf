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
        margin:30,
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
        {  main: "minisiderimg1.png", category: "Western Wear" },
        {  main: "minisiderimg2.png", category: "Indian Wear" },
        {  main: "minisiderimg3.png", category: "Sports Wear" },
        {  main: "minisiderimg4.png", category: "Footwear" },
        {  main: "minisiderimg5.png", category: "Jewellery" },
        {  main: "minisiderimg6.png", category: "Handbags & Wallet" },
    ];

    return (
        <>

            <section className='d_p-80 d_minisider'>
                <div className="d_container">
                    <div className="row justify-content-center">
                        <div className="col-10">
                        <OwlCarousel className='owl-theme d_minisider' items={6} {...settings}>
                        {images.map((image, index) => (
                            <div key={index} className="d-flex justify-content-center">
                                <div className="d_mini">
                                    <div className="d_bgimg">
                                        <div className="d_img">
                                            <img src={require(`./../d_img/${image.main}`)} alt="" />
                                        </div>
                                    </div>
                                    <p className='mb-0 d_category-label'>{image.category}</p>
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

export default Minisider
