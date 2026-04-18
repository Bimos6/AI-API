import dotenv from 'dotenv';
dotenv.config();

export const config = {
    port: process.env.PORT || 3000,
    openaiApiKey: process.env.OPENAI_API_KEY,
    openaiModel: process.env.OPENAI_MODEL || 'gpt-3.5-turbo'
};

if (!config.openaiApiKey) {
    console.error('❌ OPENAI_API_KEY не найден в .env файле');
    process.exit(1);
}

console.log('✅ Конфигурация загружена');