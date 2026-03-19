import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { VocabEntry } from '../models/VocabEntry';
import { storageService } from '../services/storageService';

interface VocabContextType {
  entries: VocabEntry[];
  addEntry: (data: Omit<VocabEntry, 'id'>) => void;
  removeEntry: (id: string) => void;
  updateEntry: (entry: VocabEntry) => void;
  getByLanguage: (lang: VocabEntry['language']) => VocabEntry[];
}

const VocabContext = createContext<VocabContextType | null>(null);

export const VocabProvider = ({ children }: { children: ReactNode }) => {
  const [entries, setEntries] = useState<VocabEntry[]>([]);

  useEffect(() => {
    setEntries(storageService.getAll());
  }, []);

  const addEntry = (data: Omit<VocabEntry, 'id'>) => {
    const newEntry: VocabEntry = { ...data, id: uuidv4() };
    setEntries(storageService.add(newEntry));
  };

  const removeEntry = (id: string) => {
    setEntries(storageService.remove(id));
  };

  const updateEntry = (entry: VocabEntry) => {
    setEntries(storageService.update(entry));
  };

  const getByLanguage = (lang: VocabEntry['language']) =>
    entries.filter(e => e.language === lang);

  return (
    <VocabContext.Provider value={{ entries, addEntry, removeEntry, updateEntry, getByLanguage }}>
      {children}
    </VocabContext.Provider>
  );
};

export const useVocab = () => {
  const ctx = useContext(VocabContext);
  if (!ctx) throw new Error('useVocab must be used inside VocabProvider');
  return ctx;
};
