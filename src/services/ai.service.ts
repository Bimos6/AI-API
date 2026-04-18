import OpenAI from 'openai';
import { config } from '../config';
import { prompts } from '../utils/prompts';

const openai = new OpenAI({ apiKey: config.openaiApiKey });

export class AIService {
    
    static async summarize(text: string, maxWords: number): Promise<string> {
        const response = await openai.chat.completions.create({
            model: config.openaiModel,
            messages: [
                { role: 'system', content: 'Ты — ассистент для суммаризации текста.' },
                { role: 'user', content: prompts.summarize(text, maxWords) }
            ],
            temperature: 0.3,
            max_tokens: maxWords * 2
        });
        
        return response.choices[0]?.message?.content || '';
    }

    static async analyzeSentiment(text: string): Promise<{
        sentiment: 'positive' | 'negative' | 'neutral';
        confidence: number;
        explanation: string;
    }> {
        const response = await openai.chat.completions.create({
            model: config.openaiModel,
            messages: [
                { role: 'system', content: 'Ты — анализатор тональности текста. Отвечай строго в JSON.' },
                { role: 'user', content: prompts.sentiment(text) }
            ],
            temperature: 0.1,
            response_format: { type: 'json_object' }
        });
        
        const content = response.choices[0]?.message?.content || '{}';
        return JSON.parse(content);
    }

    static async extractKeywords(text: string, count: number): Promise<Array<{ word: string; relevance: number }>> {
        const response = await openai.chat.completions.create({
            model: config.openaiModel,
            messages: [
                { role: 'system', content: 'Ты — инструмент для извлечения ключевых слов. Отвечай строго в JSON.' },
                { role: 'user', content: prompts.keywords(text, count) }
            ],
            temperature: 0.2,
            response_format: { type: 'json_object' }
        });
        
        const content = response.choices[0]?.message?.content || '[]';
        const parsed = JSON.parse(content);
        return Array.isArray(parsed) ? parsed : parsed.keywords || [];
    }
}