# AKCENT GitHub Pages site

Готовый проект на React + Vite для публикации сайта на GitHub Pages.

## Локальный запуск

```bash
npm install
npm run dev
```

## Сборка

```bash
npm run build
```

Готовые файлы появятся в папке `dist`.

## Публикация на GitHub Pages

### Вариант 1 — через GitHub Actions
1. Загрузите проект в репозиторий GitHub.
2. В репозитории откройте **Settings → Pages**.
3. В разделе **Build and deployment** выберите **GitHub Actions**.
4. Сделайте `git push` в ветку `main`.
5. После этого сайт соберётся и опубликуется автоматически.

### Вариант 2 — вручную
1. Выполните `npm install`.
2. Выполните `npm run build`.
3. Загрузите содержимое папки `dist` в ветку/хостинг для публикации.

## Что внутри
- `src/App.jsx` — разметка сайта
- `src/styles.css` — стили
- `public/assets` — изображения и логотипы
- `.github/workflows/deploy.yml` — автоматическая публикация на GitHub Pages
update
