
# 🎶 AI Mood-Based Playlist Generator

> Upload a selfie + your mood in text, and get back a personalized playlist powered by AI & Spotify!

![Demo Screenshot](./demo.png)

---

## 💡 Features

- 🧠 **Emotion Detection** from uploaded selfies using DeepFace/TensorFlow
- ✍️ **Mood Analysis** from optional text via VADER sentiment
- 🎧 **Spotify Integration** for mood-matched tracks (preview & play!)
- 🎨 **TailwindCSS UI** with React + FastAPI backend
- 🌐 **CORS-Ready API** for seamless frontend/backend interaction

---

## 🛠️ Tech Stack

| Layer         | Tools/Tech |
|---------------|------------|
| Frontend      | React, TailwindCSS, Vite |
| Backend       | FastAPI, Python, Uvicorn |
| ML Libraries  | DeepFace / TensorFlow, NLTK |
| API           | Spotify Web API (Search, Audio Features) |
| Hosting       | Vercel (frontend), Render (backend) |

---

## 🚀 How It Works

1. **User uploads selfie** + optional mood message
2. **Backend detects emotion** from image + analyzes text mood
3. **Final mood is resolved**
4. **Spotify API fetches tracks** matching mood using audio features
5. **Frontend displays embeddable tracks**

---

## 📸 Screenshots

| Upload UI | Prediction Output |
|-----------|-------------------|
| ![Upload](./screens/upload.png) | ![Tracks](./screens/tracks.png) |

---

## ⚙️ Local Setup

```bash
# 1. Clone this repo
git clone https://github.com/yourusername/ai-mood-playlist.git

# 2. Setup Backend
cd backend
pip install -r requirements.txt
uvicorn main:app --reload

# 3. Setup Frontend
cd ../frontend
npm install
npm run dev
```

---

## 🔐 Environment Variables

### Backend (`backend/.env`)
```
SPOTIPY_CLIENT_ID=your_spotify_client_id
SPOTIPY_CLIENT_SECRET=your_spotify_client_secret
```

### Frontend (`frontend/.env`)
```
REACT_APP_API_URL=http://localhost:8000
```

---

## 🛰️ Deployment

- **Frontend:** Vercel → `https://ai-mood-playlist.vercel.app`
- **Backend:** Render → `https://ai-mood-api.onrender.com`

---

## 🙌 Contributors

- **Nithin Reddy Yanna** – AI/ML Engineer & Full Stack Developer
- **OpenAI GPT-4** – Assistant & Architect

---

---

> 💬 *Feel free to fork, star, and submit pull requests. Feedback & ideas welcome!*
