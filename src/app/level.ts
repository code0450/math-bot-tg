export class Level {
    private static instance: Level
    private one: number[];
    private two: number[];
    private three: number[];
    private four: number[];
    private five: number[];
    private six: number[];
    private seven: number[];
    private eight: number[];
    private nine: number[];


    private constructor() {
        this.one = [1, 9, 1, 9, 1, 29, 1, 10, 1, 9, 1, 9, 1, 18, 1, 18];
        this.two = [10, 99, 1, 3, 1, 49, 1, 10, 10, 49, 10, 49, 10, 98, 10, 98];
        this.three = [10, 99, 1, 5, 1, 99, 1, 10, 10, 99, 10, 99, 10, 198, 10, 198];
        this.four = [10, 99, 1, 7, 100, 299, 1, 10, 100, 299, 100, 299, 100, 598, 100, 598];
        this.five = [10, 99, 1, 9, 100, 499, 1, 10, 100, 499, 100, 499, 100, 998, 100, 998];
        this.six = [10, 99, 10, 29, 100, 999, 1, 10, 100, 999, 100, 999, 100, 998, 100, 998];
        this.seven = [10, 99, 10, 49, 100, 999, 1, 10, 1000, 2999, 100, 2999, 1000, 1998, 1000, 1998];
        this.eight = [10, 99, 10, 69, 100, 999, 1, 99, 1000, 4999, 100, 4999, 1000, 5998, 1000, 5998];
        this.nine = [10, 99, 10, 99, 100, 999, 1, 99, 1000, 9999, 1000, 9999, 1000, 9998, 1000, 9998];
    }

    public static getInstance(): Level {
        if(!Level.instance) {
            Level.instance = new Level();
        }

        return Level.instance;
    }

    getObj() {
        return this;
    }
}