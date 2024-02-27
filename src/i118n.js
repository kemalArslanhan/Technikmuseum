import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Dil dosyalarınızı (çeviriler) içe aktarın
import translationEN from './locales/en/translation.json';
import translationDE from './locales/de/translation.json';

// Çeviriler için kaynakları belirleyin
const resources = {
  en: {
    translation: translationEN
  },
  de: {
    translation: translationDE
  }
};

i18n
  // react-i18next modülünü geçirin
  .use(initReactI18next)
  // i18next'i başlatmak için yapılandırma
  .init({
    resources,
    lng: "en", // varsayılan dil
    fallbackLng: "en", // dil bulunamadığında kullanılacak dil

    interpolation: {
      escapeValue: false // react zaten güvenlidir
    }
  });

export default i18n;