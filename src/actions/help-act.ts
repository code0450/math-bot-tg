import { Bot } from '../modules/bot';

export class HelpAct {
    private bot;

    constructor() {
        this.bot = Bot.getInstance().getBot()
    }

    init() {
        this.bot.onText(/\/help/, async msg => {
            await this.bot.sendMessage(msg.chat.id, 'Each level consists of audio questions, ' + 
                'your objective is to solve at least 10 of them. ' +
                'Start from the level 1 and move on as you develop the skill.')
        })
    }
}