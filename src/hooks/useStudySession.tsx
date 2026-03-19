import { useState, useMemo } from 'react';
import { VocabEntry } from '../models/VocabEntry';

export const useStudySession = (entries: VocabEntry[]) => {
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [seen, setSeen] = useState<Set<string>>(new Set());

  const shuffled = useMemo(() =>
    [...entries].sort(() => Math.random() - 0.5),
    [entries]
  );

  const current = shuffled[index];
  const progress = seen.size / entries.length;

  const markSeen = () => setSeen(prev => new Set(prev).add(current?.id));
  const next = () => { markSeen(); setIndex(i => Math.min(shuffled.length - 1, i + 1)); setFlipped(false); };
  const prev = () => { setIndex(i => Math.max(0, i - 1)); setFlipped(false); };
  const flip = () => setFlipped(f => !f);
  const reset = () => { setIndex(0); setFlipped(false); setSeen(new Set()); };

  return { current, index, flipped, progress, next, prev, flip, reset, total: shuffled.length };
};
