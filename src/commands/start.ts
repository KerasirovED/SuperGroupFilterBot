
import { Bot, Context } from 'grammy'
import i18next from 'i18next';

export function registerStart(bot: Bot<Context>) {
    bot.command("start", async (ctx) => {
        await ctx.reply(ctx.t("start_message"));
    });
};