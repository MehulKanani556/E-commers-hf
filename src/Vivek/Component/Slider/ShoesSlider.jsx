import React from 'react'
import './shoesslider.css'

const ShoesSlider = () => {
    return (
        <React.Fragment>
            <section className='VK_slider_parent inter'>

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
                    <div className='VK_shoes_color text-white'>
                        <p className='m-0 font_18'>
                            Colors
                        </p>
                        <div className='d-flex'>
                            <span className='VK'></span>
                        </div>
                    </div>
                </div>

            </section>
        </React.Fragment>
    )
}

export default ShoesSlider
