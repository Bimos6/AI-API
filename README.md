<h1 align="center">🤖 AI Content Assistant API</h1>

<p align="center">
  <b>Микросервис для работы с текстом через искусственный интеллект</b><br>
  <i>Суммаризация • Анализ тональности • Ключевые слова</i>
</p>

<hr>

<h2>🚀 Быстрый старт</h2>

<pre><code># 1. Установка зависимостей
npm install

# 2. Создайте .env файл
cp .env.example .env

# 3. Запустите сервер
npm run dev
</code></pre>

<p>Сервер будет доступен по адресу: <b>http://localhost:3000</b></p>

<hr>

<h2>🔑 Настройка API ключа</h2>

<p>В корне проекта создайте файл <code>.env</code> и укажите ваш ключ:</p>

<pre><code>OPENAI_API_KEY=sk-ваш_ключ_здесь
OPENAI_MODEL=gpt-3.5-turbo
PORT=3000
</code></pre>

<blockquote>
  💡 <b>Бесплатные альтернативы для РФ:</b><br>
  • <b>GigaChat API</b> (Сбер) — нужен только Сбер ID<br>
  • <b>YandexGPT API</b> — работает через Yandex Cloud
</blockquote>

<hr>

<h2>🧪 Тестовый режим (без API ключа)</h2>

<p>Проект уже настроен на работу с mock-ответами.<br>
Если ключ не указан, сервер всё равно запустится и будет отдавать тестовые данные.<br>
Идеально для демонстрации и отладки.</p>

<hr>

<h2>📡 API Эндпоинты</h2>

<table border="1" cellpadding="8" cellspacing="0">
  <thead>
    <tr>
      <th>Метод</th>
      <th>Путь</th>
      <th>Описание</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>GET</code></td>
      <td><code>/health</code></td>
      <td>Проверка работоспособности сервера</td>
    </tr>
    <tr>
      <td><code>POST</code></td>
      <td><code>/api/summarize</code></td>
      <td>Сокращение длинного текста</td>
    </tr>
    <tr>
      <td><code>POST</code></td>
      <td><code>/api/sentiment</code></td>
      <td>Определение тональности (positive/negative/neutral)</td>
    </tr>
    <tr>
      <td><code>POST</code></td>
      <td><code>/api/keywords</code></td>
      <td>Извлечение ключевых слов</td>
    </tr>
  </tbody>
</table>

<hr>

<h2>📝 Примеры запросов</h2>

<h3>📄 Суммаризация текста</h3>

<pre><code>curl.exe -X POST http://localhost:3000/api/summarize ^
  -H "Content-Type: application/json" ^
  -d '{\"text\": \"TypeScript — это язык программирования со статической типизацией...\", \"maxLength\": 20}'
</code></pre>

<p><b>Ответ:</b></p>

<pre><code>{
  "success": true,
  "summary": "[MOCK] Краткое содержание (20 слов): TypeScript — это язык программирования...",
  "originalLength": 98,
  "summaryLength": 64
}
</code></pre>

<hr>

<h3>😊 Анализ тональности</h3>

<pre><code>curl.exe -X POST http://localhost:3000/api/sentiment ^
  -H "Content-Type: application/json" ^
  -d '{\"text\": \"Отличный продукт, очень доволен!\"}'
</code></pre>

<p><b>Ответ:</b></p>

<pre><code>{
  "success": true,
  "sentiment": "positive",
  "confidence": 0.95,
  "explanation": "[MOCK] Анализ выполнен в тестовом режиме"
}
</code></pre>

<hr>

<h3>🔑 Ключевые слова</h3>

<pre><code>curl.exe -X POST http://localhost:3000/api/keywords ^
  -H "Content-Type: application/json" ^
  -d '{\"text\": \"Искусственный интеллект трансформирует разработку...\", \"count\": 3}'
</code></pre>

<p><b>Ответ:</b></p>

<pre><code>{
  "success": true,
  "keywords": [
    { "word": "Искусственный", "relevance": 0.9 },
    { "word": "интеллект", "relevance": 0.9 },
    { "word": "трансформирует", "relevance": 0.9 }
  ]
}
</code></pre>

<hr>

<h3>💚 Проверка здоровья</h3>

<pre><code>curl.exe http://localhost:3000/health
</code></pre>

<p><b>Ответ:</b></p>

<pre><code>{
  "status": "ok",
  "service": "ai-content-assistant",
  "timestamp": "2026-04-19T12:34:56.789Z"
}
</code></pre>

<hr>

<h2>🛠 Технологии</h2>

<table border="1" cellpadding="8" cellspacing="0">
  <thead>
    <tr>
      <th>Технология</th>
      <th>Назначение</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><b>TypeScript</b></td>
      <td>Типизированный JavaScript</td>
    </tr>
    <tr>
      <td><b>Express.js</b></td>
      <td>Веб-фреймворк для Node.js</td>
    </tr>
    <tr>
      <td><b>Zod</b></td>
      <td>Валидация входящих запросов</td>
    </tr>
    <tr>
      <td><b>OpenAI API</b></td>
      <td>Работа с языковыми моделями</td>
    </tr>
  </tbody>
</table>

<hr>

<h2>📁 Структура проекта</h2>

<pre>
src/
├── index.ts              # Точка входа в приложение
├── config.ts             # Загрузка конфигурации из .env
├── types/
│   └── index.ts          # TypeScript типы и Zod схемы
├── services/
│   └── ai.service.ts     # Сервис для работы с AI (mock/real)
├── controllers/
│   ├── summarize.controller.ts   # Обработчик суммаризации
│   ├── sentiment.controller.ts   # Обработчик анализа тональности
│   └── keywords.controller.ts    # Обработчик ключевых слов
└── utils/
    └── prompts.ts        # Промпты для языковой модели
</pre>

<hr>
