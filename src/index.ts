import { Bot } from './modules/bot'
import { Server } from './modules/server'


const bot = new Bot();
bot.activate();
const server = new Server();
server.start();