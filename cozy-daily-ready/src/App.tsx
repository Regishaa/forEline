// App.tsx
import Header from "./components/Header";
import HangingPhotos from "./components/HangingPhotos";
import PhotoSlider from "./components/PhotoSlider";
import GiftSection from "./components/GiftSection";
import StickersLayer from "./components/Stickers";
import FloatingAnimal from "./components/FloatingAnimal";
import dogWalk from "./assets/animations/paw.json";
import monkeyWalk from "./assets/animations/dog.json";
import FloatingHearts from "./components/FloatingHearts";

export default function App() {
  return (
    <div className="bg relative font-sans py-6 min-h-screen">
      {/* <Header /> */}
      <div>
        <HangingPhotos />
      </div>
      <div className="flex justify-center -mt-5">
        <PhotoSlider />
      </div>
      <GiftSection />
<FloatingAnimal
  animationData={dogWalk}
  width={120}
  initialX={window.innerWidth * 0.8}
  initialY={window.innerHeight * 0.7}
  speedX={0.15}  // медленнее по X
  speedY={0.1}   // медленнее по Y
  flip={false}   // не зеркалим, пёсик уже "перевернут"
/>

<FloatingAnimal
  animationData={monkeyWalk}
  width={140}
  initialX={window.innerWidth * 0.2}
  initialY={window.innerHeight * 0.3}
  speedX={0.2}   // чуть быстрее
  speedY={0.15}
  flip={true}    // зеркалим обезьянку
/>

      <StickersLayer />
      <FloatingHearts />
    </div>
  );
}
