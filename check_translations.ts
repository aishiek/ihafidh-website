
import { translations, Language } from './src/i18n/translations';

const languages: Language[] = ['ta', 'ms', 'ur'];
const enKeys = Object.keys(translations.en);

languages.forEach(lang => {
    const langKeys = Object.keys(translations[lang]);
    const missingKeys = enKeys.filter(key => !langKeys.includes(key));
    const extraKeys = langKeys.filter(key => !enKeys.includes(key));
    
    console.log(`Language: ${lang}`);
    if (missingKeys.length > 0) {
        console.log(`  Missing keys: ${missingKeys.join(', ')}`);
    } else {
        console.log(`  No missing keys.`);
    }
    if (extraKeys.length > 0) {
        console.log(`  Extra keys: ${extraKeys.join(', ')}`);
    }
});
