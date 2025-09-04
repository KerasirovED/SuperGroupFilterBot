
import { Bot, Context } from "grammy";
import "dotenv/config";
import { registerStart } from './commands/start'
import { localizationMiddleware } from "./middlewares/i18n";
import { requestLoggingMiddlaware } from "./middlewares/requestLogging";
import initializeI18n from "./i18n";
import type {} from './types/context'

export default async function initBot() {
  const token = process.env.TOKEN;

  if (!token) {
      throw new Error('TOKEN environment variable is not set.');
  }

  const bot = new Bot<Context>(token);

  await initializeI18n();

  bot.use(requestLoggingMiddlaware);
  bot.use(localizationMiddleware);

  registerStart(bot);

  bot.catch((err) => {
    const ctx = err.ctx;
    console.error(`Error while handling update ${ctx.update.update_id}:`);
    const e = err.error;
    if (e instanceof Error) {
      console.error(e.message);
      console.error(e.stack);
    } else {
      console.error(e);
    }
  });

  return bot;
}