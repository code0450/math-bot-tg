import { Bot } from '../modules/bot';

export class Start {
    private bot;

    constructor() {
        this.bot = Bot.getInstance().getBot()
    }

    init() {
        this.bot.onText(/\/commands/, msg => {
            this.bot.sendMessage(msg.chat.id, '/game - to launch\n' + 
                '/help - info about game');
        })
    }
}