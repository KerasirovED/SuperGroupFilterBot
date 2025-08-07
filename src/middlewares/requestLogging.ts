
import "dotenv/config";
import { Context, NextFunction } from "grammy";

export async function requestLoggingMiddlaware(ctx: Context, next: NextFunction) {
    console.log(JSON.stringify(ctx, null, 4));

    await next();
}