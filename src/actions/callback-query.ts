import { Bot } from '../modules/bot';

export class CallbackQuery {
    private bot;

    constructor() {
        this.bot = Bot.getInstance().getBot()
    }

    init() {
        this.bot.on('callback_query', async query => {
            let audio = getAudio(query.data);
            await this.bot.sendAudio(query.message.id, audio)
        });
    }
}