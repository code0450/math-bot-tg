import { Bot } from '../modules/bot';
import { MathGame } from '../app/math-game';

export class CallbackQuery {
    private bot;

    constructor() {
        this.bot = Bot.getInstance().getBot()
    }

    init() {
        this.bot.on('callback_query', async query => {
            let audio = await MathGame.getInstance().generateAudio(query.data);
            await this.bot.sendVoice(query.message.chat.id, audio);
        });
    }
}