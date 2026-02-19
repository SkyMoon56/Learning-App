export interface VocabEntry {
  id: string;
  language: 'zh' | 'fr' | 'en';
  meaning: string; 
  phonetic?: string; 
  word: string; 
  isPublic: boolean;
  tags: string[];
}