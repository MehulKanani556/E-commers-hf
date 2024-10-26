import React from 'react'
import '../css/style.css';

const Culture = () => {
    return (
        <>

            <section className='my-5'>
                <div className="d_culbg">
                    <div className="d_container">
                        <div className="row align-items-center">
                            <div className="col-12 col-lg-5 col-xl-4 col-xxl-6">
                                <h2>Where culture and style unite</h2>
                            </div>
                            <div className="col-12 col-lg-7 col-xl-8 col-xxl-6">
                                <div className="d_imgcol position-relative ">
                                    <img src={require('./../d_img/fashion1.png')} alt="Fashion 1" className="d_fimg1" />
                                    <img src={require('./../d_img/fashion2.png')} alt="Fashion 2" className="d_fimg2" />
                                    <img src={require('./../d_img/fashion3.png')} alt="Fashion 3" className="d_fimg3" />
                                    <img src={require('./../d_img/fashion4.png')} alt="Fashion 4" className="d_fimg4" />
                                    <img src={require('./../d_img/fashion5.png')} alt="Fashion 5" className="d_fimg5" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Culture
