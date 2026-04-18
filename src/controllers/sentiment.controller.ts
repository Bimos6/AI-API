import { Request, Response } from 'express';
import { AIService } from '../services/ai.service';
import { SentimentSchema, SentimentResponse } from '../types';

export async function sentimentController(req: Request, res: Response) {
    const validation = SentimentSchema.safeParse(req.body);
    
    if (!validation.success) {
        return res.status(400).json({
            success: false,
            error: validation.error.errors[0].message
        });
    }

    const { text } = validation.data;

    try {
        const result = await AIService.analyzeSentiment(text);
        
        const response: SentimentResponse = {
            success: true,
            ...result
        };

        res.json(response);
    } catch (error) {
        console.error('Sentiment error:', error);
        res.status(500).json({
            success: false,
            error: 'Ошибка при анализе тональности'
        });
    }
}