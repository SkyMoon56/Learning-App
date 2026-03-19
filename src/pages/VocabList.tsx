import React from 'react';
import { useVocab } from '../context/VocabContext';
import AddVocabForm from '../components/AddVocabForm';

const VocabList = () => {
  const { entries, removeEntry } = useVocab();

  return (
    <div>
      <h2>My Vocabulary</h2>
      <AddVocabForm />
      <hr style={{ margin: '24px 0' }} />
      {entries.length === 0 && <p>No words yet — add some above!</p>}
      {entries.map(entry => (
        <div key={entry.id} style={{
          border: '1px solid #ddd', borderRadius: '8px',
          padding: '12px', marginBottom: '10px',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        }}>
          <div>
            <strong>{entry.word}</strong>
            {entry.phonetic && <span style={{ color: '#777', marginLeft: '8px' }}>{entry.phonetic}</span>}
            <span style={{ marginLeft: '12px' }}>→ {entry.meaning}</span>
          </div>
          <button onClick={() => removeEntry(entry.id)} style={{ color: 'red' }}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default VocabList;
