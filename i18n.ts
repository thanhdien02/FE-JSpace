import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Import các file ngôn ngữ
import enTranslation from "./src/utils/locales/en/translation.json";
import viTranslation from "./src/utils/locales/vi/translation.json";

i18n
  .use(LanguageDetector) // Sử dụng LanguageDetector để tự động phát hiện ngôn ngữ
  .use(initReactI18next) // Khởi tạo react-i18next
  .init({
    resources: {
      en: {
        translation: enTranslation,
      },
      vi: {
        translation: viTranslation,
      },
    },
    fallbackLng: "vi", // Ngôn ngữ dự phòng
    lng: "vi", // Ngôn ngữ mặc định
    interpolation: {
      escapeValue: false, // React đã tự động bảo vệ XSS
    },
  });

export default i18n;
