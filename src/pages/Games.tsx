import React from 'react';
import { useNavigate } from 'react-router-dom';

const gameList = [
  { name: 'Word Swipe', description: 'Fast recognition — match definitions', emoji: '👆', available: false },
  { name: 'TypeRacer', description: 'Spell your words before time runs out', emoji: '⌨️', available: false },
  { name: 'Whack-a-Mole', description: 'Rapid-fire character recognition', emoji: '🔨', available: false },
];

const Games = () => (
  <div>
    <h2>Game Suite</h2>
    <p style={{ color: '#888' }}>Games coming soon — add your words first!</p>
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginTop: '20px' }}>
      {gameList.map(g => (
        <div key={g.name} style={{
          border: '1px solid #ddd', borderRadius: '10px',
          padding: '20px', width: '200px', opacity: g.available ? 1 : 0.5,
        }}>
          <div style={{ fontSize: '32px' }}>{g.emoji}</div>
          <strong>{g.name}</strong>
          <p style={{ fontSize: '13px', color: '#666' }}>{g.description}</p>
          <button disabled={!g.available}>
            {g.available ? 'Play' : 'Coming soon'}
          </button>
        </div>
      ))}
    </div>
  </div>
);

export default Games;
