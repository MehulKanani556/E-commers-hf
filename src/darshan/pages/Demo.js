import React, { useState, useRef } from 'react';
import { IoShareSocialSharp } from 'react-icons/io5';
import ReactImageMagnify from 'react-image-magnify';

const Demo = () => {
  const [mainContent, setMainContent] = useState({
    type: 'image',
    src: '/d_img/detailimg4.png'
  });
  const [is360Active, setIs360Active] = useState(false);
  const videoRef = useRef(null);

  const subImages = [
    { type: 'image', src: '/d_img/detailimg1.png' },
    { type: 'image', src: '/d_img/detailimg2.png' },
    { type: 'video', src: '/d_img/detailvideo.mp4' },
    { type: 'image', src: '/d_img/detailimg3.png' }
  ];

  const handleSubContentClick = (content) => {
    if (content.type === 'video' && videoRef.current) {
      setMainContent(content);
      videoRef.current.play();
    } else {
      setMainContent(content);
      setIs360Active(false);
    }
  };

  const toggle360View = () => {
    setIs360Active(!is360Active);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Product Details',
        url: window.location.href
      });
    }
  };

  return (
    <section className="p-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="grid grid-cols-12 gap-4">
            {/* Thumbnail Column */}
            <div className="col-span-12 lg:col-span-3 flex flex-row lg:flex-col gap-4 justify-center">
              {subImages.map((item, index) => (
                <div 
                  key={index} 
                  className="w-20 h-20 cursor-pointer hover:opacity-80 transition-opacity"
                  onClick={() => handleSubContentClick(item)}
                >
                  {item.type === 'image' ? (
                    <img 
                      src={item.src} 
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover rounded"
                    />
                  ) : (
                    <div className="relative w-full h-full">
                      <video className="w-full h-full object-cover rounded">
                        <source src={item.src} type="video/mp4" />
                      </video>
                      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
                        <img src="/d_img/play1.png" alt="Play" className="w-8 h-8" />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Main Content */}
            <div className="col-span-12 lg:col-span-9">
              <div className="relative">
                {mainContent.type === 'image' && !is360Active && (
                  <ReactImageMagnify
                    {...{
                      smallImage: {
                        alt: 'Product Image',
                        isFluidWidth: true,
                        src: mainContent.src
                      },
                      largeImage: {
                        src: mainContent.src,
                        width: 1200,
                        height: 1800
                      }
                    }}
                  />
                )}

                {mainContent.type === 'video' && (
                  <video 
                    ref={videoRef}
                    controls
                    className="w-full h-full object-cover rounded"
                  >
                    <source src={mainContent.src} type="video/mp4" />
                  </video>
                )}

                {/* {is360Active && (
                  <ImageView360
                    amount={36}
                    imagePath="/path/to/360/images"
                    fileName="image_{index}.jpg"
                  />
                )} */}

                <div className="absolute top-4 right-4 flex gap-4">
                  <button 
                    onClick={toggle360View} 
                    className="p-2 bg-white rounded-full shadow-lg hover:bg-gray-100"
                  >
                    <img src="/d_img/360.png" alt="360 View" className="w-6 h-6" />
                  </button>
                  <button 
                    onClick={handleShare}
                    className="p-2 bg-white rounded-full shadow-lg hover:bg-gray-100"
                  >
                    <IoShareSocialSharp className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;