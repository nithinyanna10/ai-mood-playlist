
import React from 'react';

export default function PlaylistCard({ playlist }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300">
      <img src={playlist.album_image} alt={playlist.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold">{playlist.title}</h2>
        <p className="text-gray-600 mb-2">by {playlist.artist}</p>
        {playlist.preview_url ? (
          <audio controls className="w-full mt-2">
            <source src={playlist.preview_url} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        ) : (
          <p className="text-sm text-red-500">No preview available</p>
        )}
        <a
          href={playlist.external_url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-3 text-blue-600 hover:underline text-sm"
        >
          Open in Spotify
        </a>
      </div>
    </div>
  );
}
