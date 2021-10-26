import { Bot } from '../modules/bot';

export class GameAct {
    private bot;

    constructor() {
        this.bot = Bot.getInstance().getBot()
    }

    init() {
        this.bot.onText(/\/game/, async msg => {
            await this.bot.sendGame(msg.chat.id, 'MathBot', true)
        })
    }
}