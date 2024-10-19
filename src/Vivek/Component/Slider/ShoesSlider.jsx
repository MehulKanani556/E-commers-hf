import React, { useRef, useState } from 'react'
import './shoesslider.css'

const ShoesSlider = () => {

    const mini1 = useRef(null);
    const mini2 = useRef(null);
    const mini3 = useRef(null);
    const big_img = useRef(null);

    const maxSlides = 5;
    const [currentSlide, setCurrentSlide] = useState(0);

    const scrollAmount = mini1.current?.firstChild?.offsetHeight + 10 || 110;
    const bit_scroolamt = big_img?.firstChild?.offsetHeight + 10 || 800;

    const handleNextClick = () => {
        if (currentSlide < maxSlides - 1) {
            mini1.current.scrollBy({ top: scrollAmount, behavior: 'smooth' });
            mini2.current.scrollBy({ top: scrollAmount, behavior: 'smooth' });
            mini3.current.scrollBy({ top: scrollAmount, behavior: 'smooth' });
            big_img.current.scrollBy({ top: bit_scroolamt, behavior: 'smooth' });

            setCurrentSlide(currentSlide + 1); 
        } else {
            
            mini1.current.scrollTo({ top: 0, behavior: 'smooth' });
            mini2.current.scrollTo({ top: 0, behavior: 'smooth' });
            mini3.current.scrollTo({ top: 0, behavior: 'smooth' });
            big_img.current.scrollTo({ top: 0, behavior: 'smooth' });

            setCurrentSlide(0); 
        }
    };



    return (
        <React.Fragment>
            <section className='VK_slider_parent inter'>
                <button onClick={() => { handleNextClick() }}>
                    scroll
                </button>

                {/* nike text */}
                <div className="VK_slider_back_txt inter">
                    <h1>
                        NIKE
                    </h1>
                </div>

                {/* nike logo */}
                <div className='VK_slider_nike_logo'>
                    <img src={require('../../assets/nike_logo.png')} className='w-100 h-100' alt="" />
                </div>

                {/* shoes description */}

                <div className='VK_slider_shoes_description ps-5'>
                    <div className='VK_shoes_color text-white mb-4'>
                        <p className='mb-2 font_18'>
                            Colors
                        </p>
                        <div className='d-flex gap-2'>
                            <span className='VK_clr_dots' style={{ backgroundColor: "#E6DBCE" }}></span>
                            <span className='VK_clr_dots' style={{ backgroundColor: "#FF2828" }}></span>
                            <span className='VK_clr_dots' style={{ backgroundColor: "#33FB01" }}></span>
                            <span className='VK_clr_dots' style={{ backgroundColor: "#000000" }}></span>
                        </div>
                    </div>
                    <div className='text-white mb-4'>
                        <p className='mb-2 font_18'>
                            Size
                        </p>
                        <div className='d-flex gap-2'>
                            <span className='VK_slider_size VK_slider_active_size'>
                                6
                            </span>
                            <span className='VK_slider_size'>
                                7
                            </span>
                            <span className='VK_slider_size'>
                                8
                            </span>
                            <span className='VK_slider_size'>
                                9
                            </span>
                        </div>
                    </div>
                    <div>
                        <button className='VK_slider_buy_btn'>
                            Buy Now
                        </button>
                    </div>
                </div>

                {/* shoes image display parent */}
                <div className='VK_shoes_img_par' ref={big_img}>
                    <div className='VK_shoes_img_box'>
                        <img src={require('../../assets/shoes1.png')} className='w-100' alt="" />
                    </div>
                    <div className='VK_shoes_img_box'>
                        <img src={require('../../assets/shoes2.png')} className='w-100' alt="" />
                    </div>
                    <div className='VK_shoes_img_box'>
                        <img src={require('../../assets/shoes3.png')} className='w-100' alt="" />
                    </div>
                    <div className='VK_shoes_img_box'>
                        <img src={require('../../assets/shoes4.png')} className='w-100' alt="" />
                    </div>
                    <div className='VK_shoes_img_box'>
                        <img src={require('../../assets/shoes5.png')} className='w-100' alt="" />
                    </div>
                </div>


                {/* shoes mini side display */}
                <div className='VK_mini_preview'>
                    <div className='VK_mini_grid'>
                        <div className='VK_mimi_prv_div VK_preview_1'>
                            <div className='w-100 h-100 VK_mini_img_box'>
                                <img src={require('../../assets/Rectangle 2.png')} className='h-100' alt="" />
                                <div className='VK_mini_img_cont' ref={mini1}>
                                    <div className='w-100 h-100 d-flex justify-content-center align-items-center'>
                                        <img src={require('../../assets/shoes1.png')} className='w-100 h-100 object_contain' alt="" />
                                    </div>
                                    <div className='w-100 h-100 d-flex justify-content-center align-items-center'>
                                        <img src={require('../../assets/shoes2.png')} className='w-100 h-100 object_contain' alt="" />
                                    </div>
                                    <div className='w-100 h-100 d-flex justify-content-center align-items-center'>
                                        <img src={require('../../assets/shoes3.png')} className='w-100 h-100 object_contain' alt="" />
                                    </div>
                                    <div className='w-100 h-100 d-flex justify-content-center align-items-center'>
                                        <img src={require('../../assets/shoes4.png')} className='w-100 h-100 object_contain' alt="" />
                                    </div>
                                    <div className='w-100 h-100 d-flex justify-content-center align-items-center'>
                                        <img src={require('../../assets/shoes5.png')} className='w-100 h-100 object_contain' alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='VK_mimi_prv_div VK_preview_2'>
                            <div className='w-100 h-100 VK_mini_img_box'>
                                <img src={require('../../assets/Rectangle 3.png')} className='h-100' alt="" />
                                <div className='VK_mini_img_cont' ref={mini2}>
                                    <div className='w-100 h-100 d-flex justify-content-center align-items-center'>
                                        <img src={require('../../assets/pair1.png')} className='w-100 h-100 object_contain' alt="" />
                                    </div>
                                    <div className='w-100 h-100 d-flex justify-content-center align-items-center'>
                                        <img src={require('../../assets/pair2.png')} className='w-100 h-100 object_contain' alt="" />
                                    </div>
                                    <div className='w-100 h-100 d-flex justify-content-center align-items-center'>
                                        <img src={require('../../assets/pair3.png')} className='w-100 h-100 object_contain' alt="" />
                                    </div>
                                    <div className='w-100 h-100 d-flex justify-content-center align-items-center'>
                                        <img src={require('../../assets/pair4.png')} className='w-100 h-100 object_contain' alt="" />
                                    </div>
                                    <div className='w-100 h-100 d-flex justify-content-center align-items-center'>
                                        <img src={require('../../assets/pair5.png')} className='w-100 h-100 object_contain' alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='VK_mimi_prv_div VK_preview_3'>
                            <div className='w-100 h-100 VK_mini_img_box'>
                                <img src={require('../../assets/Rectangle 4.png')} className='h-100' alt="" />
                                <div className='VK_mini_img_cont VK_mini_img1' ref={mini3}>
                                    <div className='w-100 h-100 d-flex justify-content-center align-items-center'>
                                        <img src={require('../../assets/gd1.png')} className='w-100 h-100 object_contain' alt="" />
                                    </div>
                                    <div className='w-100 h-100 d-flex justify-content-center align-items-center'>
                                        <img src={require('../../assets/gd2.png')} className='w-100 h-100 object_contain' alt="" />
                                    </div>
                                    <div className='w-100 h-100 d-flex justify-content-center align-items-center'>
                                        <img src={require('../../assets/gd3.png')} className='w-100 h-100 object_contain' alt="" />
                                    </div>
                                    <div className='w-100 h-100 d-flex justify-content-center align-items-center'>
                                        <img src={require('../../assets/gd4.png')} className='w-100 h-100 object_contain' alt="" />
                                    </div>
                                    <div className='w-100 h-100 d-flex justify-content-center align-items-center'>
                                        <img src={require('../../assets/gd5.png')} className='w-100 h-100 object_contain' alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>



        </React.Fragment >
    )
}

export default ShoesSlider
