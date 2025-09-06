
import initBot from "./initBot";

async function main() {
    const bot = await initBot();
    await bot.start();
    console.log("Bot is running...");
}

main();