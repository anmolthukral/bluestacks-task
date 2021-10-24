import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n.use(LanguageDetector).init({
  resources: {
    en: {
      translations: {
        head: "Bluestacks",
        header: "Manage Campaigns",
        option1: "Upcoming Campaigns",
        option2: "Live Campaigns",
        option3: "Past Campaigns",
        date: "date",
        campaign: "campaign",
        view: "view",
        action: "action",
        csv: "csv",
        report: "report",
        scheduleAgain: "Schedule Again",
        days: "days",
        later: " later ",
        ago: " ago ",
        viewPricing: "View Pricing",
        pricing: "Pricing",
        save: "Save",
        close: "Close",
      },
    },
    de: {
      translations: {
        head: "Bluestacks",
        header: "Kampagnen verwalten",
        option1: "Anstehende Kampagnen",
        Option2: "Live-Kampagnen",
        option3: "Vergangene Kampagnen",
        date: "datum",
        campaign: "Kampagne",
        view: "Ansicht",
        action: "Aktion",
        csv: "csv",
        report: "Bericht",
        scheduleAgain: "Erneut planen",
        days: " Tage ",
        later: " später ",
        ago: "vor",
        viewPricing: "Preise anzeigen",
        pricing: "Preis",
        save: "speichern",
        close: "nah dran",
      },
    },
  },
  fallbackLng: "en",
  debug: true,

  // have a common namespace used around the full app
  ns: ["translations"],
  defaultNS: "translations",

  keySeparator: false, // we use content as keys

  interpolation: {
    escapeValue: false, // not needed for react!!
    formatSeparator: ",",
  },

  react: {
    wait: true,
  },
});

export default i18n;
