import { Bot } from '../modules/bot';
import { MathGame } from '../app/math-game';

export class GameAnswerAct {
    private bot;

    constructor() {
        this.bot = Bot.getInstance().getBot();
    }

    init() {
        this.bot.onText(/\d+/, async msg => {
            const answer = await MathGame.getInstance().receiveAnswer(msg.chat.id);
            console.log(answer);
            if(msg.text == answer) {
                await this.bot.sendMessage(msg.chat.id, 'Correct');
            } else {
                await this.bot.sendMessage(msg.chat.id, 'Incorrect, try again');
            }
        })
    }
}