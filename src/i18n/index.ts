import i18next, { i18n as i18nInstance } from 'i18next';
import HttpApi from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';
import { languages, namespaces } from './i18n.constants';

const createI18n = (language: string): i18nInstance => {
  const i18n = i18next.createInstance().use(initReactI18next);

  i18n.use(HttpApi).init({
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
    lng: localStorage['language'] || language,
    fallbackLng: language,
    ns: [namespaces.common, namespaces.myAccounts],
  });

  return i18n;
};

export const i18n = createI18n(languages.en);
