/* eslint-disable no-unused-vars */
import React from 'react'
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
        {  main: require('../../assets/electronicmobilesliderimg1.png'), category: "Mobile" },
        {  main: require('../../assets/electronicsmarttvsliderimg2.png'), category: "Smart TV" },
        {  main: require('../../assets/electronicheadphonesliderimg3.png'), category: "Headphones" },
        {  main: require('../../assets/electronicairconditionersliderimg4.png'), category: "Air Conditioner" },
        {  main: require('../../assets/electronicwashingmachinesliderimg5.png'), category: "Washing Machine" },
        {  main: require('../../assets/electronicgaminglaptopsliderimg6.png'), category: "Gaming Laptops" },
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
                                            <img src={image.main} alt="" />
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
