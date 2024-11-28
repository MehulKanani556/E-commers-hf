import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import './grid.css'
import Map from '../../../Vivek/Component/Map'

const Gridcomponent = () => {

    let data = [
        {
            title: "Eat Sleep Game Repeat",
            image: "eat_sleep.png",
            logo: "logitech.png",
            offer: "Upto 20% OFF",
            status: true
        },
        {
            title: "Unleashing creativity, one keystroke at a time.",
            image: "unlashing.png",
            logo: "apple.png",
            offer: "Upto 20% OFF"
        },
        {
            title: "Build for Intellegence",
            image: "build for.png",
            logo: "apple.png",
            offer: "Upto 20% OFF"
        },
        {
            title: "Dont't watch the clock, do what it does keep going",
            image: "dont watch.png",
            logo: "noise.png",
            offer: "Upto 20% OFF"
        },
        {
            title: "Don't be the same be better",
            image: "dont be the same.png",
            logo: "asus_logo.png",
            offer: "Upto 20% OFF"
        },
        {
            title: "Plug in, tune out, and enjoy the beats. ...",
            image: "plug in.png",
            logo: "jbl.png",
            offer: "Upto 20% OFF",
            status: true

        },
        {
            title: "Lost in the rhythm of my favorite tunes.",
            image: "lost in the rythem.png",
            logo: "jbl.png",
            offer: "Upto 20% OFF",
        },
    ]

    let cnt = 1

    let [gridview, setgridview] = useState([])

    useEffect(() => {
        setgridview(data)
    }, [])

    return (
        <React.Fragment>
            <section className='d_p-80'>
                <div className='d_container'>
                    <Row className='m-0 mb-4'>
                        <Col className='p-0'>
                            <h2 className='section_title text-uppercase m-0'>
                                Explore Popular Brands
                            </h2>
                        </Col>
                    </Row>
                    <Row className='m-0'>
                        <Col className='p-0'>
                            <div>
                                <div className="parent">
                                    <Map data={gridview}>
                                        {(item , index) => (                                            
                                            <div className={`div${cnt++} VK_grid_parent position-relative`}>
                                                <div className={`${item.status ? 'me-lg-3 h-100 position-relative' : "h-100 position-relative"}`}>
                                                  <img src={require(`../../assets/${item.image}`)} className='w-100 h-100 object_center' alt="" />
                                                <div className='VK_grid_child'>
                                                    <div className='h-100 d-flex flex-column'>
                                                        <div className='d-flex'>
                                                            <div className='VK_grid_logo text-center'>
                                                                <img src={require(`../../assets/${item.logo}`)} className='object_contain' alt="" />
                                                                <p className='m-0 text-white font_12 mt-2'>
                                                                    {item.offer}
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className='mt-auto'>
                                                            <h4 className='VK_pro_heading'>
                                                                {item.title}
                                                            </h4>
                                                            <div>
                                                                <button className='VK_pro_button'>
                                                                    Go to Collection
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                </div>
                                            </div>
                                        )}
                                    </Map>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Gridcomponent
