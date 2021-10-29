import { Speech } from "./modules/text-speech";
import { levelMap } from "./level";
import { Database } from "../modules/db";

export class MathGame {
    private static instance: MathGame
    private collection;


    private constructor() {
        this.collection = Database.getInstance().getCollection();
    }

    public static getInstance() {
        if(!MathGame.instance) {
            MathGame.instance = new MathGame();
        }

        return MathGame.instance;
    }

    generateAudio(level, chat_id) {
        const mathProblem = this.generateMathProblem(level);
        this.collection.updateOne({"chat_id": chat_id}, {"answer": mathProblem.answer}, {upsert: true});

        return Speech.getInstance().generate(mathProblem.text)
    }

    async receiveAnswer(chat_id) {
        const document = await this.collection.findOne({"chat_id": chat_id})
        return document.answer;
    }

    private generateMathProblem(level) {

        switch(this.getRandomNumber(1, 5)) {
            case 1:
                return this.generateMultiplication(level)
            case 2:
                return this.generateDivision(level);
            case 3:
                return this.generateAddition(level);
            case 4:
                return this.generateSubtraction(level);
            case 5:
                return this.generateMultiplication(level);
        }
    }

    private getRandomNumber(min, max) {
        return Math.floor(min + Math.random() * (max + 1 - min))
    }

    private generateMultiplication(level) {
        const number1 = this.getRandomNumber(levelMap[level][0], levelMap[level][1]);
        const number2 = this.getRandomNumber(levelMap[level][2], levelMap[level][3]);

        return {
            text: `${number1} times ${number2}`,
            answer: number1 * number2
        }
    }

    private generateDivision(level) {
        const number1 = this.getRandomNumber(levelMap[level][4], levelMap[level][5]);
        const number2 = this.getRandomNumber(levelMap[level][6], levelMap[level][7]);

        if(number1 % number2 == 0) return  {
            text: `${number1} divide ${number2}`,
            answer: number1 / number2
        }
        else return this.generateDivision(level);
    }

    private generateAddition(level) {
        const number1 = this.getRandomNumber(levelMap[level][8], levelMap[level][9]);
        const number2 = this.getRandomNumber(levelMap[level][10], levelMap[level][11]);

        return {
            text: `${number1} plus ${number2}`,
            answer: number1 + number2
        }
    }

    private generateSubtraction(level) {
        const number1 = this.getRandomNumber(levelMap[level][12], levelMap[level][13]);
        const number2 = this.getRandomNumber(levelMap[level][14], levelMap[level][15]);

        if(number1 >= number2) return {
            text: `${number1} minus ${number2}`,
            answer: number1 - number2
        }
        else return this.generateDivision(level);
    }
}