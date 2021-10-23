import { Bot } from '../modules/bot';

export class HelpAct {
    private bot;

    constructor() {
        this.bot = Bot.getInstance().getBot()
    }

    init() {
        this.bot.onText(/\/game/, msg => {
            this.bot.sendMessage(msg.chat.id, 'Each level consists 10 audio questions, ' + 
                'your objective is to solve all of them in 90 seconds. ' +
                'Start from level 1 and move forward as you beat the time')
        })
    }
}