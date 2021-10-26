import TelegramBot from 'node-telegram-bot-api'
import { StartAct } from '../actions/start-act'
import { GameAct } from '../actions/game-act'
import { HelpAct } from '../actions/help-act'
import { CallbackQuery } from '../actions/callback-query'

export class Bot {
    private bot;
    private static instance: Bot

    private constructor() { }

    static getInstance(): Bot {
        if(!Bot.instance) {
            Bot.instance = new Bot();
        }

        return Bot.instance;
    }

    activate() {
        this.bot = new TelegramBot(process.env.TOKEN as string);
        this.bot.setWebHook(`${process.env.URL}${process.env.TOKEN}`);
        
        new StartAct().init();
        new GameAct().init();
        new HelpAct().init();
        new CallbackQuery().init();
    }

    getBot() {
        return this.bot
    }
}