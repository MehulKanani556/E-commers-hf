import React, { useRef, useState } from 'react'
import './../css/animation.css'
// import { Animated } from "react-animated-css";

const Animation = () => {

    const [currentSection, setCurrentSection] = useState('intro');

    const handleLetSeeClick = () => {
        setCurrentSection(1);
    };

    const handleNextSection = () => {
        setCurrentSection((prev) => prev + 1);
    };

    return (
        <>

            <div>
                {/* Initial Section */}
                {currentSection === 'intro' && (
                    <div className="d_animationbg">
                        <div className="d_overlayimg d_animationsubimg1">
                            <img src={require('../d_img/animationimg1.png')} alt="" />
                        </div>
                        <div className="d_overlayimg d_animationsubimg2">
                            <img src={require('../d_img/animationimg2.png')} alt="" />
                        </div>
                        <div className="d_overlayimg d_animationsubimg3">
                            <img src={require('../d_img/animationimg3.png')} alt="" />
                        </div>
                        <div className="d_animationbghead">
                            <h2 className='mb-0'>Get the Trend</h2>
                        </div>
                        <div className="d_cta">
                            <a onClick={handleLetSeeClick} className='text-decoration-none'>Let’s See</a>
                        </div>
                    </div>
                )}

                {/* Animation Sections */}
                {currentSection === 1 && (
                    // eslint-disable-next-line react/jsx-no-undef
                    <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true} animationInDuration={3000}>
                        <div className="d_animation fade-in " onClick={handleNextSection}>
                            <div className="d_img1">
                                <img src={require('../d_img/animationimg1.png')} alt="" />
                            </div>
                            <div className="d_img2">
                                <img src={require('./../d_img/animationimg2.png')} alt="" />
                            </div>
                            <div className="d_img3">
                                <img src={require('./../d_img/animationimg3.png')} alt="" />
                            </div>
                            <div className="d_animationhead">
                                <h2 className='mb-0'>Get the Trend</h2>
                            </div>
                        </div>
                    </Animated>


                )}

                {currentSection === 2 && (
                    // eslint-disable-next-line react/jsx-no-undef
                    <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true} animationInDuration={3000}>
                        <div className="d_animation d_animation2 overflow-hidden fade-in" onClick={handleNextSection}>
                            <div className="d_img4">
                                <img src={require('./../d_img/animationimg8.png')} alt="" />
                            </div>
                            <div className="d_img5">
                                <img src={require('./../d_img/animationimg7.png')} alt="" />
                            </div>
                            <div className="d_img6">
                                <img src={require('./../d_img/animationimg2.png')} alt="" />
                            </div>
                            <div className="d_animationhead">
                                <h2 className='mb-0'>Classic Trend</h2>
                            </div>
                        </div>
                    </Animated>
                )}

                {currentSection === 3 && (
                    // eslint-disable-next-line react/jsx-no-undef
                    <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true} animationInDuration={3000}>
                        <div className="d_animation d_animation3 fade-in" onClick={handleNextSection}>
                            <div className="d_img1">
                                <img src={require('./../d_img/animationimg9.png')} alt="" />
                            </div>
                            <div className="d_img2">
                                <img src={require('./../d_img/animationimg3.png')} alt="" />
                            </div>
                            <div className="d_img3">
                                <img src={require('./../d_img/animationimg10.png')} alt="" />
                            </div>
                            <div className="d_animationhead">
                                <h2 className='mb-0'>Get Cozy Here</h2>
                            </div>
                        </div>
                    </Animated>
                )}

                {currentSection === 4 && (
                    // eslint-disable-next-line react/jsx-no-undef
                    <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true} animationInDuration={3000}>
                        <div className="d_animation d_animation4 overflow-hidden fade-in" onClick={handleNextSection}>
                            <div className="d_img4">
                                <img src={require('./../d_img/animationimg2.png')} alt="" />
                            </div>
                            <div className="d_img5">
                                <img src={require('./../d_img/animationimg8.png')} alt="" />
                            </div>
                            <div className="d_img6">
                                <img src={require('./../d_img/animationimg1.png')} alt="" />
                            </div>
                            <div className="d_animationhead">
                                <h2 className='mb-0'>Need A Trip?</h2>
                            </div>
                        </div>
                    </Animated>
                )}

                {currentSection === 5 && (
                    // eslint-disable-next-line react/jsx-no-undef
                    <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true} animationInDuration={3000}>
                        <div className="d_animation d_animation5 fade-in" >
                            <div className="d_img1">
                                <img src={require('./../d_img/animationimg7.png')} alt="" />
                            </div>
                            <div className="d_img2">
                                <img src={require('./../d_img/animationimg10.png')} alt="" />
                            </div>
                            <div className="d_img3">
                                <img src={require('./../d_img/animationimg8.png')} alt="" />
                            </div>
                            <div className="d_animationhead">
                                <h2 className='mb-0'>Walk Around </h2>
                            </div>
                        </div>
                    </Animated>

                )}
            </div>

            {/* <div className="d_animationbg">
                <div className="d_overlayimg d_animationsubimg1">
                    <img src={require('./../d_img/animationimg1.png')} alt="" />
                </div>
                <div className="d_overlayimg d_animationsubimg2">
                    <img src={require('./../d_img/animationimg2.png')} alt="" />
                </div>
                <div className="d_overlayimg d_animationsubimg3">
                    <img src={require('./../d_img/animationimg3.png')} alt="" />
                </div>
                <div className="d_animationbghead">
                    <h2 className='mb-0'>Get the Trend</h2>
                </div>
                <div className="d_cta">
                    <a href="" className='text-decoration-none'>Let,s See</a>
                </div>
            </div>

            <div className="d_animation">
                <div className="d_img1">
                    <img src={require('./../d_img/animationimg1.png')} alt="" />
                </div>
                <div className="d_img2">
                    <img src={require('./../d_img/animationimg2.png')} alt="" />
                </div>
                <div className="d_img3">
                    <img src={require('./../d_img/animationimg3.png')} alt="" />
                </div>
                <div className="d_animationhead">
                    <h2 className='mb-0'>Get the Trend</h2>
                </div>
            </div>

            <div className="d_animation d_animation2 overflow-hidden">
                <div className="d_img4">
                    <img src={require('./../d_img/animationimg8.png')} alt="" />
                </div>
                <div className="d_img5">
                    <img src={require('./../d_img/animationimg7.png')} alt="" />
                </div>
                <div className="d_img6">
                    <img src={require('./../d_img/animationimg2.png')} alt="" />
                </div>
                <div className="d_animationhead">
                    <h2 className='mb-0'>Classic Trend</h2>
                </div>
            </div>


            <div className="d_animation d_animation3">
                <div className="d_img1">
                    <img src={require('./../d_img/animationimg9.png')} alt="" />
                </div>
                <div className="d_img2">
                    <img src={require('./../d_img/animationimg3.png')} alt="" />
                </div>
                <div className="d_img3">
                    <img src={require('./../d_img/animationimg10.png')} alt="" />
                </div>
                <div className="d_animationhead">
                    <h2 className='mb-0'>Get Cozy Here</h2>
                </div>
            </div>

            <div className="d_animation d_animation4 overflow-hidden">
                <div className="d_img4">
                    <img src={require('./../d_img/animationimg2.png')} alt="" />
                </div>
                <div className="d_img5">
                    <img src={require('./../d_img/animationimg8.png')} alt="" />
                </div>
                <div className="d_img6">
                    <img src={require('./../d_img/animationimg1.png')} alt="" />
                </div>
                <div className="d_animationhead">
                    <h2 className='mb-0'>Need A Trip?</h2>
                </div>
            </div>

            <div className="d_animation d_animation5">
                <div className="d_img1">
                    <img src={require('./../d_img/animationimg7.png')} alt="" />
                </div>
                <div className="d_img2">
                    <img src={require('./../d_img/animationimg10.png')} alt="" />
                </div>
                <div className="d_img3">
                    <img src={require('./../d_img/animationimg8.png')} alt="" />
                </div>
                <div className="d_animationhead">
                    <h2 className='mb-0'>Walk Around </h2>
                </div>
            </div> */}





        </>
    )
}

export default Animation
