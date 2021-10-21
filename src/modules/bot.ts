import TelegramBot from 'node-telegram-bot-api'

export class Bot {
    private bot;

    activate() {
        this.bot = new TelegramBot(process.env.TOKEN as string);
        this.bot.setWebHook('https://experiment1416-bot.herokuapp.com/bot' + process.env.TOKEN);
    }
}