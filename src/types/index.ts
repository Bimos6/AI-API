import { z } from 'zod';

// Zod схемы для валидации
export const SummarizeSchema = z.object({
    text: z.string().min(10, 'Текст должен быть не менее 10 символов').max(10000, 'Текст слишком длинный'),
    maxLength: z.number().min(20).max(500).optional().default(100)
});

export const SentimentSchema = z.object({
    text: z.string().min(1, 'Текст не может быть пустым').max(5000)
});

export const KeywordsSchema = z.object({
    text: z.string().min(10).max(5000),
    count: z.number().min(3).max(20).optional().default(5)
});

export type SummarizeRequest = z.infer<typeof SummarizeSchema>;
export type SentimentRequest = z.infer<typeof SentimentSchema>;
export type KeywordsRequest = z.infer<typeof KeywordsSchema>;

export interface SummarizeResponse {
    success: boolean;
    summary: string;
    originalLength: number;
    summaryLength: number;
}

export interface SentimentResponse {
    success: boolean;
    sentiment: 'positive' | 'negative' | 'neutral';
    confidence: number;
    explanation: string;
}

export interface KeywordsResponse {
    success: boolean;
    keywords: Array<{
        word: string;
        relevance: number;
    }>;
}

export interface ErrorResponse {
    success: false;
    error: string;
}