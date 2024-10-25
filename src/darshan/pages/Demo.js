import React, { useState, useRef, useEffect } from 'react';
import { GlassMagnifier } from 'react-image-magnifiers';
import detailImg1 from './../d_img/detailimg1.png';
import detailImg2 from './../d_img/detailimg2.png';
import detailImg3 from './../d_img/detailimg3.png';
import detailImg4 from './../d_img/detailimg4.png';
import detailVideo from './../d_img/detailvideo.mp4';
import './../css/demo.css'

const Demo = () => {
  const videoRef = useRef(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [magnifierKey, setMagnifierKey] = useState(0);
  
  const [mainContent, setMainContent] = useState({
    type: 'image',
    src: detailImg4,
    index: 0
  });

  const galleryItems = [
    { type: 'image', src: detailImg1, thumbnail: detailImg1 },
    { type: 'image', src: detailImg2, thumbnail: detailImg2 },
    { type: 'video', src: detailVideo, thumbnail: detailVideo },
    { type: 'image', src: detailImg3, thumbnail: detailImg3 }
  ];

  useEffect(() => {
    if (mainContent.type === 'image') {
      const img = new Image();
      img.src = mainContent.src;
      img.onload = () => {
        setImageLoaded(true);
        setMagnifierKey(prev => prev + 1);
      };
    }
  }, [mainContent.src]);

  const handleThumbnailClick = (item, index) => {
    setImageLoaded(false); // Reset the image loading state
    setMainContent({ ...item, index });

    // If it's a video, play it
    if (item.type === 'video' && videoRef.current) {
      setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.play();
        }
      }, 0);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row">
        {/* Thumbnails Column */}
        <div className="col-md-2">
          <div className="d-flex flex-column gap-3">
            {galleryItems.map((item, index) => (
              <div 
                key={index}
                className="position-relative thumbnail-container"
                onClick={() => handleThumbnailClick(item, index)}
                style={{ cursor: 'pointer' }}
              >
                {item.type === 'image' ? (
                  <img
                    src={item.thumbnail}
                    alt={`Thumbnail ${index + 1}`}
                    className="img-fluid rounded"
                    style={{
                      border: mainContent.index === index ? '2px solid #ff4d4d' : 'none',
                      transition: 'border 0.2s ease',
                      width: '100%',
                      aspectRatio: '3/4',
                      objectFit: 'cover'
                    }}
                  />
                ) : (
                  <div className="position-relative">
                    <img
                      src={item.thumbnail}
                      alt="Video thumbnail"
                      className="img-fluid rounded"
                      style={{
                        width: '100%',
                        aspectRatio: '3/4',
                        objectFit: 'cover'
                      }}
                    />
                    <div 
                      className="position-absolute top-50 start-50 translate-middle"
                      style={{
                        color: 'white',
                        background: 'rgba(0,0,0,0.5)',
                        borderRadius: '50%',
                        width: '40px',
                        height: '40px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      ▶
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Main Content Column */}
        <div className="col-md-10">
          <div className="position-relative main-content">
            {mainContent.type === 'image' && imageLoaded ? (
              <div className="main-image-container" >
                <GlassMagnifier className='d_glass'
                  key={magnifierKey}
                  imageSrc={mainContent.src} 
                  imageAlt="Main Product View"
                  largeImageSrc={mainContent.src}
                  magnifierSize={200}
                  magnifierBorderSize={1}
                  magnifierBorderColor="rgba(255,255,255,0.5)"
                  square={false}
                  allowOverflow={true}
                  magnifierPosition="right"
                  // style={{
                  //   width: '100%',
                  //   height: '100%',
                  //   objectFit: 'contain'
                  // }}
                />
              </div>
            ) : mainContent.type === 'video' ? (
              <video
                ref={videoRef}
                controls
                className="w-100 rounded"
                style={{ 
                  maxHeight: '700px',
                  objectFit: 'contain',
                  backgroundColor: '#f8f9fa'
                }}
              >
                <source src={mainContent.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <div 
                className="loading-placeholder"
                style={{
                  width: '100%',
                  height: '700px',
                  backgroundColor: '#f8f9fa',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                Loading...
              </div>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        .thumbnail-container {
          transition: transform 0.2s ease;
        }
        
        .thumbnail-container:hover {
          transform: scale(1.05);
        }

        .main-image-container {
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #f8f9fa;
          border-radius: 8px;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default Demo;
