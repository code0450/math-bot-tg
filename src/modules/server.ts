import express from 'express'

export class Server {
    private server;
    private path: string;

    constructor() {
        this.path = `/bot${process.env.TOKEN}`;
    }

    start() {
        this.server = express();

        this.server.use(express.json());


        this.server.post(this.path, (req, res) => {
            console.log(req.body);
            res.sendStatus(200);
            res.end();
        })


        this.server.listen(process.env.PORT, async() => {
            console.log('is running on port', process.env.PORT);
        })
    }
}