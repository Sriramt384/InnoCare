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
// import React from "react";

// const App: React.FC = () => {
//   // Function to handle single-tap reading
//   const handleSingleTap = (newsType: string) => {
//     const textToRead = `You selected ${newsType}.`;
//     const utterance = new SpeechSynthesisUtterance(textToRead);
//     speechSynthesis.speak(utterance);
//   };

//   // Function to handle double-tap navigation
//   const handleDoubleTap = (url: string) => {
//     window.location.assign(url); // Adds the URL to the browser's history stack
//   };

//   const sections = [
//     { title: "Top News", url: "https://ddnews.gov.in/en/category/top-stories/" },
//     { title: "International News", url: "https://ddnews.gov.in/en/category/international/" },
//     { title: "National News", url: "https://ddnews.gov.in/en/category/national/" },
//     { title: "Sports News", url: "https://ddnews.gov.in/en/category/sports/" },
//   ];

//   return (
//     <div className="min-h-screen bg-black text-white flex justify-center items-center">
//       <div className="grid grid-cols-3 gap-8 justify-items-center items-center w-11/12 max-w-screen-lg">
//         {sections.map((section, index) => (
//           <div
//             key={index}
//             className="col-span-3 w-full h-48 bg-gray-700 rounded-lg flex flex-col justify-center items-center text-center text-2xl font-semibold space-y-2 cursor-pointer"
//             onClick={() => handleSingleTap(section.title)}
//             onDoubleClick={() => handleDoubleTap(section.url)}
//           >
//             <span className="text-white no-underline hover:text-yellow-400">{section.title}</span>
//             {index !== 0 && (
//               <span className="text-lg">
//                 {index === 1
//                   ? "Latest global news from Doordarshan"
//                   : index === 2
//                   ? "Updates on India's key events and policies"
//                   : "Catch the latest in sports from Doordarshan"}
//               </span>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default App;
import React from "react";

const StyledYouTubeLiveNews: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4 sm:p-8">
  <div className="w-full max-w-6xl aspect-[16/9] bg-black rounded-lg overflow-hidden shadow-2xl border border-gray-700">
    <iframe
      className="w-full h-full"
      src="https://www.youtube.com/embed/OjsE734aXyc?si=jns9qjm1zKGIGjBf"
      title="Live News Stream"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>
</div>
  );
};

export default StyledYouTubeLiveNews;
