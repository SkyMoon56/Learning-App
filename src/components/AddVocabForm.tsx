import React, { useState } from 'react';

const AddVocabForm = () => {
  // These "States" hold whatever you type into the boxes
  const [meaning, setMeaning] = useState('');
  const [phonetic, setPhonetic] = useState('');
  const [word, setWord] = useState('');

  const handleSave = () => {
    // For now, we just alert the info to show it works!
    alert(`Saved: ${word} (${phonetic}) means ${meaning}`);
    
    // Clear the boxes after saving
    setMeaning('');
    setPhonetic('');
    setWord('');
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