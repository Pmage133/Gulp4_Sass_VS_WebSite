Правой кнопкой на проект WebSite5 -> Open command line (default)
> npm install
Перекачивается папка WebSite5\node_modules в соответствии с необходимыми зависимостями в package.json.

Rebuild Solution
Папка packages Обновляется Nuget-ом.

Открыть Task Runner Explorer
Запустить задачу test

Основные задачи в gulpfile.js - это watcher, all_scss

Слежение за обновлением scss-файлов, перекомпиляция css в момент билда проекта.
Мы изменяем цвет c помощью sass-файла, но в момент запуска сам получается обновлённый перекомпилированный *.css 

Кстати, обновлять node модули можно из gui (в Task Runner Explorer внизу есть секция package.json, там можно запустить install) 

