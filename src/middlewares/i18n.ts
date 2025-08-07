
import { Context, NextFunction } from 'grammy';
import i18next from 'i18next';

export async function localizationMiddleware(ctx: Context, next: NextFunction) {
    const lang = ctx.from?.language_code || 'en';

    ctx.t = i18next.getFixedT(lang);

    await next();
}