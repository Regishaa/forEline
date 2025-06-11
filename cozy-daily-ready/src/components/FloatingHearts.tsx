import React from 'react';

export default function FloatingHearts() {
  return (
    <div className="absolute inset-0 overflow-hidden z-0">
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="absolute text-pink-300 animate-float"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            fontSize: `${Math.random() * 20 + 10}px`,
          }}
        >
          ❤️
        </div>
      ))}
    </div>
  );
}
