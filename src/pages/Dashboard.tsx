import React from 'react';
import { useVocab } from '../context/VocabContext';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const { entries } = useVocab();

  return (
    <div>
      <h2>Welcome back, Sky 👋</h2>
      <p>You have <strong>{entries.length}</strong> words in your vault.</p>
      <div style={{ display: 'flex', gap: '12px', marginTop: '20px' }}>
        <Link to="/vocab"><button>View Vocab</button></Link>
        <Link to="/study"><button>Start Studying</button></Link>
        <Link to="/games"><button>Play a Game</button></Link>
      </div>
    </div>
  );
};

export default Dashboard;
