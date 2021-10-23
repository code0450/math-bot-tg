import { Bot } from '../modules/bot';

export class HelpAct {
    private bot;

    constructor() {
        this.bot = Bot.getInstance().getBot()
    }

    init() {
        this.bot.onText(/\/help/, msg => {
            this.bot.sendMessage(msg.chat.id, 'Each level consists of 10 audio questions, ' + 
                'your objective is to solve all of them in 90 seconds. ' +
                'Start from the level 1 and move on as you beat the time')
        })
    }
}