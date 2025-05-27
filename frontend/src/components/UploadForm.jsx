
import React, { useState } from 'react';

export default function UploadForm({ onSubmit }) {
  const [file, setFile] = useState(null);
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!file) {
      alert("Please upload a selfie.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("text", text);
    onSubmit(formData);
  };

  return (
    <div className="w-full flex justify-center mt-6">
      <div className="w-full max-w-md">
        <div className="text-red-600 text-center text-lg font-bold mb-4">
          🔥 UploadForm Rendered
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-lg shadow-md space-y-4"
        >
          <div>
            <label className="block text-sm font-medium text-gray-700">Upload a Selfie</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setFile(e.target.files[0])}
              className="mt-1 block w-full border border-gray-300 rounded p-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Optional Mood Text</label>
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="e.g., I just finished finals..."
              className="mt-1 block w-full border border-gray-300 rounded p-2"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
          >
            Predict Mood & Get Playlist
          </button>
        </form>
      </div>
    </div>
  );
}
