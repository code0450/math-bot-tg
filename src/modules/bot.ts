import TelegramBot from 'node-telegram-bot-api'

export class Bot {
    private bot;
    private options;

    constructor() {
        this.options = {
            webHook: {
                port: process.env.TOKEN
            }
        };
    }

    activate() {
        this.bot = new TelegramBot(process.env.TOKEN as string, this.options);
        this.bot.setWebHook(`${process.env.APP_URL}/bot${process.env.TOKEN}`);
    }
}