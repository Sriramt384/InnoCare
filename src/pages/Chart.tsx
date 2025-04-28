// import { useState, useEffect, useRef } from 'react';
// import { useNavigate } from 'react-router-dom';
// import {
//   Music,
//   Gamepad2,
//   Youtube,
//   Radio,
//   Newspaper,
//   Image,
//   Calendar,
//   HeartPulse,
//   BriefcaseMedical,
//   Accessibility,
//   HousePlug,
//   BrainCircuit,
// } from 'lucide-react';

// const apps = [
//   { name: 'Wheelchair Control', icon: Accessibility, color: '#800080', route: '/wheelchair' },
//   { name: 'Skill Development', icon: BrainCircuit, color: '#FF5722', route: '/skill' },
//   { name: 'Spotify', icon: Music, color: '#1DB954', route: '/music' },
//   { name: 'Health Care', icon: HeartPulse, color: '#008080', route: '/health-care' },
//   { name: 'Home Automation', icon: HousePlug, color: '#3F51B5', route: '/home-automation' },
//   { name: 'Telemedicine', icon: BriefcaseMedical, color: '#FF9800', route: '/telemedicine' },
//   { name: 'Games', icon: Gamepad2, color: '#FF5722', route: '/games' },
//   { name: 'YouTube', icon: Youtube, color: '#FF0000', route: '/youtube' },
//   { name: 'FM/Radio', icon: Radio, color: '#FFC300', route: '/fm-radio' },
//   { name: 'News', icon: Newspaper, color: '#0078D7', route: '/news' },
//   { name: 'Photos', icon: Image, color: '#6A0DAD', route: '/photos' },
//   { name: 'Calendar', icon: Calendar, color: '#FF69B4', route: '/calendar' },
// ];

// export default function CarPlayInterface() {
//   const [currentTime, setCurrentTime] = useState(new Date());
//   const [currentPage, setCurrentPage] = useState(0);
//   const containerRef = useRef<HTMLDivElement>(null);
//   const navigate = useNavigate();
//   const appsPerPage = 6;
//   const totalPages = Math.ceil(apps.length / appsPerPage);

//   // Double-tap state
//   const [lastTapTime, setLastTapTime] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentTime(new Date());
//     }, 60000);
//     return () => clearInterval(timer);
//   }, []);

//   useEffect(() => {
//     const container = containerRef.current;
//     if (!container) return;

//     const handleScroll = () => {
//       const scrollLeft = container.scrollLeft;
//       const pageWidth = container.clientWidth;
//       const newPage = Math.round(scrollLeft / pageWidth);
//       setCurrentPage(newPage);
//     };

//     container.addEventListener('scroll', handleScroll);
//     return () => {
//       container.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   const goToPage = (page: number) => {
//     const container = containerRef.current;
//     if (container) {
//       container.scrollTo({
//         left: page * container.clientWidth,
//         behavior: 'smooth',
//       });
//     }
//   };

//   const speak = (text: string | undefined) => {
//     const synth = window.speechSynthesis;
//     const utterance = new SpeechSynthesisUtterance(text);
//     synth.speak(utterance);
//   };

//   const handleButtonClick = (app: { name?: string; route: any }) => {
//     const now = Date.now();
//     if (now - lastTapTime < 300) {
//       // If the second tap is within 300ms, navigate to the app's route
//       navigate(app.route);
//     } else {
//       // Speak the app name on a single tap
//       speak(app.name);
//     }
//     setLastTapTime(now);
//   };

//   return (
//     <div
//       style={{
//         backgroundColor: 'black',
//         color: 'white',
//         width: '100%',
//         height: '100vh',
//         display: 'flex',
//         flexDirection: 'column',
//       }}
//     >
//       <div
//         style={{
//           padding: '1rem',
//           backgroundColor: '#1a1a1a',
//           display: 'flex',
//           justifyContent: 'space-between',
//           alignItems: 'center',
//         }}
//       >
//         <span
//           style={{
//             fontSize: '2rem',
//             fontWeight: '900',
//             color: 'white',
//             textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
//             letterSpacing: '0.1rem',
//             textTransform: 'uppercase',
//           }}
//         >
//           InnoCare
//         </span>
//         <span style={{ fontSize: '1.5rem' }}>
//           {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
//         </span>
//       </div>
  
//       {/* Apps Container */}
//       <div
//         ref={containerRef}
//         style={{
//           flexGrow: 1,
//           overflowX: 'auto',
//           display: 'flex',
//           scrollSnapType: 'x mandatory',
//           msOverflowStyle: 'none',
//           scrollbarWidth: 'none',
//         }}
//       >
//         <div style={{ display: 'flex', height: '100%' }}>
//           {Array.from({ length: totalPages }).map((_, pageIndex) => (
//             <div
//               key={pageIndex}
//               style={{
//                 flexShrink: 0,
//                 width: '100%',
//                 scrollSnapAlign: 'start',
//                 display: 'grid',
//                 gridTemplateColumns: 'repeat(3, 1fr)',
//                 gridTemplateRows: 'repeat(2, 1fr)',
//                 gap: '1.5rem',
//                 padding: '1.5rem',
//                 height: '100%',
//               }}
//             >
//               {apps.slice(pageIndex * appsPerPage, (pageIndex + 1) * appsPerPage).map((app) => (
//                 <button
//                   key={app.name}
//                   style={{
//                     display: 'flex',
//                     flexDirection: 'column',
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                     height: '100%',
//                     backgroundColor: app.color,
//                     borderRadius: '1rem',
//                     transition: 'background-color 0.3s',
//                   }}
//                   onClick={() => handleButtonClick(app)}
//                 >
//                   <app.icon
//                     style={{ width: '60%', height: '60%' }}
//                     aria-hidden="true"
//                   />
//                   <span
//                     style={{
//                       color: 'white',
//                       fontSize: '2rem',
//                       marginTop: '0.5rem',
//                       textAlign: 'center',
//                       textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
//                       height: '1cm',
//                     }}
//                   >
//                     {app.name}
//                   </span>
//                 </button>
//               ))}
//             </div>
//           ))}
//         </div>
//       </div>
  
//       <div
//         style={{
//           padding: '1rem',
//           backgroundColor: '#1a1a1a',
//           display: 'flex',
//           justifyContent: 'center',
//           alignItems: 'center',
//         }}
//       >
//         <div style={{ display: 'flex', gap: '1rem' }}>
//           {Array.from({ length: totalPages }).map((_, index) => (
//             <button
//               key={index}
//               style={{
//                 width: '1rem',
//                 height: '1rem',
//                 borderRadius: '50%',
//                 backgroundColor: index === currentPage ? 'white' : '#555',
//                 transform: index === currentPage ? 'scale(1.25)' : 'scale(1)',
//                 transition: 'all 0.3s',
//               }}
//               onClick={() => goToPage(index)}
//               aria-label={`Go to page ${index + 1}`}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
// import { useState, useEffect, useRef } from 'react';
// import { useNavigate } from 'react-router-dom';
// import {
//   Music,
//   Gamepad2,
//   Youtube,
//   Radio,
//   Newspaper,
//   Image,
//   Calendar,
//   HeartPulse,
//   BriefcaseMedical,
//   Accessibility,
//   HousePlug,
//   BrainCircuit,
// } from 'lucide-react';

// // Define the apps array with their details and possibilities
// const apps = [
//   { name: 'Wheelchair Control', icon: Accessibility, color: '#800080', route: '/wheelchair', possibilities: ['wheelchair control', 'wheelchair', 'control'] },
//   { name: 'Skill Development', icon: BrainCircuit, color: '#FF5722', route: '/skill', possibilities: ['skill development', 'skill', 'development'] },
//   { name: 'Spotify', icon: Music, color: '#1DB954', route: '/music', possibilities: ['spotify','spot'] },
//   { name: 'Health Care', icon: HeartPulse, color: '#008080', route: '/health-care', possibilities: ['health care', 'health', 'care'] },
//   { name: 'Home Automation', icon: HousePlug, color: '#3F51B5', route: '/home-automation', possibilities: ['home automation', 'home', 'automation'] },
//   { name: 'Telemedicine', icon: BriefcaseMedical, color: '#FF9800', route: '/telemedicine', possibilities: ['telemedicine', 'tele med', 'telemed'] },
//   { name: 'Games', icon: Gamepad2, color: '#FF5722', route: '/games', possibilities: ['games'] },
//   { name: 'YouTube', icon: Youtube, color: '#FF0000', route: '/youtube', possibilities: ['youtube'] },
  // { name: 'FM/Radio', icon: Radio, color: '#FFC300', route: '/fm-radio', possibilities: ['fm', 'radio'] },
//   { name: 'News', icon: Newspaper, color: '#0078D7', route: '/news', possibilities: ['news'] },
//   { name: 'Photos', icon: Image, color: '#6A0DAD', route: '/photos', possibilities: ['photos', 'pictures'] },
//   { name: 'Calendar', icon: Calendar, color: '#FF69B4', route: '/calendar', possibilities: ['calendar'] },
// ];

// export default function CarPlayInterface() {
//   const [currentTime, setCurrentTime] = useState(new Date());
//   const [currentPage, setCurrentPage] = useState(0);
//   const containerRef = useRef<HTMLDivElement>(null);
//   const navigate = useNavigate();
//   const appsPerPage = 6;
//   const totalPages = Math.ceil(apps.length / appsPerPage);

//   // Double-tap state
//   const [lastTapTime, setLastTapTime] = useState(0);

//   // Speech Recognition setup
//   const [recognition, setRecognition] = useState<SpeechRecognition | null>(null);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentTime(new Date());
//     }, 60000);
//     return () => clearInterval(timer);
//   }, []);

//   useEffect(() => {
//     const container = containerRef.current;
//     if (!container) return;

//     const handleScroll = () => {
//       const scrollLeft = container.scrollLeft;
//       const pageWidth = container.clientWidth;
//       const newPage = Math.round(scrollLeft / pageWidth);
//       setCurrentPage(newPage);
//     };

//     container.addEventListener('scroll', handleScroll);
//     return () => {
//       container.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   const goToPage = (page: number) => {
//     const container = containerRef.current;
//     if (container) {
//       container.scrollTo({
//         left: page * container.clientWidth,
//         behavior: 'smooth',
//       });
//     }
//   };

//   const speak = (text: string | undefined) => {
//     const synth = window.speechSynthesis;
//     const utterance = new SpeechSynthesisUtterance(text);
//     synth.speak(utterance);
//   };

//   const handleButtonClick = (app: { name?: string; route: any }) => {
//     const now = Date.now();
//     if (now - lastTapTime < 300) {
//       // If the second tap is within 300ms, navigate to the app's route
//       navigate(app.route);
//     } else {
//       // Speak the app name on a single tap
//       speak(app.name);
//     }
//     setLastTapTime(now);
//   };

//   // Initialize Speech Recognition
//   useEffect(() => {
//     const SpeechRecognition = window.SpeechRecognition || (window as any).webkitSpeechRecognition;
//     if (SpeechRecognition) {
//       const recognitionInstance = new SpeechRecognition();
//       recognitionInstance.continuous = false; // Stop after one result
//       recognitionInstance.interimResults = false; // No interim results

//       recognitionInstance.onstart = () => {
//         speak('Listening');
//       };

//       recognitionInstance.onresult = (event) => {
//         const spokenText = event.results[0][0].transcript.toLowerCase();
//         console.log('You said:', spokenText);
        
//         // Check if the spoken text matches any app name or its possibilities
//         const matchedApp = apps.find(app => 
//           spokenText.includes(app.name.toLowerCase()) || 
//           app.possibilities.some(possibility => spokenText.includes(possibility.toLowerCase()))
//         );
        
//         if (matchedApp) {
//           navigate(matchedApp.route);
//           speak(`Navigating to ${matchedApp.name}`);
//         } else {
//           speak('Sorry, I did not recognize that application.');
//         }
//       };

//       recognitionInstance.onend = () => {
//         speak('Stopped listening');
//       };

//       setRecognition(recognitionInstance);
//     }
//   }, []);

//   const startListening = () => {
//     if (recognition) {
//       recognition.start();
//     }
//   };

//   // Keyboard event to start listening with "V"
//   useEffect(() => {
//     const handleKeyDown = (event: KeyboardEvent) => {
//       if (event.key === 'v' || event.key === 'V') {
//         startListening();
//       }
//     };

//     window.addEventListener('keydown', handleKeyDown);
//     return () => {
//       window.removeEventListener('keydown', handleKeyDown);
//     };
//   }, [recognition]);

//   return (
//     <div
//       style={{
//         backgroundColor: 'black',
//         color: 'white',
//         width: '100%',
//         height: '100vh',
//         display: 'flex',
//         flexDirection: 'column',
//       }}
//     >
//       <div
//         style={{
//           padding: '1rem',
//           backgroundColor: '#1a1a1a',
//           display: 'flex',
//           justifyContent: 'space-between',
//           alignItems: 'center',
//         }}
//       >
//         <span
//           style={{
//             fontSize: '2rem',
//             fontWeight: '900',
//             color: 'white',
//             textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
//             letterSpacing: '0.1rem',
//             textTransform: 'uppercase',
//           }}
//         >
//           InnoCare
//         </span>
//         <span style={{ fontSize: '1.5rem' }}>
//           {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
//         </span>
//       </div>
  
//       {/* Apps Container */}
//       <div
//         ref={containerRef}
//         style={{
//           flexGrow: 1,
//           overflowX: 'auto',
//           display: 'flex',
//           scrollSnapType: 'x mandatory',
//           msOverflowStyle: 'none',
//           scrollbarWidth: 'none',
//         }}
//       >
//         <div style={{ display: 'flex', height: '100%' }}>
//           {Array.from({ length: totalPages }).map((_, pageIndex) => (
//             <div
//               key={pageIndex}
//               style={{
//                 flexShrink: 0,
//                 width: '100%',
//                 scrollSnapAlign: 'start',
//                 display: 'grid',
//                 gridTemplateColumns: 'repeat(3, 1fr)',
//                 gridTemplateRows: 'repeat(2, 1fr)',
//                 gap: '1.5rem',
//                 padding: '1.5rem',
//                 height: '100%',
//               }}
//             >
//               {apps.slice(pageIndex * appsPerPage, (pageIndex + 1) * appsPerPage).map((app) => (
//                 <button
//                   key={app.name}
//                   style={{
//                     display: 'flex',
//                     flexDirection: 'column',
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                     height: '100%',
//                     backgroundColor: app.color,
//                     borderRadius: '1rem',
//                     transition: 'background-color 0.3s',
//                   }}
//                   onClick={() => handleButtonClick(app)}
//                 >
//                   <app.icon
//                     style={{
//                       width: '50%',
//                       height: '50%',
//                       marginBottom: '1rem',
//                     }}
//                   />
//                   <span
//                     style={{
//                       color: 'white',
//                       textAlign: 'center',
//                       fontWeight: 'bold',
//                       fontSize: '1.5rem',
//                       maxWidth: '80%',
//                       whiteSpace: 'nowrap',
//                       overflow: 'hidden',
//                       textOverflow: 'ellipsis',
//                     }}
//                   >
//                     {app.name}
//                   </span>
//                 </button>
//               ))}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Music,
  Gamepad2,
  Youtube,
  Radio,
  Newspaper,
  Image,
  Calendar,
  HeartPulse,
  BriefcaseMedical,
  Accessibility,
  HousePlug,
  BrainCircuit,
} from 'lucide-react';

// Define the apps array with their details and possibilities
const apps = [
  { name: 'Wheelchair Control', icon: Accessibility, color: '#800080', route: 'http://192.168.153.212', possibilities: ['wheelchair control', 'wheelchair', 'control'] },
  { name: 'Skill Development', icon: BrainCircuit, color: '#FF5722', route: '/skill', possibilities: ['skill development', 'skill', 'development'] },
  { name: 'Spotify', icon: Music, color: '#1DB954', route: '/music', possibilities: ['spotify', 'spot'] },
  { name: 'Health Care', icon: HeartPulse, color: '#008080', route: '/health-care', possibilities: ['health care', 'health', 'care'] },
  { name: 'Home Automation', icon: HousePlug, color: '#3F51B5', route: '/home-automation', possibilities: ['home automation', 'home', 'automation'] },
  { name: 'Telemedicine', icon: BriefcaseMedical, color: '#FF9800', route: 'https://esanjeevani.mohfw.gov.in/#/patient/signin', possibilities: ['telemedicine', 'tele med', 'telemed'] },
  { name: 'Games', icon: Gamepad2, color: '#FF5722', route: '/games', possibilities: ['games'] },
  { name: 'YouTube', icon: Youtube, color: '#FF0000', route: 'http://localhost:3000', possibilities: ['youtube'] },
  { name: 'News', icon: Newspaper, color: '#0078D7', route: '/news', possibilities: ['news'] },
  { name: 'Photos', icon: Image, color: '#6A0DAD', route: '/photos', possibilities: ['photos', 'pictures'] },
  { name: 'Calendar', icon: Calendar, color: '#FF69B4', route: '/cale', possibilities: ['calendar'] },
  { name: 'Tv Shows', icon: Radio, color: '#FFC300', route: '/shows', possibilities: ['tv shows', 'tv' , 'shows'] },
];

export default function CarPlayInterface() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [currentPage, setCurrentPage] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const appsPerPage = 6;
  const totalPages = Math.ceil(apps.length / appsPerPage);

  // Double-tap state
  const [lastTapTime, setLastTapTime] = useState(0);

  // Speech Recognition setup
  const [recognition, setRecognition] = useState<SpeechRecognition | null>(null);
  const [isListening, setIsListening] = useState(false); // To track if listening is active

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  // Initialize Speech Recognition
  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (SpeechRecognition) {
      const recognitionInstance = new SpeechRecognition();
      recognitionInstance.continuous = false; // Stop after one result
      recognitionInstance.interimResults = false; // No interim results

      recognitionInstance.onstart = () => {
        if (isListening) {
          speak('Listening'); // Speak only when activated from "V" or "Inno"
        }
      };

      recognitionInstance.onresult = (event) => {
        const spokenText = event.results[0][0].transcript.toLowerCase();
        console.log('You said:', spokenText);

        // Check if the spoken text matches "Inno"
        if (spokenText.includes('inno')) {
          console.log('Detected the word "Inno"'); // Log when "Inno" is detected
          speak('Listening'); // Speak when "Inno" is detected
        }

        // Check if the spoken text matches any app name or its possibilities
        const matchedApp = apps.find(app => 
          spokenText.includes(app.name.toLowerCase()) || 
          app.possibilities.some(possibility => spokenText.includes(possibility.toLowerCase()))
        );

        if (matchedApp) {
          navigate(matchedApp.route);
          speak(`Navigating to ${matchedApp.name}`);
        } else {
          speak('Sorry, I did not recognize that application.');
        }
      };

      recognitionInstance.onend = () => {
        if (isListening) {
          speak('Stopped listening'); // Optional: You can also announce when it stops
        }
      };

      setRecognition(recognitionInstance);
    }
  }, [isListening]);

  const speak = (text: string | undefined) => {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);
    synth.speak(utterance);
  };

  const handleButtonClick = (app: { name?: string; route: any }) => {
    const now = Date.now();
    if (now - lastTapTime < 300) {
      if (app.route.startsWith('http')) {
        // Navigate to an external application
        window.location.href = app.route;
      } else {
        // Navigate within the current app
        navigate(app.route);
      }
    } else {
      // Speak the app name on a single tap
      speak(app.name);
    }
    setLastTapTime(now);
  };

  const startListening = () => {
    if (recognition) {
      setIsListening(true); // Set listening state to true
      recognition.start(); // Start listening
    }
  };

  // Check for the word "Inno" every 5 seconds
  useEffect(() => {
    const checkForInno = setInterval(() => {
      if (recognition && !isListening) {
        recognition.start(); // Start recognition to listen for "Inno"
      }
    }, 5000);

    return () => clearInterval(checkForInno);
  }, [recognition, isListening]);

  // Keyboard event to start listening with "V"
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'v' || event.key === 'V') {
        startListening(); // Start listening when "V" is pressed
        speak('Listening'); // Speak when "V" is pressed
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [recognition]);

  return (
    <div
      style={{
        backgroundColor: 'black',
        color: 'white',
        width: '100%',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div
        style={{
          padding: '1rem',
          backgroundColor: '#1a1a1a',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <span
          style={{
            fontSize: '2rem',
            fontWeight: '900',
            color: 'white',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
            letterSpacing: '0.1rem',
            textTransform: 'uppercase',
          }}
        >
          InnoCare
        </span>
        <span style={{ fontSize: '1.5rem' }}>
          {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </span>
      </div>
  
      {/* Apps Container */}
      <div
        ref={containerRef}
        style={{
          flexGrow: 1,
          overflowX: 'auto',
          display: 'flex',
          scrollSnapType: 'x mandatory',
          msOverflowStyle: 'none',
          scrollbarWidth: 'none',
        }}
      >
        <div style={{ display: 'flex', height: '100%' }}>
          {Array.from({ length: totalPages }).map((_, pageIndex) => (
            <div
              key={pageIndex}
              style={{
                flexShrink: 0,
                width: '100%',
                scrollSnapAlign: 'start',
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gridTemplateRows: 'repeat(2, 1fr)',
                gap: '1.5rem',
                padding: '1.5rem',
                height: '100%',
              }}
            >
              {apps.slice(pageIndex * appsPerPage, (pageIndex + 1) * appsPerPage).map((app) => (
                <button
                  key={app.name}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100%',
                    backgroundColor: app.color,
                    borderRadius: '1rem',
                    transition: 'background-color 0.3s',
                  }}
                  onClick={() => handleButtonClick(app)}
                >
                  <app.icon
                    style={{
                      width: '50%',
                      height: '50%',
                      marginBottom: '1rem',
                    }}
                  />
                  <span
                    style={{
                      color: 'white',
                      textAlign: 'center',
                      fontWeight: 'bold',
                      fontSize: '1.5rem',
                      maxWidth: '80%',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}
                  >
                    {app.name}
                  </span>
                </button>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

