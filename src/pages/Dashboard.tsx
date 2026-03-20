import React from 'react';
import { useVocab } from '../context/VocabContext';
import { Link } from 'react-router-dom';

interface DashboardProps {
    /** Pass a display name once you add auth; defaults to a generic greeting. */
  userName?: string;
}

const Dashboard = ({ userName }: DashboardProps) => {
    const { entries } = useVocab();

    const byLanguage = {
          zh: entries.filter(e => e.language === 'zh').length,
          es: entries.filter(e => e.language === 'es').length,
          fr: entries.filter(e => e.language === 'fr').length,
    };

    return (
          <div>
                <h2>{userName ? `Welcome back, ${userName} 👋` : 'Welcome back 👋'}</h2>h2>
                <p>You have <strong>{entries.length}</strong>strong> word{entries.length !== 1 ? 's' : ''} in your vault.</p>p>
          
            {entries.length > 0 && (
                    <p style={{ color: '#666', fontSize: '14px' }}>
                      {byLanguage.zh > 0 && `🇨🇳 Chinese: ${byLanguage.zh}  `}
                      {byLanguage.es > 0 && `🇪🇸 Spanish: ${byLanguage.es}  `}
                      {byLanguage.fr > 0 && `🇫🇷 French: ${byLanguage.fr}`}
                    </p>p>
                )}
          
                <div style={{ display: 'flex', gap: '12px', marginTop: '20px' }}>
                        <Link to="/vocab"><button>View Vocab</button>button></Link>Link>
                        <Link to="/study"><button disabled={entries.length === 0}>Start Studying</button>button></Link>Link>
                        <Link to="/games"><button disabled={entries.length === 0}>Play a Game</button>button></Link>Link>
                </div>div>
          </div>div>
        );
};

export default Dashboard;</div>
