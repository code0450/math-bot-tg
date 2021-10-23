import { Bot } from '../modules/bot';

export class GameAct {
    private bot;

    constructor() {
        this.bot = Bot.getInstance().getBot()
    }

    init() {
        this.bot.onText(/\/game/, msg => {})
    }
}