
import initBot from './initBot';

export async function handler(event: any) {
    try {
        const update = JSON.parse(event.body || '{}');

        const bot = await initBot();
        await bot.handleUpdate(update);
        
        return {
            statusCode: 200,
            body: JSON.stringify({ ok: true }),
        };
    } catch (error) {
        console.error('Error processing update:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Internal Server Error' }),
        };
    }
};