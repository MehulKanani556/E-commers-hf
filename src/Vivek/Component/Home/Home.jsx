import React from 'react'
import './home.css'
import '../common.css'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import Electronicsessiental from './Electronicsessiental'
import Bestsellers from './Bestsellers'
import Toptoys from './Toptoys'
import Relateditems from './Relateditems'
import Subscribe from '../common/Subscribe'
import Process from '../common/Process'
// import ShoesSlider from '../Slider/ShoesSlider'
import CommSlider from './CommSlider'
import Jewery from './Jewery'

const Home = () => {
    return (
        <React.Fragment>

            {/* sldier */}
            {/* <ShoesSlider/> */}


            {/* header */}
            <Header/>


            {/* minislider */}
            <CommSlider/>


            {/* ELECTONICS essentials  */}
            <Electronicsessiental/>


            {/* BEst SeLLERS */}
            <Bestsellers/>


            {/* jewelry collection */}
            <Jewery/>


            {/* Toys & Games */}
            <Toptoys/>


            {/* Related to items you've viewed */}
            <Relateditems/>


            {/* New Seetter */}
            <Subscribe/>


            {/* process */}
            <Process/>


            {/* footer */}
            <Footer/>

        </React.Fragment>
    )
}

export default Home



// const Slider = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }