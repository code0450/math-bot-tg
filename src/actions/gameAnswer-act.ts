import { Bot } from '../modules/bot';
import { MathGame } from '../app/math-game';

export class GameAnswerAct {
    private bot;

    constructor() {
        this.bot = Bot.getInstance().getBot();
    }

    init() {
        this.bot.onText(/\d+/, async msg => {
            const answer = MathGame.getInstance().receiveAnswer(msg.chat.id);
            if(msg.text == answer) {
                await this.bot.sendMessage(msg.chat.id, 'Incorrect, try again');
            } else {
                await this.bot.sendMessage(msg.chat.id, 'Correct');
            }
        })
    }
}