# Language Practice App
A community-driven practice service designed to help language learners catalogue vocabulary and master it through interactive mini-games and AI-generated dialogues. Unlike traditional learning apps, this focuses on retention and application of the words you are already studying. 

🚀 Key Features

Flexible Vocab Upload: Streamlined uploading for custom vocabulary sets. 


Quizlet Integration: Easily import your existing Quizlet flashcards to jumpstart your practice. 


Multi-Level Language Support: Handles complex language structures, such as Chinese (Character, Pinyin, and Translation) and French. 


Interactive Mini-Games: Practice using your own vocabulary in games like Word Swipe, Whack-a-Mole, and Sentence Unscramblers. 


AI Dialogues: Generate realistic practice dialogues based specifically on the vocabulary you’ve uploaded. 


Social Learning: Choose to keep your sets private or make them public to help others in the community. 

🎮 Included Games

Word Swipe: Combines English definitions, pinyin, and characters for rapid-fire recognition. 


Whack-a-Mole: Focuses on quick character or word recognition. 


Sentence Unscrambler: Helps master grammar by arranging your vocab into correct structures. 


Typeracer: A spelling and speed focused game where you can hover over characters to learn as you type. 


Bingo: A multiplayer mode focused on noun recognition. 

🛠 Tech Stack (Suggested)
Frontend: Flutter or React Native (for cross-platform support).

Backend: Firebase or Supabase (for user accounts and real-time multiplayer).

AI Integration: Gemini API or GPT-4o (for dialogue generation).

📂 Project Structure
Plaintext
├── assets/             # Game sprites and UI icons
├── src/
│   ├── components/     # Reusable UI elements (cards, inputs)
│   ├── games/          # Logic for the individual mini-games
│   ├── services/       # API logic for Quizlet and AI generation
│   └── store/          # Global state (user vocab, settings)
└── README.md
📝 Roadmap
[ ] Core Database Schema for multi-level vocabulary.

[ ] Quizlet Import functionality.

[ ] MVP of "Word Swipe" and "Sentence Unscrambler."

[ ] AI Dialogue generation engine.

[ ] Public/Private account sharing system.
