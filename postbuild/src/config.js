import path from 'path';
import dotenv from 'dotenv';

const PROJECT_ROOT_DIR = path.join(__dirname, '../..');

if (process.env.NODE_ENV === 'development') {
  dotenv.config({ path: path.join(PROJECT_ROOT_DIR, '.env.development.local') });
  dotenv.config({ path: path.join(PROJECT_ROOT_DIR, '.env.development') });
} else if (process.env.NODE_ENV === 'production') {
  dotenv.config({ path: path.join(PROJECT_ROOT_DIR, '.env.production.local') });
  dotenv.config({ path: path.join(PROJECT_ROOT_DIR, '.env.production') });
}
dotenv.config({ path: path.join(PROJECT_ROOT_DIR, '.env.local') });
dotenv.config({ path: path.join(PROJECT_ROOT_DIR, '.env') });

export const PATH_CONFIG = {
  BUILD_DIR: process.env.BUILD_PATH || path.join(PROJECT_ROOT_DIR, 'build'),
};

export const NONCE_LIST = [
  'f9bb3737-78f0-425e-a837-6b149aeebbf0',
  '83e952a7-8ad9-4bca-a809-90606fec15ba',
  'b7eff1af-8df9-4691-b117-acd9d0194181',
  'c03cac80-9b0f-445a-ac1c-5832ad0367fc',
  '516ad079-2360-4909-98e9-74f536385fcb',
  'fb80f2a1-ad72-416d-a784-217119facfc1',
  '7e76448d-39b1-43c3-8a67-0f602361640b',
  '69a894d0-bf87-4348-9195-23842eb852f2',
];

const CSP_CONFIG = {
  'default-src': [
    "'none'",
  ],
  'base-uri': [
    "'self'",
  ],
  'object-src': [
    "'none'",
  ],
  'manifest-src': [
    "'self'",
  ],
  'script-src': [
    "'self'",
    'https://www.googletagmanager.com',
    'https://tagmanager.google.com',
    'https://www.google-analytics.com',
    'https://ssl.google-analytics.com',
    'https://mc.yandex.ru',
    'https://yastatic.net',
    'https://connect.facebook.net',
    'https://www.facebook.com',
    'https://cdnjs.cloudflare.com',
  ],
  'style-src': [
    "'self'",
    'https://tagmanager.google.com',
    'https://fonts.googleapis.com',
    "'sha256-AbpHGcgLb+kRsJGnwFEktk7uzpZOCcBY74+YBdrKVGs='",
    "'sha256-47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU='",
    "'sha256-kLT9Axv4iArLogUzs03woe6J63c0WhyC7sI/S5Mebf0='",
    "'sha256-ayNONyJFVkqzjpp5z0Opp3grAUOpLTN7rDRy1jrjl0U='",
    "'sha256-8oQu3cOkcEPQbgEW6XuFmh5d3hFhtkrs45AyatY9jRE='",
    "'sha256-JtwMMM1GvjVd/iY2jcraub188Lzd/egIaHTh+z+iY2k='",
  ],
  'img-src': [
    "'self'",
    'data:',
    'www.googletagmanager.com',
    'https://ssl.gstatic.com',
    'https://www.gstatic.com',
    'https://fonts.gstatic.com',
    'https://www.google-analytics.com',
    'https://mc.yandex.ru',
    'https://www.facebook.com',
    'https://secure.gravatar.com',
  ],
  'font-src': [
    "'self'",
    'https://fonts.gstatic.com',
    'data:',
  ],
  'connect-src': [
    "'self'",
    'https://iks.oculus-university.ru',
    'https://mc.yandex.ru',
    'https://ymetrica1.com',
    'https://graph.facebook.com',
  ],
  'child-src': [
    'blob:',
    'https://mc.yandex.ru',
  ],
  'frame-src': [
    'blob:',
    process.env.REACT_APP_IKS_DOMAIN,
    'https://mc.yandex.ru',
    'https://www.facebook.com',
    'https://www.google.com',
    'https://player.vimeo.com',
  ],
  'form-action': [
    "'self'",
    'https://www.facebook.com',
  ],
  'frame-ancestors': [
    "'none'",
  ],
};

if (process.env.REACT_APP_BASE) {
  CSP_CONFIG['connect-src'].push(process.env.REACT_APP_BASE);
  CSP_CONFIG['img-src'].push(process.env.REACT_APP_BASE);
}

export { CSP_CONFIG };
