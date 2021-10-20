import * as dotenv from 'dotenv'
import { Bot } from './modules/bot'
import { Server } from './modules/server'

dotenv.config();
const bot = new Bot();
const server = new Server().start();