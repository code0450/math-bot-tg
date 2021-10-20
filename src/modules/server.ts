import express from 'express'

export class Server {
    private server;
    private path: string;
    private telegram_api: string;

    constructor() {
        this.server = express();
        this.path = `/bot${process.env.TOKEN}`;
        this.telegram_api = `https://api.telegram.org/bot${process.env.TOKEN}`;
    }

    start() {
        this.server.use(express.json());


        this.server.post(this.path, async (req, res) => {
            const chatId = req.body.message.chat.id;
            const text = req.body.message.text;

            await fetch(`${this.telegram_api}/sendMessage`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    chat_id: chatId,
                    text: text
                })
            }) 
        })


        this.server.listen(8443, async() => {
            console.log('is running on port ', 8443);
        })
    }
}