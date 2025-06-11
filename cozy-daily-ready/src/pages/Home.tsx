import React from 'react';
import Header from '../components/Header';
import HangingPhotos from '../components/HangingPhotos';
import PhotoSlider from '../components/PhotoSlider';
import GiftBox from '../components/GiftBox';
import Stickers from '../components/Stickers';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-pink-100 overflow-hidden">
      <Stickers />
      <Header />
      <HangingPhotos />
      <PhotoSlider />
      <GiftBox />
    </div>
  );
}
