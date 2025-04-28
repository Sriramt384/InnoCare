// import React from "react";

// const App: React.FC = () => {
//   return (
//     <div className="min-h-screen bg-black text-white flex justify-center items-center">
//       <div className="grid grid-cols-3 gap-6 justify-items-center items-center w-11/12 max-w-screen-lg">
//         {/* Long Icon */}
//         <div className="col-span-3 w-full h-48 bg-gray-800 rounded-lg flex justify-center items-center text-center text-lg hover:scale-105 transition-transform">
//           <a
//             href="https://swayam.gov.in/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-white no-underline hover:text-yellow-400"
//           >
//             SWAYAM
//           </a>
//         </div>

//         {/* Small Icons */}
//         {[
//           { link: "https://youtube.com/playlist?list=PLBcBU_WV3EWfyEXxqBUpb--YZ_-3B7yyq&si=x9WC10hi6wrkfvcU", text: "Stitching" },
//           { link: "https://youtu.be/FRTpI2Gu1KA?si=GmXvj32yek32b6Ds", text: "Religious Scriptures" },
//           { link: "https://youtube.com/playlist?list=PL1dleLLvCiHOrrj2lDtCDiU8oX-ySckf8&si=FrySi1sz-tlNggwM", text: "Baking" },
//           { link: "https://www.youtube.com/playlist?list=PL-actdn3psOOKxtf989d0uYanovZF6FaS", text: "Learning Music" },
//           { link: "https://youtube.com/playlist?list=PLCmSvzFKmIpMX7iqKXLrKF4Ivna3qTXnm&si=SU3JuC-OcSs9Msvx", text: "Gardening" },
//           { link: "https://youtube.com/playlist?list=PLu0W_9lII9agwh1XjRt242xIpHhPT2llg&si=CkZl16447o4JDzH2", text: "Coding" },
//           { link: "https://youtube.com/playlist?list=PL83B4618216D7989B&si=MLALOG2ezfB3ofpF", text: "Origami" },
//         ].map((item, index) => (
//           <div
//             key={index}
//             className="w-full h-48 bg-gray-700 rounded-lg flex justify-center items-center text-center text-base hover:bg-gray-600 hover:scale-105 transition-transform"
//           >
//             <a
//               href={item.link}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-white no-underline hover:text-yellow-400"
//             >
//               {item.text}
//             </a>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default App;
// import React, { useState } from "react";

// interface Card {
//   linkFree: string;
//   linkPaid: string;
//   text: string;
// }

// const App: React.FC = () => {
//   const [activeCard, setActiveCard] = useState<number | null>(null);

//   const cards: Card[] = [
//     {
//       linkFree: "https://youtube.com/playlist?list=PLBcBU_WV3EWfyEXxqBUpb--YZ_-3B7yyq",
//       linkPaid: "https://www.udemy.com/",
//       text: "Stitching",
//     },
//     {
//       linkFree: "https://youtu.be/FRTpI2Gu1KA",
//       linkPaid: "https://www.udemy.com/",
//       text: "Religious Scriptures",
//     },
//     {
//       linkFree: "https://youtube.com/playlist?list=PL1dleLLvCiHOrrj2lDtCDiU8oX-ySckf8",
//       linkPaid: "https://www.udemy.com/",
//       text: "Baking",
//     },
//     {
//       linkFree: "https://www.youtube.com/playlist?list=PL-actdn3psOOKxtf989d0uYanovZF6FaS",
//       linkPaid: "https://www.udemy.com/",
//       text: "Learning Music",
//     },
//     {
//       linkFree: "https://youtube.com/playlist?list=PLCmSvzFKmIpMX7iqKXLrKF4Ivna3qTXnm",
//       linkPaid: "https://www.udemy.com/",
//       text: "Gardening",
//     },
//     {
//       linkFree: "https://youtube.com/playlist?list=PLu0W_9lII9agwh1XjRt242xIpHhPT2llg",
//       linkPaid: "https://www.udemy.com/",
//       text: "Coding",
//     },
//     {
//       linkFree: "https://youtube.com/playlist?list=PL83B4618216D7989B",
//       linkPaid: "https://www.udemy.com/",
//       text: "Origami",
//     },
//   ];

//   const colors = [
//     "bg-red-500",
//     "bg-blue-500",
//     "bg-green-500",
//     "bg-yellow-500",
//     "bg-purple-500",
//     "bg-pink-500",
//     "bg-orange-500",
//   ];

//   const handleCardClick = (index: number) => {
//     setActiveCard((prev) => (prev === index ? null : index));
//   };

//   return (
//     <div className="min-h-screen bg-black text-white flex justify-center items-center">
//       <div className="grid grid-cols-3 gap-8 justify-items-center items-center w-11/12 max-w-screen-lg">
//         {/* Long Icon */}
//         <a
//           href="https://swayam.gov.in/"
//           rel="noopener noreferrer"
//           className="col-span-3 w-full h-48 bg-gray-700 rounded-lg flex flex-col justify-center items-center text-center text-2xl font-semibold space-y-2 no-underline hover:text-yellow-400"
//         >
//           <span className="text-white">SWAYAM</span>
//           <span className="text-lg">An initiative by Ministry of Education (Govt. of India)</span>
//         </a>

//         {/* Small Icons */}
//         {cards.map((card, index) => (
//           <div
//             key={index}
//             className={`w-full rounded-lg text-center p-6 transition-all ${
//               activeCard === index ? "h-72" : "h-48"
//             } flex flex-col justify-center items-center ${
//               colors[index % colors.length]
//             }`}
//             onClick={() => handleCardClick(index)}
//           >
//             <p className="text-xl font-bold mb-6">{card.text}</p>
//             {activeCard === index && (
//               <div className="flex gap-6 mt-6">
//                 <a
//                   href={card.linkFree}
//                   rel="noopener noreferrer"
//                   className="px-6 py-3 bg-gray-800 rounded-lg text-white font-medium hover:bg-gray-700"
//                 >
//                   Free
//                 </a>
//                 <a
//                   href={card.linkPaid}
//                   rel="noopener noreferrer"
//                   className="px-6 py-3 bg-gray-800 rounded-lg text-white font-medium hover:bg-gray-700"
//                 >
//                   Paid
//                 </a>
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default App;
import React, { useState, useRef } from "react";

interface Card {
  linkFree: string;
  linkPaid: string;
  text: string;
}

const App: React.FC = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const tapTimeout = useRef<NodeJS.Timeout | null>(null);

  const cards: Card[] = [
    {
      linkFree: "https://youtube.com/playlist?list=PLBcBU_WV3EWfyEXxqBUpb--YZ_-3B7yyq",
      linkPaid: "https://www.udemy.com/",
      text: "Stitching",
    },
    {
      linkFree: "https://youtu.be/FRTpI2Gu1KA",
      linkPaid: "https://www.udemy.com/",
      text: "Religious Scriptures",
    },
    {
      linkFree: "https://youtube.com/playlist?list=PL1dleLLvCiHOrrj2lDtCDiU8oX-ySckf8",
      linkPaid: "https://www.udemy.com/",
      text: "Baking",
    },
    {
      linkFree: "https://www.youtube.com/playlist?list=PL-actdn3psOOKxtf989d0uYanovZF6FaS",
      linkPaid: "https://www.udemy.com/",
      text: "Learning Music",
    },
    {
      linkFree: "https://youtube.com/playlist?list=PL83B4618216D7989B",
      linkPaid: "https://www.udemy.com/",
      text: "Origami",
    },
  ];

  const colors = [
    "bg-red-500",
    "bg-blue-500",
    "bg-green-500",
    "bg-yellow-500",
    "bg-purple-500",
    "bg-pink-500",
    "bg-orange-500",
  ];

  const synth = window.speechSynthesis;

  const handleSingleTap = (text: string) => {
    const utterance = new SpeechSynthesisUtterance(text);
    synth.speak(utterance);
  };

  const handleDoubleTap = (index: number, link?: string) => {
    if (link) {
      window.open(link, "_self");
    } else {
      setActiveCard((prev) => (prev === index ? null : index));
    }
  };

  const handleTap = (index: number, isSpecial: string | null) => {
    if (tapTimeout.current) {
      clearTimeout(tapTimeout.current);
      tapTimeout.current = null;

      if (isSpecial === "SWAYAM") {
        window.open("https://swayam.gov.in/", "_self");
      } else if (isSpecial === "SkillIndiaDigital") {
        window.open("https://www.skillindiadigital.gov.in/home", "_self");
      } else {
        handleDoubleTap(index);
      }
    } else {
      tapTimeout.current = setTimeout(() => {
        if (isSpecial) {
          handleSingleTap(isSpecial === "SWAYAM" ? "SWAYAM" : "Skill India Digital");
        } else {
          handleSingleTap(cards[index].text);
        }
        tapTimeout.current = null;
      }, 300);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex justify-center items-center">
      <div className="grid grid-cols-3 gap-8 justify-items-center items-center w-11/12 max-w-screen-lg">
        {/* SWAYAM Icon */}
        <div
          className="col-span-3 w-full h-48 bg-gray-700 rounded-lg flex flex-col justify-center items-center text-center text-2xl font-semibold space-y-2 no-underline hover:text-yellow-400"
          onClick={() => handleTap(0, "SWAYAM")}
        >
          <span className="text-white">SWAYAM</span>
          <span className="text-lg">An initiative by Ministry of Education (Govt. of India)</span>
        </div>

        {/* Skill India Digital Icon */}
        <div
          className="col-span-3 w-full h-48 bg-gray-700 rounded-lg flex flex-col justify-center items-center text-center text-2xl font-semibold space-y-2 no-underline hover:text-yellow-400"
          onClick={() => handleTap(0, "SkillIndiaDigital")}
        >
          <span className="text-white">SKILL INDIA DIGITAL</span>
          <span className="text-lg">Empowering youth with digital skill opportunities</span>
        </div>

        {/* Small Icons */}
        {cards.map((card, index) => (
          <div
            key={index}
            className={`w-full rounded-lg text-center p-6 transition-all ${
              activeCard === index ? "h-72" : "h-48"
            } flex flex-col justify-center items-center ${colors[index % colors.length]}`}
            onClick={() => handleTap(index, null)}
          >
            <p className="text-xl font-bold mb-6">{card.text}</p>
            {activeCard === index && (
              <div className="flex gap-6 mt-6">
                <a
                  href={card.linkFree}
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-gray-800 rounded-lg text-white font-medium hover:bg-gray-700"
                >
                  Free
                </a>
                <a
                  href={card.linkPaid}
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-gray-800 rounded-lg text-white font-medium hover:bg-gray-700"
                >
                  Paid
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;


