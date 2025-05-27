
import React from 'react';

const emojiMap = {
  happy: '😊',
  sad: '😢',
  chill: '😌',
  hype: '🔥',
  dark: '🌑',
  neutral: '😐',
};

export default function MoodDisplay({ mood }) {
  return (
    <div className="text-center my-6">
      <h2 className="text-2xl font-semibold">
        You're feeling: {mood.charAt(0).toUpperCase() + mood.slice(1)} {emojiMap[mood] || '🧠'}
      </h2>
    </div>
  );
}
