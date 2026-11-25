# КТ 3 CI CD для Node.js

Локальный запуск

```sh
npm ci
npm run lint
npm test
npm start
```

`GET /` возвращает `KT3 App`. `GET /health` возвращает `{"status":"ok"}`.

В GitHub Actions работа `lint` проверяет код, `test` запускает Jest и проверяет подключение к PostgreSQL. Публикация Docker-образа с тегами `latest` и SHA выполняется после успешных проверок при push в `main`.
