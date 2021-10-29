// import { Bot } from '../modules/bot';
// import { MathGame } from '../app/math-game';

// export class GameAnswerAct {
//     private bot;

//     constructor() {
//         this.bot = Bot.getInstance().getBot();
//     }

//     init() {
//         this.bot.onText(/\d+/, async msg => {
//             const anwer = MathGame.getInstance().
//             await this.bot.sendMessage(msg.chat.id, 'Choose your level', this.levelOptions);
//         })
//     }
// }