import TelegramBot from 'node-telegram-bot-api'

class App {
    private bot;

    initialize() {
        this.bot = new TelegramBot(process.env.TOKEN as string, { polling: true });
    }
}