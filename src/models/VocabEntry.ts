export interface VocabEntry {
  id: string;
  language: 'zh' | 'fr' | 'es';
  meaning: string; 
  phonetic?: string; 
  word: string; 
  isPublic: boolean;
  tags: string[];
}
