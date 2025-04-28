// import { useEffect} from 'react';
// import { Route, Routes, useLocation } from 'react-router-dom';
// import Chart from './pages/Chart';
// import Profile from './pages/Profile';
// import Calendar from './pages/Calendar';
// import Music from './pages/Music'
// import WheelchairControl from './pages/WheelChair';
// import AnalyticsPage from './pages/AnalyticsPage';

// function App() {
//   const { pathname } = useLocation();

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [pathname]);

//   return (
//       <Routes>
        
//         <Route
//           path="/home-automation"
//           element={
//             <>
//               <Profile />
//             </>
//           }
//         />
//         <Route
//           path="/"
//           element={
//             <>
//               <Chart />
//             </>
//           }
//         />
//         <Route
//           path="/cale"
//           element={
//             <>
//               <Calendar/>
//             </>
//           }
//         />
//         <Route
//           path="/music"
//           element={
//             <>
//               <Music/>
//             </>
//           }
//         />
//         <Route
//           path="/wheelchair"
//           element={
//             <>
//               <WheelchairControl/>
//             </>
//           }
//         />
//         <Route
//           path="/health-care"
//           element={
//             <>
//               <AnalyticsPage/>
//             </>
//           }
//         />
//       </Routes>
//   );
// }

// export default App;
import { useEffect, useState } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Chart from './pages/Chart';
import Profile from './pages/Profile';
import Calendar from './pages/Calendar';
import Music from './pages/Music';
import WheelchairControl from './pages/WheelChair';
import AnalyticsPage from './pages/AnalyticsPage';
import Games from './pages/Games';
import SkillDev from './pages/SkillDev';
import Photos from './pages/Photos';
import News from './pages/News';
import TVShowsPage from './pages/TvShows';

function App() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [navigatedBack, setNavigatedBack] = useState(false);
  const [recognition, setRecognition] = useState<SpeechRecognition | null>(null); // State to hold recognition instance

  useEffect(() => {
    window.scrollTo(0, 0);
    setNavigatedBack(false); // Reset when the pathname changes
  }, [pathname]);

  // Speech Recognition setup
  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (SpeechRecognition && pathname !== '/') {
      const newRecognition = new SpeechRecognition();
      newRecognition.continuous = false; // Stop after one result
      newRecognition.interimResults = false; // No interim results
      setRecognition(newRecognition); // Store recognition instance

      newRecognition.onresult = (event) => {
        const spokenText = event.results[0][0].transcript.toLowerCase();
        console.log('You said:', spokenText);

        // Check for commands to navigate
        if (!navigatedBack && (spokenText.includes('back') || spokenText.includes('go back'))) {
          console.log('Navigating to home');
          navigate('/'); // Navigate to the home page
          setNavigatedBack(true); // Set state to prevent further actions
        }
      };

      newRecognition.onend = () => {
        // Use a timeout to avoid immediate restart, allowing some breathing room
        setTimeout(() => {
          if (!navigatedBack) {
            newRecognition.start(); // Restart recognition after it ends if not navigated back
          }
        }, 500); // Adjust the timeout as needed
      };

      newRecognition.start(); // Start listening

      return () => {
        newRecognition.stop(); // Stop listening on component unmount
      };
    }
  }, [pathname, navigate, navigatedBack]);

  return (
    <Routes>
      <Route
        path="/home-automation"
        element={<Profile />}
      />
      <Route
        path="/"
        element={<Chart />}
      />
      <Route
        path="/cale"
        element={<Calendar />}
      />
      <Route
        path="/music"
        element={<Music />}
      />
      <Route
        path="/wheelchair"
        element={<WheelchairControl />}
      />
      <Route
        path="/health-care"
        element={<AnalyticsPage />}
      />
      <Route
        path="/games"
        element={<Games />}
      />
      <Route
        path="/skill"
        element={<SkillDev />}
      />
      <Route
        path="/photos"
        element={<Photos />}
      />
      <Route
        path="/news"
        element={<News />}
      />
      <Route
        path="/shows"
        element={<TVShowsPage />}
      />
    </Routes>
  );
}

export default App;
// import { useEffect, useState } from 'react';
// import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
// import Chart from './pages/Chart';
// import Profile from './pages/Profile';
// import Calendar from './pages/Calendar';
// import Music from './pages/Music';
// import WheelchairControl from './pages/WheelChair';
// import AnalyticsPage from './pages/AnalyticsPage';

// function App() {
//   const { pathname } = useLocation();
//   const navigate = useNavigate();
//   const [navigatedBack, setNavigatedBack] = useState(false);
//   const [recognition, setRecognition] = useState<SpeechRecognition | null>(null); // State to hold recognition instance

//   useEffect(() => {
//     window.scrollTo(0, 0);
//     setNavigatedBack(false); // Reset when the pathname changes
//   }, [pathname]);

//   // Speech Recognition setup
//   useEffect(() => {
//     const SpeechRecognition = window.SpeechRecognition || (window as any).webkitSpeechRecognition;
//     if (SpeechRecognition && pathname !== '/') {
//       const newRecognition = new SpeechRecognition();
//       newRecognition.continuous = false; // Stop after one result
//       newRecognition.interimResults = false; // No interim results
//       setRecognition(newRecognition); // Store recognition instance

//       newRecognition.onresult = (event) => {
//         const spokenText = event.results[0][0].transcript.toLowerCase();
//         console.log('You said:', spokenText);

//         // Check for commands to navigate
//         if (!navigatedBack && (spokenText.includes('back') || spokenText.includes('go back') || spokenText.includes('home'))) {
//           console.log('Navigating to home');
//           navigate('/'); // Navigate to the home page
//           setNavigatedBack(true); // Set state to prevent further actions
//         }
//       };

//       newRecognition.onend = () => {
//         // Use a timeout to avoid immediate restart, allowing some breathing room
//         setTimeout(() => {
//           if (!navigatedBack) {
//             newRecognition.start(); // Restart recognition after it ends if not navigated back
//           }
//         }, 500); // Adjust the timeout as needed
//       };

//       newRecognition.start(); // Start listening

//       return () => {
//         newRecognition.stop(); // Stop listening on component unmount
//       };
//     }
//   }, [pathname, navigate, navigatedBack]);

//   return (
//     <Routes>
//       <Route
//         path="/home-automation"
//         element={<Profile />}
//       />
//       <Route
//         path="/"
//         element={<Chart />}
//       />
//       <Route
//         path="/cale"
//         element={<Calendar />}
//       />
//       <Route
//         path="/music"
//         element={<Music />}
//       />
//       <Route
//         path="/wheelchair"
//         element={<WheelchairControl />}
//       />
//       <Route
//         path="/health-care"
//         element={<AnalyticsPage />}
//       />
//     </Routes>
//   );
// }

// export default App;
