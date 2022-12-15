import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from '../locales/en.json';
import fr from '../locales/fr.json';

const resources = {
  en: { all: en }, // Récupère les traductions du fichier json en.json et les met dans le namespace ‘all’
  fr: { all: fr }
};

i18n
  .use(LanguageDetector) // Active la détection de la langue du navigateur
  .use(initReactI18next) // Active l'utilisation d'i18next avec React
  .init({
    resources,
    supportedLngs: ["en", "fr"],
    ns: "all", // Namespace racine obligatoire
    fallbackLng: "en"
  });