# Тестовый проект для практики с Webpack

## Описание проекта: загрузка изображения с сервера с целью отлайкать.
## Так же можно редактировать профиль, добавлять/удалять картинки.

### Инструкция:
1. Для скачивания файла в Терминале запустите команду git clone https://github.com/marityz/sprint11-webpack.git 
2. Для начала нужно проверить на месте ли NPM? 
 Введите команду в терминале npm -v и если увидите версию, то можно совешать последующие шаги
3. Для настройки окружения и установки зависимостей поочередно введите в Терминале команды:
    - npm i webpack webpack-cli webpack-dev-server --save-dev
    - npm i mini-css-extract-plugin html-webpack-plugin webpack-md5-hash -D
    - npm i css-loader file-loader image-webpack-loader style-loader --save-dev
    - npm i babel-loader @babel/cli @babel/core @babel/preset-env --save-dev
    - npm i autoprefixer cssnano postcss-loader --save-dev
    - npm i core-js@3.4.1 babel-polyfill --save
4. Для сборки dev:
    - npm run dev
5. Для сборки prod:
    - npm run build 
6. Для публикации на github pages:
    - в файле package.json в пункте "homepage" укажите ссылку на репозиторий в формате https://имя.github.io/название_репозитория/
    - запустите команду npm run deploy

### v0.0.1 

### Технологии:
Html, Css, Js.

[Ссылка на проект](https://marityz.github.io/sprint11-webpack/)