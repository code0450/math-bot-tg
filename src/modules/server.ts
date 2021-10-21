import express from 'express'

export class Server {
    private server;
    private path: string;

    constructor() {
        this.path = `/${process.env.TOKEN}`;
    }

    start() {
        this.server = express();

        this.server.use(express.json());


        this.server.post(this.path, async (req, res) => {
            const chatId = req.body.message.chat.id;
            const text = req.body.message.text;

            await fetch(`https://api.telegram.org/bot${process.env.TOKEN}/sendMessage`, {
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


        this.server.listen(80, async() => {
            console.log('is running on port', 80);
        })
    }
}