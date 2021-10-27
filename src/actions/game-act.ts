import { Bot } from '../modules/bot';

export class GameAct {
    private bot;
    private levelOptions;

    constructor() {
        this.bot = Bot.getInstance().getBot();
        this.levelOptions = {
            reply_markup: JSON.stringify({
                inline_keyboard: [
                    [{text: '1', callback_data: 'firstLevel'}, {text: '2', callback_data: 'secondLevel'}, {text: '3', callback_data: 'thirdLevel'}],
                    [{text: '4', callback_data: 'fourthLevel'}, {text: '5', callback_data: 'fifthLevel'}, {text: '6', callback_data: 'sixthLevel'}],
                    [{text: '7', callback_data: 'seventhLevel'}, {text: '8', callback_data: 'eighthLevel'}, {text: '9', callback_data: 'ninethLevel'}]
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