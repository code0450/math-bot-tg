import { Bot } from '../modules/bot';

export class CallbackQuery {
    private bot;

    constructor() {
        this.bot = Bot.getInstance().getBot()
    }

    init() {
        this.bot.on('callback_query', async msg => {
            console.log(msg.chat.id, msg.data)
        });
        this.bot.on('callback_query', async callback_query => {
            await this.bot.answerCallbackQuery(callback_query.id, {url: `${process.env.URL}`});
        })
        this.bot.on('callback_query', async callback_query => {
            await this.bot.answerCallbackQuery(callback_query.id, {url: `${process.env.URL}`});
        })
        this.bot.on('callback_query', async callback_query => {
            await this.bot.answerCallbackQuery(callback_query.id, {url: `${process.env.URL}`});
        })
        this.bot.on('callback_query', async callback_query => {
            await this.bot.answerCallbackQuery(callback_query.id, {url: `${process.env.URL}`});
        })
        this.bot.on('callback_query', async callback_query => {
            await this.bot.answerCallbackQuery(callback_query.id, {url: `${process.env.URL}`});
        })
        this.bot.on('callback_query', async callback_query => {
            await this.bot.answerCallbackQuery(callback_query.id, {url: `${process.env.URL}`});
        })
        this.bot.on('callback_query', async callback_query => {
            await this.bot.answerCallbackQuery(callback_query.id, {url: `${process.env.URL}`});
        })
        this.bot.on('callback_query', async callback_query => {
            await this.bot.answerCallbackQuery(callback_query.id, {url: `${process.env.URL}`});
        })
    }
}