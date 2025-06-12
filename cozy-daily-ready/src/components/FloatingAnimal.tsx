import { useEffect, useRef, useState } from 'react';
import Lottie from 'lottie-react';

type FloatingAnimalProps = {
  animationData: any;
  width?: number;
  initialX?: number;
  initialY?: number;
  speedX?: number; // скорость по X
  speedY?: number; // скорость по Y
  flip?: boolean;
};

export default function FloatingAnimal({
  animationData,
  width = 200,
  initialX = 0,
  initialY = 50,
  speedX = 0.3,
  speedY = 0.2,
  flip = false,
}: FloatingAnimalProps) {
  const [x, setX] = useState(initialX);
  const [y, setY] = useState(initialY);
  const xDir = useRef(Math.random() > 0.5 ? 1 : -1);
  const yDir = useRef(Math.random() > 0.5 ? 1 : -1);

  useEffect(() => {
    function step() {
      setX(prev => {
        let next = prev + xDir.current * speedX;
        if (next > window.innerWidth - width) xDir.current = -1;
        if (next < 0) xDir.current = 1;
        return next;
      });

      setY(prev => {
        let next = prev + yDir.current * speedY;
        if (next > window.innerHeight - width) yDir.current = -1;
        if (next < 0) yDir.current = 1;
        return next;
      });

      requestAnimationFrame(step);
    }

    requestAnimationFrame(step);
  }, [width, speedX, speedY]);

  return (
    <div
      style={{
        position: 'fixed',
        left: x,
        top: y,
        width,
        transform: flip ? 'scaleX(-1)' : 'none',
        pointerEvents: 'none',
        zIndex: 50,
      }}
    >
      <Lottie animationData={animationData} loop />
    </div>
  );
}
