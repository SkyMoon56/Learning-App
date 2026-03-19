import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { VocabProvider } from './context/VocabContext';
import NavBar from './components/NavBar';
import Dashboard from './pages/Dashboard';
import VocabList from './pages/VocabList';
import StudySession from './pages/StudySession';
import Games from './pages/Games';

const App = () => {
  return (
    <VocabProvider>
      <BrowserRouter>
        <NavBar />
        <main style={{ padding: '20px', maxWidth: '900px', margin: '0 auto' }}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/vocab" element={<VocabList />} />
            <Route path="/study" element={<StudySession />} />
            <Route path="/games" element={<Games />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
      </BrowserRouter>
    </VocabProvider>
  );
};

export default App;
