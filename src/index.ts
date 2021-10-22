import { Bot } from './modules/bot'
import { Server } from './modules/server'


const bot = Bot.getInstance();
bot.activate();
const server = new Server();
server.start();