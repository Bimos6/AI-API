import express from 'express';
import cors from 'cors';
import { config } from './config';
import { summarizeController } from './controllers/summarize.controller';
import { sentimentController } from './controllers/sentiment.controller';
import { keywordsController } from './controllers/keywords.controller';

const app = express();

app.use(cors());
app.use(express.json({ limit: '1mb' }));

app.get('/health', (req, res) => {
    res.json({ 
        status: 'ok', 
        service: 'ai-content-assistant',
        timestamp: new Date().toISOString()
    });
});

app.post('/api/summarize', summarizeController);
app.post('/api/sentiment', sentimentController);
app.post('/api/keywords', keywordsController);

app.use((req, res) => {
    res.status(404).json({
        success: false,
        error: 'Эндпоинт не найден'
    });
});

app.listen(config.port, () => {
    console.log('🚀 Сервер запущен на http://localhost:' + config.port);
    console.log('');
    console.log('📋 Доступные эндпоинты:');
    console.log('   POST /api/summarize');
    console.log('   POST /api/sentiment');
    console.log('   POST /api/keywords');
    console.log('   GET  /health');
});