import { createI18n } from "vue-i18n";

import messages from "@intlify/unplugin-vue-i18n/messages";

const dateTimeFormats = {
  'en': {
    short: {
      year: 'numeric',
      month: 'short'
    }
  },
  'es': {
    short: {
      year: 'numeric',
      month: 'short'
     
    }
  }
}

export const i18n = createI18n({
  legacy: true,
  globalInjection: true,
  locale: "es",
  fallbackLocale: "es",
  availableLocales: ["es", "en"],
  messages: messages,
  datetimeFormats: dateTimeFormats
});
