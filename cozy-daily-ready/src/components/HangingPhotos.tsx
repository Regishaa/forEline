import photo1 from "../assets/images/1.jpg";
import photo2 from "../assets/images/2.jpg";
import photo16 from "../assets/images/16.png";
import photo4 from "../assets/images/4.png";
import photo5 from "../assets/images/5.png";
import photo6 from "../assets/images/6.png";
import clipImg from "../assets/icons/clothespin.png";

const images = [
  { src: photo1, caption: "Гармония ☯️🌿" },
  { src: photo2, caption: "Милашка 🥺💫" },
  { src: photo16, caption: "Ты — чудо 💖" },
  { src: photo4, caption: "Лучшая 👑🌟" },
  { src: photo5, caption: "Сияй! ✨🌟" },
  { src: photo6, caption: "Мечтай! 🌙⭐" },
];

export default function HangingPhotos() {
  return (
    <div className="relative w-screen overflow-visible pt-80 pb-16 ">

      {/* Верёвка */}
      <svg
        className="absolute top-[300px] left-0 w-full h-8 z-10 pointer-events-none"
        viewBox="0 0 100 10"
        preserveAspectRatio="none"
      >
        <path
          d="M0,5 Q25,0 50,5 T100,5"
          stroke="#e0a2b7"
          strokeWidth="1"
          fill="none"
        />
      </svg>

      {/* Фотки на всю ширину */}
      <div className="flex justify-evenly items-start w-full px-8 z-20 relative">
        {images.map((img, i) => (
          <div
            key={i}
            className="relative flex flex-col items-center"
            style={{
              animation: `swing 4s ease-in-out infinite alternate`,
              animationDelay: `${i * 0.3}s`,
            }}
          >
            {/* Прищепка */}
            <img
              src={clipImg}
              alt="clip"
              className="absolute -top-7 w-8 h-8 z-30"
              style={{ left: "50%", transform: "translateX(-50%)" }}
              draggable={false}
            />

            {/* Полароид */}
            <div
              className="bg-white border border-gray-300 shadow-lg rounded-sm relative"
              style={{
                width: 160,
                height: 200, // 160 для фото + 40 для "полароидной" нижней части
                padding: 10,
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              <img
                src={img.src}
                alt={img.caption}
                className="w-full h-[160px] object-cover rounded-sm"
                style={{ borderBottom: "1px solid #eee" }}
              />
              <p className="text-sm font-semibold text-pink-500 mt-2 italic">
                {img.caption}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Анимация покачивания */}
      <style>{`
        @keyframes swing {
          0% { transform: rotate(-1.2deg); }
          100% { transform: rotate(1.2deg); }
        }
      `}</style>
    </div>
  );
}
