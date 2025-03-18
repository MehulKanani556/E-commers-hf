import React, { useEffect, useState } from 'react'
import './../css/card.css'
import axios from 'axios'

const Card = () => {

    const BaseUrl = process.env.REACT_APP_BASEURL;
    const [card, setCard] = useState([]);

    const cardData = [
        {
            id: 1,
            title: 'Get <span>30%</span> Off',
            discount: 30,
            backgroundImage: require('./../d_img/cardbg.png'),
            className: 'd_bgcard1'
        },
        {
            id: 2,
            title: 'Winter Collections',
            backgroundImage: require('./../d_img/cardbg2.png'),
            className: 'd_bgcard2'
        },
        {
            id: 3,
            title: 'Summer Collections',
            backgroundImage: require('./../d_img/cardbg3.png'),
            className: 'd_bgcard3'
        }
    ];

    const fetchBrandData = async () => {
        try {
            const response = await axios.get(`${BaseUrl}/api/getAllOffers`)
            //   console.log("data" , response?.data);
            setCard(response?.data?.offers)
        } catch (error) {

        }
    }

    useEffect(() => {
        fetchBrandData()
    }, []);

    return (
        <>

            <section className='d_p-80'>
                <div className="container-fluid">
                    <div className="row gy-1">
                        {card.map((card) => (
                            <div key={card.id} className="col-12 col-sm-6 col-lg-4">
                                <div className="d_card">
                                    <div
                                        className={`${card.className} d_cardimg d-flex align-items-center`}
                                        style={{ backgroundImage: `url(${card.backgroundImage})` }}
                                    >
                                        <div className="d_title">
                                            <h5 className='mb-0' dangerouslySetInnerHTML={{ __html: card.offerName }}></h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>



        </>
    )
}

export default Card
