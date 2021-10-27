import { Bot } from '../modules/bot';

export class GameAct {
    private bot;
    private levelOptions;

    constructor() {
        this.bot = Bot.getInstance().getBot();
        this.levelOptions = {
            reply_markup: JSON.stringify({
                inline_keyboard: [
                    [{text: '1', callback_data: '1'}, {text: '2', callback_data: '2'}, {text: '3', callback_data: '3'}],
                    [{text: '4', callback_data: '4'}, {text: '5', callback_data: '5'}, {text: '6', callback_data: '6'}],
                    [{text: '7', callback_data: '7'}, {text: '8', callback_data: '8'}, {text: '9', callback_data: '9'}]
                ]
            })
        }
    }

    init() {
        this.bot.onText(/\/game/, async msg => {
            await this.bot.sendMessage(msg.chat.id, 'Choose your level', this.levelOptions);
        })
    }
}