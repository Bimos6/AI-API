import { Request, Response } from 'express';
import { AIService } from '../services/ai.service';
import { KeywordsSchema, KeywordsResponse } from '../types';

export async function keywordsController(req: Request, res: Response) {
    const validation = KeywordsSchema.safeParse(req.body);
    
    if (!validation.success) {
        return res.status(400).json({
            success: false,
            error: validation.error.errors[0].message
        });
    }

    const { text, count } = validation.data;

    try {
        const keywords = await AIService.extractKeywords(text, count);
        
        const response: KeywordsResponse = {
            success: true,
            keywords
        };

        res.json(response);
    } catch (error) {
        console.error('Keywords error:', error);
        res.status(500).json({
            success: false,
            error: 'Ошибка при извлечении ключевых слов'
        });
    }
}