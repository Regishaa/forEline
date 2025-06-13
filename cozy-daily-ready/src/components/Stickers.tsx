import React from 'react';
import styled, { keyframes } from 'styled-components';
import cat from '../assets/icons/cat.png';
import chik from '../assets/icons/chik.png';
import cloud from '../assets/icons/cloud.png';
import heart from '../assets/icons/heart.png';
import hearts from '../assets/icons/hearts.png';
import loveYoucat from '../assets/icons/loveYou.png';
import paw from '../assets/icons/paw.png';
import pinkPaw from '../assets/icons/pinkPaw.png';
import star from '../assets/icons/star.png';
import unicat from '../assets/icons/unicat.png';
import eline1 from '../assets/icons/eline1.webp';
import eline2 from '../assets/icons/eline2.webp';


const sway = keyframes`
  0%, 100% { transform: rotate(-5deg); }
  50% { transform: rotate(5deg); }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
`;

const StickersWrapper = styled.div`
  position: absolute;   /* Абсолютное позиционирование */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;        /* Растягиваем на весь родительский контейнер */
  pointer-events: none;
  user-select: none;
  z-index: 1000;
`;

const Sticker = styled.img<{
  top: string;
  left: string;
  size: string;
  animationDelay: string;
  animationType: 'sway' | 'float';
}>`
  position: absolute;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  width: ${(props) => props.size};
  filter: drop-shadow(0 0 3px rgba(0, 0, 0, 0.2));
  
  animation-delay: ${(props) => props.animationDelay};
  pointer-events: none;
  user-select: none;
  
  animation-name: ${(props) => (props.animationType === 'sway' ? sway : float)};
  animation-duration: 4s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
`;


const stickers = [
  { src: eline1, top: '60%', left: '10%', size: '300px', delay: '1.7s', animationType: 'sway' },
{ src: eline2, top: '30%', left: '80%', size: '300px', delay: '2.1s', animationType: 'float' },
  { src: cat, top: '70%', left: '20%', size: '40px', delay: '0s', animationType: 'sway' },
  { src: chik, top: '33%', left: '20%', size: '35px', delay: '1s', animationType: 'float' },
  { src: cloud, top: '50%', left: '15%', size: '50px', delay: '2s', animationType: 'sway' },
  { src: heart, top: '90%', left: '15%', size: '35px', delay: '1.5s', animationType: 'float' },
  { src: hearts, top: '22%', left: '5%', size: '40px', delay: '0.5s', animationType: 'sway' },
  { src: loveYoucat, top: '35%', left: '60%', size: '30px', delay: '2.5s', animationType: 'float' },
  { src: paw, top: '70%', left: '85%', size: '50px', delay: '3s', animationType: 'sway' },
  { src: pinkPaw, top: '95%', left: '37%', size: '35px', delay: '2.3s', animationType: 'float' },
  { src: star, top: '20%', left: '92%', size: '45px', delay: '1.2s', animationType: 'sway' },
  { src: unicat, top: '40%', left: '80%', size: '40px', delay: '0.8s', animationType: 'float' },
];

const StickersContainer: React.FC = () => {
  return (
    <StickersWrapper>
      {stickers.map((sticker, i) => (
        <Sticker
          key={i}
          src={sticker.src}
          top={sticker.top}
          left={sticker.left}
          size={sticker.size}
          animationDelay={sticker.delay}
          animationType={sticker.animationType}
          alt="sticker"
        />
      ))}
    </StickersWrapper>
  );
};

export default StickersContainer;
