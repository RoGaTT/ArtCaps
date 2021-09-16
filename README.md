# ПО
1. Node 14
2. NPM 7.15.1
3. Yarn 1.22.10

# Первичная настройка
1. `yarn` или `yarn install` для установки зависимостей

# Разработка
1. `yarn start`

# Сборка для деплоя
1. `yarn build` - всё появится в папке build
2. Сконфигурировать .env.local (общий), .env.development.local (для development) или .env.production.local (для production)
  - `REACT_APP_GTM_SCRIPT` - GTM скрипт
  - `REACT_APP_GTM_NOSCRIPT` - GTM noscript
  - `REACT_APP_BASE` - API URL (например http://localhost:8080)
  - `REACT_APP_IKS_DOMAIN` - Адрес IKS на котором лежит квест
  - `REACT_APP_IKS_APP_KEY` - APP ключ для Oculus-University
  - `REACT_APP_IKS_USER_PREFIX` - Префикс для пользователя
  - `REACT_APP_IKS_ONLY_CASE` - Квест на который будет ссылать пользователя
3. Проверка уязвимостей `yarn audit --groups dependencies`


# Работа с админкой
1. Переходим на /sign_in  
2. Вводим данные для входа, полученные от админа (сохраняется токен в куки)  
3. На странице появляются новые кнопки для управления элементами  

# Критерии успешной сборки
1. Рендерится страница
2. Нету ошибок в консоли не включая серверных 500+
3. Есть возможность попасть на /sign_in

## Список nonce
  - 'f9bb3737-78f0-425e-a837-6b149aeebbf0'  
  - '83e952a7-8ad9-4bca-a809-90606fec15ba'  
  - 'b7eff1af-8df9-4691-b117-acd9d0194181'  
  - 'c03cac80-9b0f-445a-ac1c-5832ad0367fc'  
  - '516ad079-2360-4909-98e9-74f536385fcb'  
  - 'fb80f2a1-ad72-416d-a784-217119facfc1'  
  - '7e76448d-39b1-43c3-8a67-0f602361640b'  
  - '69a894d0-bf87-4348-9195-23842eb852f2'  

## Список хэшей CSP
  - 'sha256-AbpHGcgLb+kRsJGnwFEktk7uzpZOCcBY74+YBdrKVGs='
  - 'sha256-47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU='
  - 'sha256-kLT9Axv4iArLogUzs03woe6J63c0WhyC7sI/S5Mebf0='
  - 'sha256-ayNONyJFVkqzjpp5z0Opp3grAUOpLTN7rDRy1jrjl0U='
  - 'sha256-8oQu3cOkcEPQbgEW6XuFmh5d3hFhtkrs45AyatY9jRE='
  - 'sha256-JtwMMM1GvjVd/iY2jcraub188Lzd/egIaHTh+z+iY2k='