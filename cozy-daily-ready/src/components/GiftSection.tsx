import { useState } from "react";
import confetti from "canvas-confetti";
import giftBox from "../assets/icons/gift.gif"; // гифка милой коробки без фона
import certCard from "../assets/icons/carte.png"; // картинка сертификата-карты

export default function GiftSection() {
  const [opened, setOpened] = useState(false);

  const handleOpenGift = () => {
    setOpened(true);
    confetti({
      particleCount: 150,
      spread: 100,
      origin: { y: 0.6 },
    });
  };

  const handleClose = () => {
    setOpened(false);
  };

  return (
    <>
      {/* Плавающая коробочка */}
      <div className="fixed bottom-6 right-6 sm:bottom-10 sm:right-10 z-30 flex flex-col items-center gap-2">
        <img
          src={giftBox}
          alt="Подарок"
          className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 object-contain cursor-pointer hover:scale-110 transition-transform drop-shadow-lg"
        />
        <button
          onClick={handleOpenGift}
          className="px-4 py-1 sm:px-5 sm:py-2 text-sm sm:text-base bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-full shadow-md transition-all"
        >
          🎁 Открыть подарок
        </button>
      </div>

      {/* Оверлей с сертификатом */}
      {opened && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center animate-fade-in"
          onClick={handleClose}
        >
          <div
            className="relative bg-white rounded-xl p-6 shadow-2xl flex flex-col items-center w-[90%] max-w-lg sm:max-w-xl md:max-w-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={certCard}
              alt="Сертификат"
              className="w-64 sm:w-80 md:w-96 rounded-xl shadow-lg border border-pink-300"
            />

            <p className="text-center text-pink-500 mt-4 font-semibold text-lg">
              Сертификат в «Золотое яблоко» 💄✨
            </p>
            <p className="mt-2 text-sm text-pink-400 italic animate-pulse">
              (Потрать его на что-то нужное!)
            </p>
            <p className="mt-2 text-sm text-pink-400 italic animate-pulse">
              А получишь ты его, когда не будешь этого ждать🥺💫
            </p>
            <button
              onClick={handleClose}
              className="mt-4 px-4 py-1 text-sm bg-pink-400 hover:bg-pink-500 text-white rounded-full transition-all shadow"
            >
              Закрыть ✨
            </button>
          </div>
        </div>
      )}

      {/* Анимация */}
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </>
  );
}
