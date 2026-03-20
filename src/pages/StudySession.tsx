import React from 'react';
import { useVocab } from '../context/VocabContext';
import { useStudySession } from '../hooks/useStudySession';

const StudySession = () => {
    const { entries } = useVocab();
    const {
          current,
          index,
          flipped,
          progress,
          next,
          prev,
          flip,
          reset,
          total,
    } = useStudySession(entries);

    if (entries.length === 0) return <p>Add some words first to study!</p>p>;
  
    return (
          <div style={{ textAlign: 'center', paddingTop: '40px' }}>
                <h2>Study Mode</h2>h2>
                <p>{index + 1} / {total}</p>p>
          
            {/* Progress bar */}
                <div style={{ width: '300px', margin: '0 auto 16px', background: '#e5e7eb', borderRadius: '8px', height: '8px' }}>
                        <div
                                    style={{
                                                  width: `${progress * 100}%`,
                                                  background: '#4F46E5',
                                                  height: '8px',
                                                  borderRadius: '8px',
                                                  transition: 'width 0.3s ease',
                                    }}
                                  />
                </div>div>
          
                <div
                          onClick={flip}
                          style={{
                                      width: '300px',
                                      height: '180px',
                                      margin: '24px auto',
                                      border: '2px solid #4F46E5',
                                      borderRadius: '12px',
                                      display: 'flex',
                                      alignItems: 'center',
                                      justifyContent: 'center',
                                      fontSize: '24px',
                                      cursor: 'pointer',
                                      userSelect: 'none',
                          }}
                        >
                  {flipped
                              ? `${current.meaning}${current.phonetic ? ` (${current.phonetic})` : ''}`
                              : current.word}
                </div>div>
          
                <p style={{ color: '#888', fontSize: '14px' }}>Click card to flip</p>p>
          
                <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', marginTop: '16px' }}>
                        <button onClick={prev}>&#8592; Prev</button>button>
                        <button onClick={next}>Next &#8594;</button>button>
                        <button onClick={reset} style={{ marginLeft: '16px', color: '#888' }}>Reset</button>button>
                </div>div>
          </div>div>
        );
};

export default StudySession;</p>
