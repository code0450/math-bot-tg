import TelegramBot from 'node-telegram-bot-api';
import { Start } from '../commands/start';

export class Bot {
    private bot;
    private static instance: Bot

    static getInstance(): Bot {
        if(!Bot.instance) {
            Bot.instance = new Bot();
        }

        return Bot.instance;
    }

    activate() {
        this.bot = new TelegramBot(process.env.TOKEN as string);
        this.bot.setWebHook(`https://talking-bot-0.herokuapp.com:443/bot${process.env.TOKEN}`);
        
        new Start().init();
    }

    getBot() {
        return this.bot
    }
}