import { Bot } from '../modules/bot';
import { MathGame } from '../app/math-game';

export class GameAct {
    private bot;

    constructor() {
        this.bot = Bot.getInstance().getBot()
    }

    init() {
        this.bot.onText(/\/game/, msg => {})
    }
}