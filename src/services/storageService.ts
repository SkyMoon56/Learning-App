import { VocabEntry } from '../models/VocabEntry';

const STORAGE_KEY = 'vocab_entries';

export const storageService = {
  getAll(): VocabEntry[] {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  },

  save(entries: VocabEntry[]): void {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
  },

  add(entry: VocabEntry): VocabEntry[] {
    const all = this.getAll();
    const updated = [...all, entry];
    this.save(updated);
    return updated;
  },

  remove(id: string): VocabEntry[] {
    const updated = this.getAll().filter(e => e.id !== id);
    this.save(updated);
    return updated;
  },

  update(entry: VocabEntry): VocabEntry[] {
    const updated = this.getAll().map(e => e.id === entry.id ? entry : e);
    this.save(updated);
    return updated;
  },
};
