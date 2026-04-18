import { Request, Response } from 'express';
import { AIService } from '../services/ai.service';
import { SummarizeSchema, SummarizeResponse } from '../types';

export async function summarizeController(req: Request, res: Response) {
    const validation = SummarizeSchema.safeParse(req.body);
    
    if (!validation.success) {
        return res.status(400).json({
            success: false,
            error: validation.error.errors[0].message
        });
    }

    const { text, maxLength } = validation.data;

    try {
        const summary = await AIService.summarize(text, maxLength);
        
        const response: SummarizeResponse = {
            success: true,
            summary,
            originalLength: text.length,
            summaryLength: summary.length
        };

        res.json(response);
    } catch (error) {
        console.error('Summarize error:', error);
        res.status(500).json({
            success: false,
            error: 'Ошибка при обработке запроса'
        });
    }
}