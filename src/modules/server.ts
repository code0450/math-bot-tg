import express from 'express'
import { Bot } from './bot'

export class Server {
    private server;
    private bot;


    constructor() {
        this.bot = Bot.getInstance().getBot()
    }

    start() {
        this.server = express();

        this.server.use(express.json());


        this.server.post(`/bot${process.env.TOKEN}`, (req, res) => {
            this.bot.processUpdate(req.body)
            res.sendStatus(200);
        })


        this.server.listen(process.env.PORT, () => {
            console.log('is running on port', process.env.PORT);
        })
    }
}