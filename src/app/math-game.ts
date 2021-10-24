import { One } from './levels/one'

export class MathGame {
    

    generateMathProblem(level) {

        switch(level.number) {
            case 1:
                return One.getInstance().generate();
            case 2:
                return ;
            case 3:
                return ;
            case 4:
                return ;
            case 5:
                return ;
            case 6:
                return ;
            case 7:
                return ;
            case 8:
                return ;
            case 9:
                return ;
        }
    }
}