import React, { useState } from 'react';
import UploadForm from '../components/UploadForm';
import MoodDisplay from '../components/MoodDisplay';
import PlaylistCard from '../components/PlaylistCard';

export default function Home() {
  const [mood, setMood] = useState(null);
  const [tracks, setTracks] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleFormSubmit = async (formData) => {
  setLoading(true);
  setMood(null);
  setTracks([]);

  try {
    const response = await fetch("http://localhost:8000/predict", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    console.log("Backend response:", data); // ✅ Log here

    setMood(data.mood);
    setTracks(data.tracks || []);
  } catch (err) {
    console.error("Prediction error:", err); // ✅ Log error
    alert("Failed to connect to backend. Is FastAPI running?");
  } finally {
    setLoading(false);
  }
};


  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">🎶 AI Mood-Based Playlist Generator</h1>

      <UploadForm onSubmit={handleFormSubmit} />

      {loading && <p className="mt-4 text-gray-500">Analyzing mood and fetching tracks...</p>}

      {mood && <MoodDisplay mood={mood} />}

      {tracks.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4 max-w-5xl w-full">
          {tracks.map((track, idx) => (
            <PlaylistCard key={idx} playlist={track} />
          ))}
        </div>
      )}
    </div>
  );
}
