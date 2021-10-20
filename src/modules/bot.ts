import TelegramBot from 'node-telegram-bot-api'
import express from 'express'

class Bot {
    private bot;

    initialize() {
        this.bot = new TelegramBot(process.env.TOKEN as string);
        this.bot.setWebHook()
    }
}