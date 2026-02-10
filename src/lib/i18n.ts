import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  id: {
    translation: {
      home: {
        title: "Upload & Bagikan Media",
        subtitle: "Upload file hingga 5 sekaligus dan dapatkan link CDN instan",
        drag_drop: "Seret & lepas file di sini, atau klik untuk memilih",
        max_files: "Maksimal 5 file, semua format didukung",
        start_button: "Mulai",
        uploading: "Mengupload...",
        results_title: "Hasil Upload",
        copy_button: "Salin",
        open_button: "Buka"
      },
      header: {
        title: "Domku Box"
      },
      sidebar: {
        home: "Beranda",
        apidocs: "Dokumentasi API",
        terms: "Syarat & Ketentuan"
      },
      footer: {
        created_by: "created by",
        made_with: "dibuat dgn ❤️ dan kode"
      }
    }
  },
  en: {
    translation: {
      home: {
        title: "Upload & Share Media",
        subtitle: "Upload up to 5 files at once and get instant CDN links",
        drag_drop: "Drag & drop files here, or click to select",
        max_files: "Max 5 files, all formats supported",
        start_button: "Start",
        uploading: "Uploading...",
        results_title: "Upload Results",
        copy_button: "Copy",
        open_button: "Open"
      },
      header: {
        title: "Domku Box"
      },
      sidebar: {
        home: "Home",
        apidocs: "API Documentation",
        terms: "Terms & Conditions"
      },
      footer: {
        created_by: "created by",
        made_with: "made with ❤️ and code"
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "id",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;