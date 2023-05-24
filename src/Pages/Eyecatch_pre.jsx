import React, { useEffect, useState } from 'react';
import Eyecatch from '../Photo/kousaten.png'

const ImageComponent = ({ imageUrl }) => {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const imageElement = document.getElementById('image');
      const imageWidth = imageElement.offsetWidth;
      const desiredHeight = 300; // 縦のサイズを指定

      const calculatedHeight = (desiredHeight * imageWidth) / imageElement.naturalWidth;
      setHeight(calculatedHeight);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // 初回レンダリング時にも呼び出す

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <img id="image" src={Eyecatch} alt="Image" style={{ width: '100%', height }} />;
};

export default ImageComponent;

