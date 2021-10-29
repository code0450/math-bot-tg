import { Bot } from './modules/bot'
import { Server } from './modules/server'
import { Database } from './modules/db';


const bot = Bot.getInstance();
bot.activate();

const server = new Server();
server.start();

const database = Database.getInstance();
database.start().catch(console.dir);