export default function Header() {
  return (
    <div className="absolute top-40 left-4 z-40 font-[Caveat]">
      <div className="relative w-[900px] h-[250px] rotate-[-3deg] animate-[pulseSize_4s_ease-in-out_infinite]">
        <svg
          viewBox="0 0 600 200"
          className="w-full h-full"
          preserveAspectRatio="xMidYMid meet"
        >
          <path
            d="M100,100 C80,60 150,30 200,60 C250,20 350,40 370,70 C410,50 500,70 490,110 C520,130 460,160 400,140 C380,180 300,160 270,140 C230,160 180,150 170,130 C120,140 100,120 100,100 Z"
            fill="#ffe9f4"
            stroke="#ffdbe6"
            strokeWidth="4"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-pink-600 drop-shadow">
            С Днём рождения, Элинчик! 💖
          </h1>
          <p className="text-xs sm:text-sm mt-1 text-pink-700">
            Ты — чудо, и это поздравление только для тебя ✨
          </p>
        </div>
      </div>
    </div>
  );
}
