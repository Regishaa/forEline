// App.tsx
import Header from "./components/Header";
import HangingPhotos from "./components/HangingPhotos";
import PhotoSlider from "./components/PhotoSlider";
import GiftSection from "./components/GiftSection";
import StickersLayer from "./components/Stickers";

export default function App() {
  return (
    <div className="bg relative font-sans py-6 min-h-screen">
      <div>
        <HangingPhotos />
      </div>
      <Header />
      <div className="flex justify-center">
        <PhotoSlider />
      </div>
      <GiftSection />
      <StickersLayer />
    </div>
  );
}
