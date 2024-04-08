#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000;
let myPin = 44331;
let pinAnswer = await inquirer.prompt([
    {
        message: "enter your pin number",
        name: "pin",
        type: "number",
    },
]);
console.log(pinAnswer.pin);
if (pinAnswer.pin === myPin) {
    console.log("Gongratulation you'r pin is correct");
    let amountAns = await inquirer.prompt([
        {
            name: "operation",
            message: "please select option",
            type: "list",
            choices: ["withdraw", "balance", "fastcash", "deposit", "other"],
        },
    ]);
    if (amountAns.operation === "withdraw") {
        let operation = await inquirer.prompt([
            {
                name: "amount",
                message: "enter amount",
                type: "number",
            },
        ]);
        if (operation.amount > myBalance) {
            console.log("you dont have such amount");
        }
        else if (operation.amount <= myBalance) {
            myBalance -= operation.amount;
            console.log("you'r remainig balance is" + myBalance);
        }
        +986;
    }
    else if (amountAns.operation === "balance") {
        console.log(`you,r current balance is ${myBalance}`);
    }
    else if (amountAns.operation === "fastcash") {
        let optionAns = await inquirer.prompt([
            {
                name: "amountns",
                message: "please select the amount you want to withdraw",
                type: "list",
                choices: [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000],
            },
        ]);
        myBalance -= optionAns.amountns;
        console.log("you'r remainnig balance is" + myBalance);
    }
    else if (amountAns.operation === "deposit") {
        let value = await inquirer.prompt([
            {
                name: "deposit",
                message: "enter the amount you want to deposit",
                type: "number",
            },
        ]);
        (myBalance += value.deposit),
            console.log(`you'r balance is now ${myBalance}`);
    }
    else if (amountAns.operation === "other") {
        let answer = await inquirer.prompt([
            {
                message: "select the option",
                type: "list",
                name: "value",
                choices: ["cash inquiry", "details of account"],
            },
        ]);
        if (answer.value === "details of account") {
            console.log("your pin number is" + myPin);
            console.log("ypur balance is" + myBalance);
        }
        if (answer.value === "cash inquiry") {
            console.log("do you want a slip");
            let zip = await inquirer.prompt([
                {
                    name: "select",
                    type: "list",
                    message: "select option",
                    choices: ["YES", "NO"],
                },
            ]);
        }
        if (answer.select === "YES") {
            console.log("here is you'r slip");
        }
    }
}
else {
    console.log("lnvalid password");
}
