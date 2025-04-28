import { SetStateAction, useState } from 'react';

const playlists = [
    {
      name: 'Na Muthukumar Hits',
      playlistId: '2l7gDMdDbSDgsowfdcSwIh',
      cover: './images/muthukumar.jpeg', // Path to the downloaded image
      spotifyUrl: 'https://open.spotify.com/embed/playlist/2l7gDMdDbSDgsowfdcSwIh',
    },
    {
      name: 'All Out Hindi 00 Songs',
      playlistId: '37i9dQZF1DWZNJXX2UeBij',
      cover: './images/sharukh-90.jpeg', // Path to the downloaded image
      spotifyUrl: 'https://open.spotify.com/embed/playlist/37i9dQZF1DWZNJXX2UeBij',
    },
    {
      name: 'Hindi Songs',
      playlistId: '3wvQRgyiV8aIXQrd3efAnr',
      cover: './images/sharukhan.jpeg', // Path to the downloaded image
      spotifyUrl: 'https://open.spotify.com/embed/playlist/3wvQRgyiV8aIXQrd3efAnr',
    },
    {
      name: 'Tamil Songs',
      playlistId: '37i9dQZF1DX4Im4BTs2WMg',
      cover: './images/amaran.jpeg', // Path to the downloaded image
      spotifyUrl: 'https://open.spotify.com/embed/playlist/37i9dQZF1DX4Im4BTs2WMg',
    },
    {
      name: '90s Love Hits',
      playlistId: '37i9dQZF1DXa6iPZDThhLh',
      cover: './images/90s-image.jpeg', // Path to the downloaded image
      spotifyUrl: 'https://open.spotify.com/embed/playlist/37i9dQZF1DXa6iPZDThhLh',
    },
  ];
  
  

export default function MusicPlayerInterface() {
    const [currentPlaylist, setCurrentPlaylist] = useState(playlists[0]); // Default to the first playlist
  
    const handlePlaylistClick = (playlist: SetStateAction<{
            name: string; playlistId: string; cover: string; // Path to the downloaded image
            spotifyUrl: string;
        }>) => {
      setCurrentPlaylist(playlist);
    };
  
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
            flexGrow: 1,
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
            gap: '1.5rem',
            padding: '2rem',
            overflowY: 'auto',
          }}
        >
          {playlists.map((playlist) => (
  <button
    key={playlist.name}
    style={{
      backgroundColor: 'transparent',
      border: 'none',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      cursor: 'pointer',
      padding: '1rem', // Adds spacing around the button
    }}
    onClick={() => handlePlaylistClick(playlist)}
  >
    <img
      src={playlist.cover}
      alt={playlist.name}
      style={{
        width: '100%',
        height: '183px',
        objectFit: 'cover',
        borderRadius: '1rem',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)',
      }}
    />
  </button>
))}

        </div>
  
        {currentPlaylist && (
          <div
            style={{
              backgroundColor: '#1a1a1a',
              padding: '3rem',
              textAlign: 'center',
            }}
          >
            <iframe
              src={currentPlaylist.spotifyUrl}
              width="100%"
              height="500"
              frameBorder="0"
              allow="encrypted-media"
              style={{ borderRadius: '1rem' }}
            ></iframe>
          </div>
        )}
      </div>
    );
  }


