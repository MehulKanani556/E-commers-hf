import React, { useEffect, useRef, useState } from 'react';

const Demo = () => {
  const [three, setThree] = useState(false);
  const canvasRef = useRef(null);
  const viewerRef = useRef(null);
  const [currentFrame, setCurrentFrame] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [lastX, setLastX] = useState(0);
  const imageCount = 4; // Number of images (adjust as needed)
  const images = useRef([]);
  const dragThreshold = 30; // Threshold to determine drag sensitivity

  // Function to load images from the public folder
  const loadImages = () => {
    return Array.from({ length: imageCount }, (_, i) => {
      const img = new Image();
      img.src = `/360-images/detailimg${i + 1}.png`; // Access images in public/360-images
      return img;
    });
  };

  // Preload all images on component mount
  useEffect(() => {
    images.current = loadImages(); // Load images into the ref array
  }, []);

  // Resize canvas on window resize
  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      const viewer = viewerRef.current;

      if (viewer && canvas) { // Ensure viewerRef and canvasRef are not null
        canvas.width = viewer.clientWidth;
        canvas.height = (viewer.clientWidth / 3) * 2; // Maintain 3:2 aspect ratio
        renderImage();
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial resize

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Render the current image on the canvas
  const renderImage = () => {
    const canvas = canvasRef.current;

    // Check if canvas and its context are available
    if (canvas) {
      const ctx = canvas.getContext('2d');

      // Check if the image is loaded before rendering
      if (images.current[currentFrame]?.complete) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(images.current[currentFrame], 0, 0, canvas.width, canvas.height);
      }
    }
  };

  // Handle mouse and touch drag logic
  const startDragging = (pageX) => {
    setDragging(true);
    setLastX(pageX);
  };

  const stopDragging = () => {
    setDragging(false);
  };

  const handleDrag = (pageX) => {
    if (dragging) {
      const dx = pageX - lastX;

      // Change image only when the drag exceeds the threshold value
      if (Math.abs(dx) > dragThreshold) {
        if (dx > 0) {
          setCurrentFrame((prev) => (prev + 1) % imageCount); // Next frame
        } else if (dx < 0) {
          setCurrentFrame((prev) => (prev - 1 + imageCount) % imageCount); // Previous frame
        }

        // Reset the lastX to avoid continuous frame changes
        setLastX(pageX);
      }
    }
  };

  // Re-render the image when the current frame changes
  useEffect(() => {
    renderImage();
  }, [currentFrame]);

  return (
    <>
      <button onClick={() => setThree(true)}>360 view</button>
      {three && (
        <div
          id="viewer"
          ref={viewerRef}
          style={{ width: '90vw', maxWidth: '600px', position: 'relative', overflow: 'hidden' }}
        >
          <canvas
            ref={canvasRef}
            onMouseDown={(e) => startDragging(e.pageX)}
            onMouseUp={stopDragging}
            onMouseMove={(e) => handleDrag(e.pageX)}
            onTouchStart={(e) => startDragging(e.touches[0].pageX)}
            onTouchEnd={stopDragging}
            onTouchMove={(e) => {
              e.preventDefault(); // Prevent scrolling while dragging
              handleDrag(e.touches[0].pageX);
            }}
            style={{ width: '100%', display: 'block', height: 'auto' }}
          ></canvas>
        </div>
      )}
    </>
  );
};

export default Demo;
