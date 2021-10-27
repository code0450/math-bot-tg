import { Bot } from '../modules/bot';

export class CallbackQuery {
    private bot;

    constructor() {
        this.bot = Bot.getInstance().getBot()
    }

    init() {
        this.bot.on('firstLevel', async msg => {
            await this.bot.sendMessage(msg.chat.id, '!!question!!', {
                reply_markup: JSON.stringify({
                   inline_keyboard: [
                       {text: 'Get answer', callback_data: 'the answer'}
                   ]
                })
            });
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