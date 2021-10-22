import { Bot } from '../modules/bot';

export class Start {
    private bot;

    constructor() {
        this.bot = Bot.getInstance().getBot()
    }

    init() {
        this.bot.on('message', msg => {
            this.bot.sendMessage(msg.chat.id, 'super puper sssppp');
        })
    }
}