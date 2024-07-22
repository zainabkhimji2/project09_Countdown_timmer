import inquirer from "inquirer";
import chalk from "chalk";
import { differenceInSeconds } from "date-fns";
differenceInSeconds;
console.log(chalk.rgb(248, 131, 121)("\t\t\t\t WELCOME TO COUNTDOWN TIMER"));
let ask = await inquirer.prompt({
    name: "userInput",
    type: "number",
    message: "please enter a number in seconds",
    validate: (input) => {
        if (isNaN(input)) {
            return "please enter a valid number";
        }
        else if (input > 60) {
            return "please enter number till 60";
        }
        else {
            return true;
        }
    }
});
let res = ask.userInput;
function startTime(val) {
    const initialTime = new Date().setSeconds(new Date().getSeconds() + val);
    const timeInterval = new Date(initialTime);
    setInterval((() => {
        const currentTime = new Date();
        const timeDiff = differenceInSeconds(timeInterval, currentTime);
        if (timeDiff <= 0) {
            console.log("TIMER HAS EXPIRED");
            process.exit();
        }
        const min = Math.floor((timeDiff % (3600 * 24)) / 3600);
        const sec = Math.floor(timeDiff % 60);
        console.log(`${min.toString().padStart(2, "0")}:${sec}`);
    }), 1000);
}
startTime(res);
