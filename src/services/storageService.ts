import { VocabEntry } from '../models/VocabEntry';

const STORAGE_KEY = 'vocab_entries';

/**
 * Thin localStorage wrapper for vocab entries.
 * VocabContext owns the in-memory state; this service just handles persistence.
 * Each mutating method receives the already-updated array from context and saves it.
 */
export const storageService = {
    getAll(): VocabEntry[] {
          try {
                  const raw = localStorage.getItem(STORAGE_KEY);
                  return raw ? (JSON.parse(raw) as VocabEntry[]) : [];
          } catch {
                  console.error('storageService: failed to parse stored entries');
                  return [];
          }
    },

    save(entries: VocabEntry[]): void {
          try {
                  localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
          } catch {
                  console.error('storageService: failed to save entries (storage full?)');
          }
    },

    add(currentEntries: VocabEntry[], entry: VocabEntry): VocabEntry[] {
          const updated = [...currentEntries, entry];
          this.save(updated);
          return updated;
    },

    remove(currentEntries: VocabEntry[], id: string): VocabEntry[] {
          const updated = currentEntries.filter(e => e.id !== id);
          this.save(updated);
          return updated;
    },

    update(currentEntries: VocabEntry[], entry: VocabEntry): VocabEntry[] {
          const updated = currentEntries.map(e => (e.id === entry.id ? entry : e));
          this.save(updated);
          return updated;
    },
};
