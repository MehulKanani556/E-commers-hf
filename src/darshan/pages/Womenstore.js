import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import { GoArrowUpRight } from "react-icons/go";
import { FiPlus } from "react-icons/fi";
import '../css/style.css';
import Minisider from '../components/Minisider';
import Card from '../components/Card';
import Trending from '../components/Trending';
import Post from '../components/Post';
import Popularbrands from '../components/Popularbrands';
import Header from '../../Vivek/Component/header/Header';
import Culture from '../components/Culture';
import Banner from '../components/Banner';
import Subscribe from '../../Vivek/Component/common/Subscribe';
import Process from '../../Vivek/Component/common/Process';
import Footer from '../../Vivek/Component/footer/Footer';

const Womenstore = () => {

  return (
    <>

      {/* Header section start */}
      <Header />

      {/* Banner section Start */}

      <Banner />

      {/* Banner section End */}

      {/* MinisSider section Start */}

      <Minisider />

      {/* MinisSider section End */}

      {/* Card section Start */}

      <Card />

      {/* Card section End */}

      {/* Trendign section start */}

      <Trending />

      {/* Trendign section end */}

      {/* Culture section start */}

      <Culture />

      {/* Culture section end */}

      {/* Post section Start */}

      <Post />

      {/* Post section End */}

      {/* Popular Brands Section Start */}

      <Popularbrands />

      {/* Popular Brands Section End */}

      {/* Subscribe Section Start */}

      <Subscribe />

      {/* Subscribe Section End */}

      {/* Progress section Start */}

      <Process />

      {/* Progress section End */}

      {/* Footer section */}

      <Footer />

    </>
  )
}

export default Womenstore
