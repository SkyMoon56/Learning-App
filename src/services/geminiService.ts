import { GoogleGenerativeAI } from '@google/generative-ai';
import { VocabEntry } from '../models/VocabEntry';

const genAI = new GoogleGenerativeAI(process.env.REACT_APP_GEMINI_API_KEY || '');

export const geminiService = {
  async generateDialogue(entries: VocabEntry[]): Promise<string> {
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

    const wordList = entries
      .map(e => `${e.word} (${e.meaning})`)
      .join(', ');

    const prompt = `Create a short, natural dialogue (4-6 lines) using ONLY these vocabulary words: ${wordList}. 
    Format as: Speaker1: ... / Speaker2: ... Keep it realistic and conversational.`;

    const result = await model.generateContent(prompt);
    return result.response.text();
  },

  async getHint(entry: VocabEntry): Promise<string> {
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
    const prompt = `Give a one-sentence memory trick to remember that "${entry.word}" means "${entry.meaning}". Be creative and brief.`;
    const result = await model.generateContent(prompt);
    return result.response.text();
  },
};
```

Need to add API key to a `.env` file at your project root:
```
REACT_APP_GEMINI_API_KEY=your_key_here
