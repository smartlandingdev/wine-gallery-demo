import { createContext } from 'react';
import type { Language, Translations } from '../types';

interface TranslationContextType {
  language: Language;
  t: Translations;
  toggleLanguage: () => void;
}

export const TranslationContext = createContext<TranslationContextType | undefined>(undefined);