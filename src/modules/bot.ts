import TelegramBot from 'node-telegram-bot-api'

export class Bot {
    private bot;
    private options;

    constructor() {
        this.options = {
            webHook: {
                port: process.env.PORT
            }
        };
        this.bot.setWebHook('https://experiment1416-bot.herokuapp.com/' + process.env.TOKEN, {

        });
    }

    activate() {
        this.bot = new TelegramBot(process.env.TOKEN as string, this.options);
    }
}