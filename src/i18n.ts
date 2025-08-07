
import i18n from 'i18next';
import Backend from 'i18next-fs-backend';
import path from 'path';

export default async function initializeI18n() {
    await i18n.use(Backend).init({
        backend: {
            loadPath: path.join(__dirname, './locales/{{lng}}/{{ns}}.json'),
        },
        fallbackLng: 'en',
        preload: ['en', 'ru'],
        ns: ['commands'],
        defaultNS: 'commands',
        interpolation: {
            escapeValue: false
        },
        debug: true
    });
}