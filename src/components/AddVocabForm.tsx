import React, { useState } from 'react';
import { useVocab } from '../context/VocabContext';

const AddVocabForm = () => {
 const { addEntry } = useVocab();

 const handleSave = () => {
  if (!meaning || !word) return alert('Word and meaning are required');
  addEntry({
    language: 'zh',       //make this a dropdown later
    meaning,
    phonetic: phonetic || undefined,
    word,
    isPublic: false,
    tags: [],
  });
  setMeaning('');
  setPhonetic('');
  setWord('');
};
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h3>Add New Vocabulary</h3>
      
      {/* Box 1: Meaning (Level 1) */}
      <div style={{ marginBottom: '10px' }}>
        <label>Meaning (English): </label>
        <input 
          value={meaning}
          onChange={(e) => setMeaning(e.target.value)} 
          placeholder="e.g. Clothes"
        />
      </div>

      {/* Box 2: Phonetic (Level 2 - Optional) */}
      <div style={{ marginBottom: '10px' }}>
        <label>Phonetic/Pinyin: </label>
        <input 
          value={phonetic} 
          onChange={(e) => setPhonetic(e.target.value)} 
          placeholder="e.g. Yīfú"
        />
      </div>

      {/* Box 3: Target Word (Level 3) */}
      <div style={{ marginBottom: '10px' }}>
        <label>Word/Character: </label>
        <input 
          value={word} 
          onChange={(e) => setWord(e.target.value)} 
          placeholder="e.g. 衣服"
        />
      </div>

      <button onClick={handleSave}>Save Word</button>
    </div>
  );
};

export default AddVocabForm;
