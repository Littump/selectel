# Selectel Hackathon — платформа для приютов и питомцев

Веб-приложение для учёта животных в приютах, поиска питомцев и вспомогательных сервисов (в т.ч. ML-классификация).  
**Стек:** Django REST, PostgreSQL, React (TypeScript), Docker, CI (GitHub Actions).

## Возможности

- Учёт пользователей и профилей питомцев
- REST API с документацией (Swagger / drf-yasg)
- ML-модуль (пример: классификация спама/контента)

## Быстрый старт

```bash
cd infra-local   # или infra — см. compose в репозитории
docker compose up --build
```

Детали окружения — в `infra-local/docker-compose.yml` и `infra/docker-compose.yml`.

## Структура репозитория

- `backend/` — Django-проект (`manage.py`, приложения `users`, `pets`, `ml`)
- `frontend/` — клиент на React
- `infra/`, `infra-local/` — Docker Compose для деплоя и локальной разработки

## Ссылка

Репозиторий: [github.com/Littump/selectel](https://github.com/Littump/selectel)

## Авторы

Команда хакатона Selectel — см. историю коммитов и вклад участников в репозитории.
