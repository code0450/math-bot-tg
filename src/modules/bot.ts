import TelegramBot from 'node-telegram-bot-api'

export class Bot {
    private bot;
    private options;

    constructor() {
        this.options = {
            webHook: {
                port: 3548
            }
        };
    }

    activate() {
        this.bot = new TelegramBot(process.env.TOKEN as string, this.options);
        this.bot.setWebHook('https://experiment1416-bot.herokuapp.com/' + process.env.TOKEN);
    }
}