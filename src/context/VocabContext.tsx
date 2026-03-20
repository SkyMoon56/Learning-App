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

    // Load persisted entries once on mount
    useEffect(() => {
          setEntries(storageService.getAll());
    }, []);

    const addEntry = (data: Omit<VocabEntry, 'id'>) => {
          const newEntry: VocabEntry = { ...data, id: uuidv4() };
          setEntries(prev => storageService.add(prev, newEntry));
    };

    const removeEntry = (id: string) => {
          setEntries(prev => storageService.remove(prev, id));
    };

    const updateEntry = (entry: VocabEntry) => {
          setEntries(prev => storageService.update(prev, entry));
    };

    const getByLanguage = (lang: VocabEntry['language']) =>
          entries.filter(e => e.language === lang);

    return (
          <VocabContext.Provider value={{ entries, addEntry, removeEntry, updateEntry, getByLanguage }}>
            {children}
          </VocabContext.Provider>VocabContext.Provider>
        );
};

export const useVocab = () => {
    const ctx = useContext(VocabContext);
    if (!ctx) throw new Error('useVocab must be used inside VocabProvider');
    return ctx;
};
