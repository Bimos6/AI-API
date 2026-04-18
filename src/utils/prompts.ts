export const prompts = {
    summarize: (text: string, maxWords: number) => `
Сделай краткое содержание следующего текста.
Ограничение: не более ${maxWords} слов.
Будь лаконичным, передай только суть.

Текст:
${text}
`,

    sentiment: (text: string) => `
Проанализируй тональность текста и верни ответ в JSON формате.

Правила:
- sentiment: только "positive", "negative" или "neutral"
- confidence: число от 0 до 1
- explanation: краткое пояснение на русском языке (1 предложение)

Текст: "${text}"

Ответ должен быть строго в формате JSON:
{"sentiment": "...", "confidence": 0.0, "explanation": "..."}
`,

    keywords: (text: string, count: number) => `
Извлеки ${count} ключевых слов или фраз из текста.
Верни ответ в JSON формате: массив объектов с полями "word" и "relevance" (число от 0 до 1).

Пример ответа:
[{"word": "пример", "relevance": 0.95}]

Текст:
${text}
`
};