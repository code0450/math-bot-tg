import { Bot } from '../modules/bot';
import { MathGame } from '../app/math-game';

export class CallbackQuery {
    private bot;

    constructor() {
        this.bot = Bot.getInstance().getBot()
    }

    init() {
        this.bot.on('callback_query', async query => {
            const audio = await MathGame.getInstance().generateAudio(query.data, query.message.chat.id);
            await this.bot.sendVoice(query.message.chat.id, audio, {
                reply_markup: JSON.stringify({
                    inline_keyboard: [
                        [{text: 'Next question', callback_data: query.data}],
                    ]
                })
            });
        });
    }
}