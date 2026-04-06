
import { translations } from './src/i18n/translations';

const enKeys = Object.keys(translations.en);
console.log('Total keys in en:', enKeys.length);

const msKeys = Object.keys(translations.ms);
console.log('Total keys in ms:', msKeys.length);

const taKeys = Object.keys(translations.ta);
console.log('Total keys in ta:', taKeys.length);

const urKeys = Object.keys(translations.ur);
console.log('Total keys in ur:', urKeys.length);

const missingInMs = enKeys.filter(k => !msKeys.includes(k));
console.log('Missing in ms:', missingInMs);

const extraInMs = msKeys.filter(k => !enKeys.includes(k));
console.log('Extra in ms:', extraInMs);
