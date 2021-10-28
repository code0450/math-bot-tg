import { Bot } from '../modules/bot';

export class StartAct {
    private bot;

    constructor() {
        this.bot = Bot.getInstance().getBot()
    }

    init() {
        this.bot.onText(/\/start/,async msg => {
            await this.bot.sendMessage(msg.chat.id, 'I will help you to improve your arithmetic skills.');
        })
    }
}