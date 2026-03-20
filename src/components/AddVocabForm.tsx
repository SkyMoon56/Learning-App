import React, { useState } from 'react';
import { useVocab } from '../context/VocabContext';
import { VocabEntry } from '../models/VocabEntry';

const LANGUAGE_OPTIONS: { value: VocabEntry['language']; label: string }[] = [
  { value: 'zh', label: 'Chinese (中文)' },
  { value: 'es', label: 'Spanish (Español)' },
  { value: 'fr', label: 'French (Français)' },
  ];

const AddVocabForm = () => {
    const { addEntry } = useVocab();
    const [language, setLanguage] = useState<VocabEntry['language']>('zh');
    const [meaning, setMeaning] = useState('');
    const [phonetic, setPhonetic] = useState('');
    const [word, setWord] = useState('');

    const handleSave = () => {
          if (!meaning.trim() || !word.trim()) {
                  alert('Word and meaning are required');
                  return;
          }
          addEntry({
                  language,
                  meaning: meaning.trim(),
                  phonetic: phonetic.trim() || undefined,
                  word: word.trim(),
                  isPublic: false,
                  tags: [],
          });
          setMeaning('');
          setPhonetic('');
          setWord('');
    };

    return (
          <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
                  <h3>Add New Vocabulary</h3>h3>
          
            {/* Language selector */}
                <div style={{ marginBottom: '10px' }}>
                        <label>Language: </label>label>
                        <select
                                    value={language}
                                    onChange={(e) => setLanguage(e.target.value as VocabEntry['language'])}
                                    style={{ marginLeft: '8px', padding: '4px 8px' }}
                                  >
                          {LANGUAGE_OPTIONS.map((opt) => (
                                                <option key={opt.value} value={opt.value}>
                                                  {opt.label}
                                                </option>option>
                                              ))}
                        </select>select>
                </div>div>
          
            {/* Box 1: Meaning (Level 1) */}
                <div style={{ marginBottom: '10px' }}>
                        <label>Meaning (English): </label>label>
                        <input
                                    value={meaning}
                                    onChange={(e) => setMeaning(e.target.value)}
                                    placeholder="e.g. Clothes"
                                  />
                </div>div>
          
            {/* Box 2: Phonetic (Level 2 - Optional) */}
                <div style={{ marginBottom: '10px' }}>
                        <label>Phonetic/Pinyin: </label>label>
                        <input
                                    value={phonetic}
                                    onChange={(e) => setPhonetic(e.target.value)}
                                    placeholder="e.g. Yīfú (optional)"
                                  />
                </div>div>
          
            {/* Box 3: Target Word (Level 3) */}
                <div style={{ marginBottom: '10px' }}>
                        <label>Word/Character: </label>label>
                        <input
                                    value={word}
                                    onChange={(e) => setWord(e.target.value)}
                                    placeholder="e.g. 衣服"
                                  />
                </div>div>
          
                <button onClick={handleSave}>Save Word</button>button>
          </div>div>
        );
};

export default AddVocabForm;</h3>
