import { Speech } from "./modules/text-speech";
import { Level } from "./level";

export class MathGame {
    private static instance: MathGame
    private levelObj;


    private constructor() {
        this.levelObj = Level.getInstance().getObj();
    }

    public static getInstance() {
        if(!MathGame.instance) {
            MathGame.instance = new MathGame();
        }

        return MathGame.instance;
    }

    generateAudio(level) {
        const mathProblem = this.generateMathProblem(level);
        return Speech.getInstance().generate(mathProblem)
    }


    generateMathProblem(level) {

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
        const number1 = this.getRandomNumber(this.levelObj[level][0], this.levelObj[level][1]);
        const number2 = this.getRandomNumber(this.levelObj[level][2], this.levelObj[level][3]);

        return `${number1} times ${number2}`
    }

    private generateDivision(level) {
        const number1 = this.getRandomNumber(this.levelObj[level][4], this.levelObj[level][5]);
        const number2 = this.getRandomNumber(this.levelObj[level][6], this.levelObj[level][7]);

        if(number1 % number2 == 0) return `${number1} divide ${number2}`
        else return this.generateDivision(level);
    }

    private generateAddition(level) {
        const number1 = this.getRandomNumber(this.levelObj[level][8], this.levelObj[level][9]);
        const number2 = this.getRandomNumber(this.levelObj[level][10], this.levelObj[level][11]);

        return `${number1} plus ${number2}`
    }

    private generateSubtraction(level) {
        const number1 = this.getRandomNumber(this.levelObj[level][12], this.levelObj[level][13]);
        const number2 = this.getRandomNumber(this.levelObj[level][14], this.levelObj[level][15]);

        if(number1 >= number2) return `${number1} minus ${number2}`
        else return this.generateDivision(level);
    }
}