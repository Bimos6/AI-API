export class AIService {
    
    static async summarize(text: string, maxWords: number): Promise<string> {
        await this.delay(300);
        
        // Возвращаем заглушку
        const words = text.split(' ').slice(0, maxWords).join(' ');
        return `[MOCK] Краткое содержание (${maxWords} слов): ${words}...`;
    }

    static async analyzeSentiment(text: string): Promise<{
        sentiment: 'positive' | 'negative' | 'neutral';
        confidence: number;
        explanation: string;
    }> {
        await this.delay(200);
        
        const isPositive = text.includes('отлич') || text.includes('хорош') || text.includes('👍');
        const isNegative = text.includes('плох') || text.includes('ужас') || text.includes('👎');
        
        return {
            sentiment: isPositive ? 'positive' : isNegative ? 'negative' : 'neutral',
            confidence: 0.95,
            explanation: '[MOCK] Анализ выполнен в тестовом режиме'
        };
    }

    static async extractKeywords(text: string, count: number): Promise<Array<{ word: string; relevance: number }>> {
        await this.delay(250);
        
        const words = text.split(' ')
            .filter(w => w.length > 3)
            .slice(0, count)
            .map(word => ({ word, relevance: 0.9 }));
            
        return words.length ? words : [{ word: '[MOCK] тестовое_слово', relevance: 0.5 }];
    }

    private static delay(ms: number): Promise<void> {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}