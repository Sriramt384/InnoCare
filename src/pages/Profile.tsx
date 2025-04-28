// import { SetStateAction, useState } from "react";

// function App() {
//   const applications = [
//     {
//       id: 1,
//       name: "Lighting",
//       icon: (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="h-10 w-10 mx-auto"
//           viewBox="0 0 24 24"
//           fill="none"
//           stroke="currentColor"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             d="M12 2a7 7 0 00-7 7c0 3.25 2.34 6.06 5.6 6.71V17h2.8v-1.29C16.66 15.06 19 12.25 19 9a7 7 0 00-7-7z"
//           />
//           <rect x="9" y="18" width="6" height="2" rx="1" fill="currentColor" />
//           <line x1="10" y1="21" x2="14" y2="21" strokeWidth="2" stroke="currentColor" strokeLinecap="round" />
//         </svg>
//       ),
//     },
//     {
//       id: 2,
//       name: "Refrigerator",
//       icon: (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="h-10 w-10 mx-auto"
//           viewBox="0 0 24 24"
//           fill="none"
//           stroke="currentColor"
//         >
//           <rect x="6" y="3" width="12" height="18" rx="2" strokeWidth="2" stroke="currentColor" />
//           <line x1="6" y1="10" x2="18" y2="10" strokeWidth="2" stroke="currentColor" />
//           <circle cx="9" cy="7" r="0.5" fill="currentColor" />
//           <circle cx="9" cy="16" r="0.5" fill="currentColor" />
//         </svg>
//       ),
//     },
//     {
//       id: 3,
//       name: "Air Conditioner",
//       icon: (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 24 24"
//           className="h-10 w-10 mx-auto"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="2"
//         >
//           <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2" />
//           <line x1="12" y1="2" x2="12" y2="7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
//           <line x1="12" y1="17" x2="12" y2="22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
//           <line x1="2" y1="12" x2="7" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
//           <line x1="17" y1="12" x2="22" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
//           <line x1="4.93" y1="4.93" x2="7.76" y2="7.76" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
//           <line x1="16.24" y1="16.24" x2="19.07" y2="19.07" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
//           <line x1="4.93" y1="19.07" x2="7.76" y2="16.24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
//           <line x1="16.24" y1="7.76" x2="19.07" y2="4.93" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
//         </svg>
//       ),
//     },
//     {
//       id: 4,
//       name: "Door",
//       icon: (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 24 24"
//           className="h-10 w-10 mx-auto"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="2"
//         >
//           <path
//             d="M6 21h12a2 2 0 002-2V5a2 2 0 00-2-2H6a2 2 0 00-2 2v14a2 2 0 002 2z"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           />
//           <circle cx="16" cy="12" r="0.5" fill="currentColor" />
//         </svg>
//       ),
//     },
//   ];
  // const FanControl = () => {
  //   const [isOn, setIsOn] = useState(false);
  //   const [speed, setSpeed] = useState(1);
  
  //   const toggleFan = () => {
  //     setIsOn(!isOn);
  //     if (!isOn) setSpeed(1);
  //   };
  
  //   const handleSpeedChange = (speedValue: SetStateAction<number>) => setSpeed(speedValue);
  
  //   return (
  //     <div
  //       className="bg-white dark:bg-boxdark p-6 rounded-lg shadow-lg border-2 border-gray-200 mt-6 cursor-pointer"
  //       onClick={toggleFan}
  //     >
  //       <h2 className="text-xl font-bold mb-4 text-center">Fan Control</h2>
  //       <div className="relative flex justify-center items-center mb-6">
  //         {/* Toggle Switch */}
  //         <label
  //           className="relative inline-flex items-center cursor-pointer"
  //           onClick={(e) => e.stopPropagation()} // Prevent parent toggle
  //         >
  //           <input
  //             type="checkbox"
  //             checked={isOn}
  //             onChange={toggleFan}
  //             className="sr-only peer"
  //           />
  //           <div className="w-14 h-8 bg-gray-200 rounded-full peer-checked:bg-green-500 transition-all duration-300"></div>
  //           <div className="absolute w-6 h-6 bg-gray-600 rounded-full border transform peer-checked:translate-x-6 transition-all duration-300"></div>
  //         </label>
  //       </div>
  //       {isOn && (
  //         <div className="relative flex items-center justify-center">
  //           <div className="w-32 h-32 rounded-full border-4 border-gray-300 flex items-center justify-center">
  //             {[1, 2, 3, 4, 5].map((value) => (
  //               <button
  //                 key={value}
  //                 className={`absolute w-6 h-6 rounded-full ${
  //                   value <= speed ? "bg-blue-500" : "bg-gray-300"
  //                 }`}
  //                 style={{
  //                   transform: `rotate(${(value - 1) * 72}deg) translate(120%) rotate(-${(value - 1) * 72}deg)`,
  //                 }}
  //                 onClick={(e) => {
  //                   e.stopPropagation(); // Prevent parent toggle
  //                   handleSpeedChange(value);
  //                 }}
  //               ></button>
  //             ))}
  //           </div>
  //         </div>
  //       )}
  //     </div>
  //   );
  // };
//   const ApplicationCard = ({ name, icon }) => {
//     const [isActive, setIsActive] = useState(false);
  
//     return (
//       <div
//         className={`p-6 rounded-lg shadow-lg border-2 transition-transform cursor-pointer ${
//           isActive ? "scale-105 shadow-xl border-green-500" : "border-gray-200"
//         }`}
//         onClick={() => setIsActive(!isActive)}
//       >
//         <h3 className="text-lg font-bold mb-2 text-center">{name}</h3>
//         <div className="mb-4 flex justify-center">{icon}</div>
//         {/* Centered Toggle */}
//         <div className="flex justify-center">
//           <label
//             className="relative inline-flex items-center cursor-pointer"
//             onClick={(e) => e.stopPropagation()} // Prevent triggering card click
//           >
//             <input
//               type="checkbox"
//               checked={isActive}
//               onChange={() => setIsActive(!isActive)}
//               className="sr-only peer"
//             />
//             <div className="w-14 h-8 bg-gray-200 rounded-full peer-checked:bg-green-500 transition-all duration-300"></div>
//             <div className="absolute w-6 h-6 bg-gray-600 rounded-full border transform peer-checked:translate-x-6 transition-all duration-300"></div>
//           </label>
//         </div>
//       </div>
//     );
//   };
//   return (
//     <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-boxdark">
//     <div className="flex-grow flex flex-col justify-center items-center p-0 m-0 w-full">
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
//         {applications.map((app) => (
//           <ApplicationCard key={app.id} name={app.name} icon={app.icon} />
//         ))}
//       </div>
//       <FanControl />
//     </div>
//   </div>
// );
// }

// export default App;
'use client'

import React, { useState } from "react";

const applications = [
  {
    id: 1,
    name: "Lighting",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-16 w-16 mx-auto"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 2a7 7 0 00-7 7c0 3.25 2.34 6.06 5.6 6.71V17h2.8v-1.29C16.66 15.06 19 12.25 19 9a7 7 0 00-7-7z"
        />
        <rect x="9" y="18" width="6" height="2" rx="1" fill="currentColor" />
        <line
          x1="10"
          y1="21"
          x2="14"
          y2="21"
          strokeWidth="2"
          stroke="currentColor"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    id: 2,
    name: "Refrigerator",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-16 w-16 mx-auto"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
      >
        <rect
          x="6"
          y="3"
          width="12"
          height="18"
          rx="2"
          strokeWidth="2"
          stroke="currentColor"
        />
        <line
          x1="6"
          y1="10"
          x2="18"
          y2="10"
          strokeWidth="2"
          stroke="currentColor"
        />
        <circle cx="9" cy="7" r="0.5" fill="currentColor" />
        <circle cx="9" cy="16" r="0.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: 3,
    name: "Air Conditioner",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="h-16 w-16 mx-auto"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2" />
        <line
          x1="12"
          y1="2"
          x2="12"
          y2="7"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="12"
          y1="17"
          x2="12"
          y2="22"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    id: 4,
    name: "Door",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="h-16 w-16 mx-auto"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          d="M6 21h12a2 2 0 002-2V5a2 2 0 00-2-2H6a2 2 0 00-2 2v14a2 2 0 002 2z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="16" cy="12" r="0.5" fill="currentColor" />
      </svg>
    ),
  },
];

const AppControl = ({ app, isOn, onToggle }) => {
  return (
    <div
      className={`cursor-pointer transition-all duration-300 p-4 rounded-lg shadow h-full flex flex-col items-center justify-center text-center ${
        isOn ? "bg-green-500 text-white" : "bg-gray-100 hover:bg-gray-200"
      }`}
      onClick={onToggle}
    >
      <div className="mb-4">{app.icon}</div>
      <div className="text-2xl font-bold">{app.name}</div>
    </div>
  );
};

const FanControl = ({ isFanOn, toggleFan }) => {
  const [speed, setSpeed] = useState(0);

  return (
    <div className="p-8 bg-gray rounded-3xl shadow-lg w-full max-w-lg mx-auto">
      <h2 className="text-4xl font-bold mb-6 text-center text-gray-800">Fan Control</h2>
      <div
        className={`cursor-pointer p-6 rounded-lg mb-6 text-center text-xl font-medium transition-all duration-300 transform hover:scale-105 ${
          isFanOn
            ? "bg-green-500 hover:bg-green-600 text-white"
            : "bg-red-400 hover:bg-red-500 text-white"
        }`}
        onClick={toggleFan}
      >
        {isFanOn ? "Turn Fan Off" : "Turn Fan On"}
      </div>
      
      {isFanOn ? (
        <>
          <div className="text-2xl mb-6 text-center text-gray-800">Speed: {speed}</div>
          <div className="flex justify-center gap-6">
            {[0, 1, 2, 3].map((value) => (
              <button
                key={value}
                className={`px-8 py-3 rounded-full text-xl font-semibold transition-all duration-300 transform ${
                  value === speed
                    ? "bg-yellow-500 text-gray-800 scale-110"
                    : "bg-gray-300 text-gray-700 hover:bg-gray-400"
                }`}
                onClick={() => setSpeed(value)}
              >
                {value}
              </button>
            ))}
          </div>
        </>
      ) : (
        <div className="text-xl text-center text-gray-400 opacity-70">Fan is Off</div>
      )}
    </div>
  );
};

export default function SmartHomeControl() {
  const [appStates, setAppStates] = useState(
    applications.reduce((acc, app) => ({ ...acc, [app.id]: false }), {})
  );
  const [isFanOn, setIsFanOn] = useState(false);

  const toggleApp = (id) => {
    setAppStates((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleFan = () => {
    setIsFanOn((prev) => !prev);
  };

  return (
    <div className="flex flex-col h-screen p-4 bg-black">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-1/2 mb-4">
        {applications.map((app) => (
          <AppControl
            key={app.id}
            app={app}
            isOn={appStates[app.id]}
            onToggle={() => toggleApp(app.id)}
          />
        ))}
      </div>
      <div className="flex-grow flex items-center justify-center h-1/2">
        <FanControl isFanOn={isFanOn} toggleFan={toggleFan} />
      </div>
    </div>
  );
}
