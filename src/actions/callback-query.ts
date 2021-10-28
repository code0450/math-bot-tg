import { Bot } from '../modules/bot';
import { Speech } from '../app/modules/text-speech';

export class CallbackQuery {
    private bot;

    constructor() {
        this.bot = Bot.getInstance().getBot()
    }

    init() {
        this.bot.on('callback_query', async query => {
            let audio = await Speech.getInstance().generate('this is an amazing test');
            //await this.bot.sendAudio(query.message.id, audio)
        });
    }
}