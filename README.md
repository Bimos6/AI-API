# AI Content Assistant API

Микросервис для работы с текстом с использованием OpenAI API.

## 🚀 Возможности

| Эндпоинт | Описание |
|----------|----------|
| `POST /api/summarize` | Сокращение длинных текстов |
| `POST /api/sentiment` | Анализ тональности текста |
| `POST /api/keywords` | Извлечение ключевых слов |
| `GET /health` | Проверка работоспособности |

## 🛠 Технологии

- **TypeScript** — строгая типизация
- **Express.js** — веб-фреймворк
- **OpenAI API** — GPT-3.5-turbo
- **Zod** — валидация запросов

## 📦 Установка

```bash
git clone https://github.com/yourusername/ai-content-assistant.git
cd ai-content-assistant
npm install
cp .env.example .env
# Добавьте OPENAI_API_KEY в .env