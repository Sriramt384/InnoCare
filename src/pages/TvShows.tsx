'use client'

import { useState } from 'react'

interface Show {
  title: string
  imagePath: string
  url: string
}

const shows: Show[] = [
  {
    title: "TRS Show",
    imagePath: "./images/trs.jpeg",
    url: "https://youtube.com/playlist?list=PL9uK6jbdzfVfBzNfitRmYaCXCyq9TaY8q&si=YIIVAP9U_MYohz60" // Replace with actual URL
  },
  {
    title: "Maan Ki Baat",
    imagePath: "./images/maanki.jpeg",
    url: "https://pmonradio.nic.in/" // Replace with actual URL
  }
  // Add more shows as needed
]

export default function TVShowsPage() {
  const [message, setMessage] = useState<string>('')

  const handleClick = (showName: string, url: string) => {
    setMessage(`You clicked on ${showName}`)
    setTimeout(() => setMessage(''), 3000) // Clear message after 3 seconds
    window.location.href = url // Open in the same tab
  }

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-6">
      <div className="container mx-auto">
        <h1 className="text-5xl font-extrabold mb-12 text-center text-blue-400">Popular TV Shows</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {shows.map((show) => (
            <div 
              key={show.title}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className="relative w-full h-64">
                <img
                  src={show.imagePath}
                  alt={`${show.title} Cover`}
                  className="w-full h-full object-cover rounded-t-lg transition-transform duration-500 hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-4">{show.title}</h2>
                <button
                  onClick={() => handleClick(show.title, show.url)}
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  aria-label={`View official page of ${show.title}`}
                >
                  View Official Page
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {message && (
        <div className="fixed bottom-6 right-6 bg-blue-600 text-white px-6 py-4 rounded-lg shadow-lg animate-fade-in">
          <p>{message}</p>
        </div>
      )}
    </div>
  )
}
