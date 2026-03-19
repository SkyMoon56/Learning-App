import React, { useState } from 'react';
import { useVocab } from '../context/VocabContext';

const StudySession = () => {
  const { entries } = useVocab();
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  if (entries.length === 0) return <p>Add some words first to study!</p>;

  const current = entries[index];

  return (
    <div style={{ textAlign: 'center', paddingTop: '40px' }}>
      <h2>Study Mode</h2>
      <p>{index + 1} / {entries.length}</p>
      <div
        onClick={() => setFlipped(!flipped)}
        style={{
          width: '300px', height: '180px', margin: '24px auto',
          border: '2px solid #4F46E5', borderRadius: '12px',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '24px', cursor: 'pointer', userSelect: 'none',
        }}
      >
        {flipped
          ? `${current.meaning}${current.phonetic ? ` (${current.phonetic})` : ''}`
          : current.word}
      </div>
      <p style={{ color: '#888', fontSize: '14px' }}>Click card to flip</p>
      <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', marginTop: '16px' }}>
        <button onClick={() => { setIndex(Math.max(0, index - 1)); setFlipped(false); }}>← Prev</button>
        <button onClick={() => { setIndex(Math.min(entries.length - 1, index + 1)); setFlipped(false); }}>Next →</button>
      </div>
    </div>
  );
};

export default StudySession;
