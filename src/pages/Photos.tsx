// import React from "react";

// const Gallery: React.FC = () => {
//   // Array of image paths
//   const images = [
//     "./images/muthukumar.jpeg",
//     "./images/amaran.jpeg",
//     "./images/sharukh-90.jpeg",
//     "./images/sharukhan.jpeg",
//     "./images/90s-image.jpeg",
//   ];

//   return (
//     <div className="min-h-screen bg-black text-white flex flex-col items-center py-10">
//       <h1 className="text-4xl font-bold mb-8">Gallery</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 w-full max-w-7xl">
//         {images.map((image, index) => (
//           <div
//             key={index}
//             className="relative overflow-hidden rounded-lg shadow-lg group"
//           >
//             <img
//               src={image}
//               alt={`Gallery Image ${index + 1}`}
//               className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-110"
//             />
//             <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//               <span className="text-white text-lg font-semibold">
//                 Image {index + 1}
//               </span>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Gallery;
// import React, { useState } from "react";

// const Gallery: React.FC = () => {
//   // Array of image paths
//   const images = [
//     "./images/image1.jpg",
//     "./images/image2.jpg",
//     "./images/image3.jpg",
//     "./images/image4.jpg",
//     "./images/image5.jpg",
//     "./images/image6.jpg",
//     "./images/image7.jpg",
//     "./images/image8.jpg",
//     "./images/image9.jpg",    
//   ];

//   // State for modal
//   const [currentImageIndex, setCurrentImageIndex] = useState<number | null>(null);

//   // Function to close the modal
//   const closeModal = () => setCurrentImageIndex(null);

//   // Navigate to previous image
//   const prevImage = () => {
//     if (currentImageIndex !== null) {
//       setCurrentImageIndex((currentImageIndex - 1 + images.length) % images.length);
//     }
//   };

//   // Navigate to next image
//   const nextImage = () => {
//     if (currentImageIndex !== null) {
//       setCurrentImageIndex((currentImageIndex + 1) % images.length);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-black text-white flex flex-col items-center py-10">
//       <h1 className="text-4xl font-bold mb-8">Gallery</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 w-full max-w-7xl">
//         {images.map((image, index) => (
//           <div
//             key={index}
//             className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-105"
//             onClick={() => setCurrentImageIndex(index)} // Open modal on click
//           >
//             <img
//               src={image}
//               alt={`Gallery Image ${index + 1}`}
//               className="w-full h-56 object-cover"
//             />
//           </div>
//         ))}
//       </div>

//       {/* Modal for large image */}
//       {currentImageIndex !== null && (
//         <div className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-50">
//           <button
//             className="absolute top-5 right-5 text-white text-2xl bg-red-500 px-4 py-2 rounded-lg"
//             onClick={closeModal}
//           >
//             Close
//           </button>
//           <div className="relative w-full max-w-4xl">
//             <img
//               src={images[currentImageIndex]}
//               alt={`Gallery Image ${currentImageIndex + 1}`}
//               className="w-full h-auto max-h-screen object-contain"
//             />
//             <button
//               className="absolute left-5 top-1/2 transform -translate-y-1/2 text-white text-2xl bg-gray-700 px-4 py-2 rounded-full"
//               onClick={prevImage}
//             >
//               &#8249; {/* Left arrow */}
//             </button>
//             <button
//               className="absolute right-5 top-1/2 transform -translate-y-1/2 text-white text-2xl bg-gray-700 px-4 py-2 rounded-full"
//               onClick={nextImage}
//             >
//               &#8250; {/* Right arrow */}
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Gallery;
import React, { useState } from "react";

const Gallery: React.FC = () => {
  // Array of image paths
  const images = [
    "./images/image1.jpg",
    "./images/image2.jpg",
    "./images/image3.jpg",
    "./images/image4.jpg",
    "./images/image5.jpg",
    "./images/image6.jpg",
    "./images/image7.jpg",
    "./images/image8.jpg",
    "./images/image9.jpg",
  ];

  // Array of video paths (assumes videos are in the public/videos folder)
  const videos = [
    "/videos/video1.mp4",
    "/videos/video2.mp4",
    "/videos/video3.mp4",
    // Add more video paths here
  ];

  // State for modal
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const [isPhotoView, setIsPhotoView] = useState(true); // Toggle state for photos/videos

  // Function to close the modal
  const closeModal = () => setCurrentIndex(null);

  // Navigate to previous item
  const prevItem = () => {
    if (currentIndex !== null) {
      setCurrentIndex((currentIndex - 1 + (isPhotoView ? images.length : videos.length)) % (isPhotoView ? images.length : videos.length));
    }
  };

  // Navigate to next item
  const nextItem = () => {
    if (currentIndex !== null) {
      setCurrentIndex((currentIndex + 1) % (isPhotoView ? images.length : videos.length));
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center py-10">
      <h1 className="text-4xl font-bold mb-8">Gallery</h1>

      {/* Toggle switch for photos and videos */}
      <div className="mb-6">
        <button
          className={`px-4 py-2 rounded-l-lg ${isPhotoView ? "bg-gray-600 text-white" : "bg-gray-300 text-black"}`}
          onClick={() => setIsPhotoView(true)}
        >
          Photos
        </button>
        <button
          className={`px-4 py-2 rounded-r-lg ${!isPhotoView ? "bg-gray-600 text-white" : "bg-gray-300 text-black"}`}
          onClick={() => setIsPhotoView(false)}
        >
          Videos
        </button>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 w-full max-w-7xl">
        {(isPhotoView ? images : videos).map((item, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-105"
            onClick={() => setCurrentIndex(index)} // Open modal on click
          >
            {isPhotoView ? (
              <img
                src={item}
                alt={`Gallery Image ${index + 1}`}
                className="w-full h-56 object-cover"
              />
            ) : (
              <video
                src={item}
                className="w-full h-56 object-cover"
                controls
                muted
              />
            )}
          </div>
        ))}
      </div>

      {/* Modal for large image or video */}
      {currentIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-50">
          <button
            className="absolute top-5 right-5 text-white text-2xl bg-red-500 px-4 py-2 rounded-lg"
            onClick={closeModal}
          >
            Close
          </button>
          <div className="relative w-full max-w-4xl">
            {isPhotoView ? (
              <img
                src={images[currentIndex]}
                alt={`Gallery Image ${currentIndex + 1}`}
                className="w-full h-auto max-h-screen object-contain"
              />
            ) : (
              <video
                src={videos[currentIndex]}
                className="w-full h-auto max-h-screen"
                controls
                autoPlay
                muted
              />
            )}
            <button
              className="absolute left-5 top-1/2 transform -translate-y-1/2 text-white text-2xl bg-gray-700 px-4 py-2 rounded-full"
              onClick={prevItem}
            >
              &#8249; {/* Left arrow */}
            </button>
            <button
              className="absolute right-5 top-1/2 transform -translate-y-1/2 text-white text-2xl bg-gray-700 px-4 py-2 rounded-full"
              onClick={nextItem}
            >
              &#8250; {/* Right arrow */}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
