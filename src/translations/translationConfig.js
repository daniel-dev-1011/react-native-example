/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */

//Using for Multi-Language
import {I18nManager} from 'react-native';
import * as RNLocalize from "react-native-localize";
import i18n from "i18n-js";
import memoize from "lodash.memoize"; // Use for caching/memoize for better performance

const translationGetters = {
  en: () => require('../translations/en.json'),
  de: () => require('../translations/de.json'),
  ptR: () => require('../translations/ptR.json'),
  po: () => require('../translations/po.json'),
  bg: () => require('../translations/bg.json'),
  es: () => require('../translations/es.json'),
};

export const translate = memoize(
  (key, config) => i18n.t(key, config),
  (key, config) => (config ? key + JSON.stringify(config) : key)
);

export const setI18nConfig = () => {
  // fallback if no available language fits
  const fallback = { languageTag: "en", isRTL: false };

  const { languageTag, isRTL } =
    RNLocalize.findBestAvailableLanguage(Object.keys(translationGetters)) ||
    fallback;

  // clear translation cache
  translate.cache.clear();
  // update layout direction
  I18nManager.forceRTL(isRTL);
  // set i18n-js config
  i18n.translations = { [languageTag]: translationGetters[languageTag]() };
  i18n.locale = languageTag;
};

export const setI18nConfigure = (locale) => {
  if (locale === null || typeof locale === 'undefined') { locale = 'en'}
  i18n.fallbacks = true;
  i18n.translations = { [locale]: translationGetters[locale]() };
  i18n.locale = locale;
};