import React, { useEffect, useState, useRef } from 'react';
import Eyecatch from '../Photo/ac.jpeg'
import Eyecatch2 from '../Photo/GoodDesign.mp4'
import ReactPlayer from 'react-player'
import Eyecatch3 from '../Photo/8746.jpg'

const ImageComponent = ({ imageUrl }) => {
  const [height, setHeight] = useState(0);

  const videoRef = useRef(null);

  useEffect(() => {
    // ページがロードされたら動画を自動再生

  }, []);

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

  return (
    <div id="Home">
      <div class="eye_box" id="" style={{}}>
        <img id="image" src={Eyecatch3} alt="Image" style={{ width: '100%', height: '400px', objectFit: 'cover' }} />
        <p>Pfand<br></br>Vending<br></br>Machine</p>
      </div>
    </div>

  );
};

export default ImageComponent;

