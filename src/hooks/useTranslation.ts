import { useContext } from 'react';
import { TranslationContext } from '../contexts/translationContext';

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (context === undefined) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
};