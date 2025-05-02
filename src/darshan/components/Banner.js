import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import { GoArrowUpRight } from "react-icons/go";
import { FiPlus } from "react-icons/fi";
import '../css/style.css';
import Animation from './Animation';
import { Link } from 'react-router-dom';

const Banner = ({id}) => {
    return (
        <>

            <section className='d_firstbg'>

                {/* women slider */}
                <OwlCarousel className='owl-theme' loop={false} items={1}>
                    <div className='item owl_height'>
                        <div className=" d_womenbannerbg overflow-hidden">
                            <div className="d_container">
                                <div className="row align-items-center mx-0">
                                    <div className="col-12 col-sm-6">
                                        <div className="d_content">
                                            <p className='mb-0'>THE NEW STYLISH COLLECTION</p>
                                            <div className="d_head">
                                                <h2>NEW FALL SEASON 2024 </h2>
                                            </div>
                                            <div className="d_cta">
                                                <Link href="" className='text-decoration-none'>Shop now <GoArrowUpRight className='ms-1 d_arrowicon' /></Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6 px-0">
                                        <div className="d_img d_fall_img">
                                            <img src={require('./../d_img/womenbanner1.png')} className='w-100' alt="" />
                                            <div className='d_pls d_cur'>
                                                <div className='d_popup_par '>
                                                    <span className='d_plus d-flex align-items-center justify-content-center'>
                                                        <FiPlus className='d_plusicon' />
                                                    </span>
                                                    <div className='d_popup'>
                                                        <div className="d-flex  d_popbox me-4">
                                                            <div className="d_img">
                                                                <img src={require('./../d_img/subbannerimg1.png')} alt="" />
                                                            </div>
                                                            <div className="d_text d-flex flex-column">
                                                                <h6>White cotton blouse</h6>
                                                                <div className="d_price mt-auto">$38.50</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='d_pls2 d_cur'>
                                                <div className='d_popup_par'>
                                                    <span className='d_plus d-flex align-items-center justify-content-center'>
                                                        <FiPlus className='d_plusicon' />
                                                    </span>
                                                    <div className='d_popup'>
                                                        <div className="d-flex  d_popbox me-4">
                                                            <div className="d_img">
                                                                <img src={require('./../d_img/subbannerimg1.png')} alt="" />
                                                            </div>
                                                            <div className="d_text d-flex flex-column">
                                                                <h6>White cotton blouse</h6>
                                                                <div className="d_price mt-auto">$38.50</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='d_pls3 d_cur'>
                                                <div className='d_popup_par'>
                                                    <span className='d_plus d-flex align-items-center justify-content-center'>
                                                        <FiPlus className='d_plusicon' />
                                                    </span>
                                                    <div className='d_popup'>
                                                        <div className="d-flex  d_popbox me-4">
                                                            <div className="d_img">
                                                                <img src={require('./../d_img/subbannerimg1.png')} alt="" />
                                                            </div>
                                                            <div className="d_text d-flex flex-column">
                                                                <h6>White cotton blouse</h6>
                                                                <div className="d_price mt-auto">$38.50</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='item owl_height'>
                        <div className="d_bannersilder2 h-100 overflow-hidden">
                            <div className="d_container h-100">
                                <div className="row align-items-center h-100 flex-sm-row flex-column-reverse">
                                    <div className="col-12 col-sm-6 ">
                                        <div className="d_content">
                                            <h2>FASTRACK</h2>
                                            <h3>BLACK FABRIC STRAP</h3>
                                            <p>It’s Fastrack’s philosophy, its mantra, its battle cry. This simple phrase is the expression of the way the brand thinks, operates, communicates and works. It’s a blueprint for all that is Fastrack.</p>
                                            <div className="d_cta mt-5">
                                                <Link href="" className='text-decoration-none'>Buy Now</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6 d-flex justify-content-center">
                                        <div className="d_img">
                                            <img src={require('./../d_img/watch.png')} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='item owl_height'>
                        <div className="d_bannersilder3 h-100 overflow-hidden">
                            <div className="d_container">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="d_text">
                                            <h6>Simple & Elegant</h6>
                                            <h2>Latest Jewelry Collections</h2>
                                            <p className='mb-0'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document.</p>
                                            <div className="d_cta mt-5">
                                                <Link href="" className='text-decoration-none'>Buy Now</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='item owl_height'>
                        <Animation />
                    </div>
                    {/* <div className='item owl_height'>
                        <div className=" d_womenbannerbg overflow-hidden">
                            <div className="d_container">
                                <div className="row align-items-center mx-0">
                                    <div className="col-12 col-sm-6">
                                        <div className="d_content">
                                            <p className='mb-0'>The new stylish collection</p>
                                            <div className="d_head">
                                                <h2>New fall season 2024 </h2>
                                            </div>
                                            <div className="d_cta">
                                                <a href="" className='text-decoration-none'>Shop now <GoArrowUpRight className='ms-1 d_arrowicon' /></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6 px-0">
                                        <div className="d_img d_fall_img">
                                            <img src={require('./../d_img/womenbanner1.png')} className='w-100' alt="" />
                                            <div className='d_pls'>
                                                <div className='d_popup_par'>
                                                    <span className='d_plus d-flex align-items-center justify-content-center'>
                                                        <FiPlus className='d_plusicon' />
                                                    </span>
                                                    <div className='d_popup'>
                                                        <div className="d-flex  d_popbox me-4">
                                                            <div className="d_img">
                                                                <img src={require('./../d_img/subbannerimg1.png')} alt="" />
                                                            </div>
                                                            <div className="d_text d-flex flex-column">
                                                                <h6>White cotton blouse</h6>
                                                                <div className="d_price mt-auto">$38.50</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='d_pls2'>
                                                <div className='d_popup_par'>
                                                    <span className='d_plus d-flex align-items-center justify-content-center'>
                                                        <FiPlus className='d_plusicon' />
                                                    </span>
                                                    <div className='d_popup'>
                                                        <div className="d-flex  d_popbox me-4">
                                                            <div className="d_img">
                                                                <img src={require('./../d_img/subbannerimg1.png')} alt="" />
                                                            </div>
                                                            <div className="d_text d-flex flex-column">
                                                                <h6>White cotton blouse</h6>
                                                                <div className="d_price mt-auto">$38.50</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='d_pls3'>
                                                <div className='d_popup_par'>
                                                    <span className='d_plus d-flex align-items-center justify-content-center'>
                                                        <FiPlus className='d_plusicon' />
                                                    </span>
                                                    <div className='d_popup'>
                                                        <div className="d-flex  d_popbox me-4">
                                                            <div className="d_img">
                                                                <img src={require('./../d_img/subbannerimg1.png')} alt="" />
                                                            </div>
                                                            <div className="d_text d-flex flex-column">
                                                                <h6>White cotton blouse</h6>
                                                                <div className="d_price mt-auto">$38.50</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </OwlCarousel>
            </section>

        </>
    )
}

export default Banner
