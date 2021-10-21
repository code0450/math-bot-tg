import TelegramBot from 'node-telegram-bot-api'

export class Bot {
    private bot;
    private options;

    
    activate() {
        this.bot = new TelegramBot(process.env.TOKEN as string, this.options);
        this.bot.setWebHook(`https://botn12.herokuapp.com:443/bot${process.env.TOKEN}`);
    }
}