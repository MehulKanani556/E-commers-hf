import React from 'react'
import './../css/card.css'

const Card = () => {
    return (
        <>

            <section className='d_p-80'>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 col-lg-4">
                            <div className="d_card">
                                <div className="d_img">
                                    <img src={require('./../d_img/card1.png')} alt="" />
                                </div>
                                <h6>swfbhdsvdyfgde</h6>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Card
