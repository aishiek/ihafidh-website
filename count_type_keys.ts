
import { readFileSync } from 'fs';

const content = readFileSync('./src/i18n/translations.ts', 'utf8');
const typeMatch = content.match(/type TranslationKeys = \{([\s\S]*?)\};/);
if (typeMatch) {
    const keys = typeMatch[1].split('\n')
        .map(line => line.trim())
        .filter(line => line && !line.startsWith('//'))
        .map(line => line.split(':')[0].trim());
    console.log('Total keys in TranslationKeys:', keys.length);
}
