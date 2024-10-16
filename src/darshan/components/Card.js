import React from 'react'
import './../css/card.css'

const Card = () => {

    const cardData = [
        {
            id: 1,
            title: 'Get <span>30%</span> Off',
            discount:30,
            backgroundImage: require('./../d_img/cardbg.png') 
        },
        {
            id: 2,
            title: 'Winter Collections',
            backgroundImage: require('./../d_img/cardbg2.png')  
        },
        {
            id: 3,
            title: 'Summer Collections',
            backgroundImage: require('./../d_img/cardbg3.png')  
        }
    ];

    return (
        <>

            <section className='d_p-80 pt-0'>
                <div className="container-fluid">
                    <div className="row gy-1">
                        {cardData.map((card) => (
                            <div key={card.id} className="col-12 col-sm-6 col-lg-4">
                                <div className="d_card">
                                    <div
                                        className='d_cardimg d-flex align-items-center'
                                        style={{
                                            backgroundImage: `url(${card.backgroundImage})`
                                        }}>
                                        <div className="d_title">
                                            <h5 className='mb-0' dangerouslySetInnerHTML={{ __html: card.title }}></h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                        {/* <div className="col-12 col-sm-6 col-lg-4">
                            <div className="d_card">
                                <div className="d_bgcard1 d_cardimg d-flex align-items-center">
                                    <h5 className='mb-0'>Get <span>30%</span> Off</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-4">
                            <div className="d_card">
                                <div className="d_bgcard2 d_cardimg d-flex align-items-center">
                                    <div className="d_title d_">
                                        <h5 className='mb-0'>Winter Collections</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-4">
                            <div className="d_card">
                                <div className="d_bgcard3 d_cardimg d-flex align-items-center">
                                    <div className="d_title">
                                        <h5 className='mb-0'>Summer Collections</h5>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>



        </>
    )
}

export default Card
