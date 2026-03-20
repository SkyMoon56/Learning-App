# 🌍 Language Learning App

A personalized, full-stack vocabulary platform that bridges the gap between learning new words and actually using them in context. Import study sets, build custom vocab vaults, and practice through interactive AI-powered games.

> **Status:** Work in progress — active side project.

![TypeScript](https://img.shields.io/badge/TypeScript-4.9-blue?logo=typescript)
![React](https://img.shields.io/badge/React-18-61DAFB?logo=react)
![Gemini AI](https://img.shields.io/badge/AI-Google%20Gemini-4285F4?logo=google)
![License](https://img.shields.io/badge/License-MIT-green)

---

## 📌 Overview

This app is designed for language learners who want more than flashcards. It supports multi-level vocabulary formats (e.g., Chinese Characters + Pinyin + English), Quizlet imports, and AI-generated practice conversations — all powered by your own uploaded data.

---

## ✨ Features

- **Custom Vocab Vault** — Upload vocabulary sets in multi-level formats supporting characters, phonetics, and translations
- **Quizlet Import** — Sync existing study sets instantly to get started without re-entering data
- **AI-Powered Dialogues** — Generate realistic conversations using only the vocabulary you've uploaded, powered by Google Gemini
- **Privacy Control** — Keep sets private for personal study or publish them to the community library
- **Cross-Platform Design** — Consistent experience across languages and writing scripts

---

## 🕹️ Game Suite

Practice vocabulary through multiple interactive modes:

| Game | Focus |
|------|-------|
| **Word Swipe** | Fast-paced definition & pronunciation recognition |
| **Whack-a-Mole** | Rapid-fire character recognition |
| **Sentence Unscrambler** | Grammar practice by rebuilding sentences from your vocab |
| **TypeRacer** | Spelling-focused with hover-to-learn tooltips for complex characters |
| **Bingo** | Multiplayer noun-recognition for community sets |

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 18, TypeScript, React Router v6 |
| Animations | Framer Motion |
| Icons | Lucide React |
| AI | Google Gemini (`@google/generative-ai`) |
| HTTP | Axios |
| IDs | UUID |
| Build | Create React App |

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- A Google Gemini API key (free tier available at [ai.google.dev](https://ai.google.dev))

### Installation

```bash
git clone https://github.com/SkyMoon56/Learning-App.git
cd Learning-App
npm install
```

### Configuration

Create a `.env` file in the root directory:

```env
REACT_APP_GEMINI_API_KEY=your_api_key_here
```

### Run

```bash
npm start
```

Opens at [http://localhost:3000](http://localhost:3000).

---

## 📂 Project Structure

```
Learning-App/
├── src/
│   ├── components/     # Reusable UI components
│   ├── pages/          # Route-level page components
│   ├── games/          # Individual game logic & UI
│   ├── models/         # TypeScript data models (VocabEntry, etc.)
│   └── services/       # API calls and Gemini integration
├── public/
├── package.json
└── tsconfig.json
```

---

## 🗺️ Roadmap

- [x] Core vocab vault with multi-level support
- [x] Quizlet import
- [x] AI conversation generation
- [ ] Mobile-responsive design polish
- [ ] Spaced repetition algorithm
- [ ] Progress tracking & stats dashboard
- [ ] Community set discovery & search

---

## 📝 License

MIT — free to use, fork, and build on.

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you'd like to change.
