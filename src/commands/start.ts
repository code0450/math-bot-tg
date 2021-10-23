import { Bot } from '../modules/bot';

export class Start {
    private bot;

    constructor() {
        this.bot = Bot.getInstance().getBot()
    }

    init() {
        this.bot.onText(/\/start/, msg => {
            this.bot.sendMessage(msg.chat.id, 'Hello, I will help you to improve your arithmetic skills.');
            this.bot.sendMessage(msg.chat.id, 'To see all commands use: /commands !')
        })
    }
}