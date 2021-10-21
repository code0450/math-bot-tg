import express from 'express'

export class Server {
    private server;
    private path: string;

    constructor() {
        this.path = `https://api.telegram.org/bot${process.env.TOKEN}`;
    }

    start() {
        this.server = express();

        this.server.use(express.json());


        this.server.post(`/${process.env.TOKEN}`, async (req, res) => {
            const chatId = req.body.message.chat.id;
            const text = req.body.message.text;

            await fetch(`${this.path}/sendMessage`, {
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


        this.server.listen(443, async() => {
            console.log('is running on port ', 443);
        })
    }
}