import { Speech } from "./modules/text-speech";

export class MathGame {
    private static instance: MathGame


    private constructor() { }

    public static getInstance() {
        if(!MathGame.instance) {
            MathGame.instance = new MathGame();
        }

        return MathGame.instance;
    }

    generateAudio(level) {
        
        Speech.getInstance().generate()
    }


    generateMathProblem(levelArr) {

        switch(this.getRandomNumber(1, 5)) {
            case 1:
                return this.generateMultiplication(levelArr)
            case 2:
                return this.generateDivision(levelArr);
            case 3:
                return this.generateAddition(levelArr);
            case 4:
                return this.generateSubtraction(levelArr);
            case 5:
                return this.generateMultiplication(levelArr);
        }
    }

    private getRandomNumber(min, max) {
        return Math.floor(min + Math.random() * (max + 1 - min))
    }

    private generateMultiplication(level) {

    }

    private generateDivision() {

    }

    private generateAddition() {

    }

    private generateSubtraction() {

    }
}