export interface VocabEntry {
    id: string;
    language: 'zh' | 'fr' | 'es';
    /** The word or character in the target language */
  word: string;
    /** The meaning/translation in English */
  meaning: string;
    /** Optional phonetic pronunciation (e.g. Pinyin for Chinese, IPA for others) */
  phonetic?: string;
    isPublic: boolean;
    tags: string[];
}
