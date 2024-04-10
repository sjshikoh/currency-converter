#! /usr/bin/env node
import inquirer from "inquirer";
const currency = {
    AED: 3.75,
    AUD: 1.51,
    EUR: 0.92,
    INR: 83,
    GBP: 0.79,
    PKR: 277,
    USD: 1 // base currency
};
let user_answer = await inquirer.prompt([
    {
        name: 'from',
        message: 'Enter from Currency',
        type: 'list',
        choices: ['AED', 'AUD', 'EUR', 'INR', 'GBP', 'PKR', 'USD']
    },
    {
        name: 'to',
        message: 'Enter to Currency',
        type: 'list',
        choices: ['AED', 'AUD', 'EUR', 'INR', 'GBP', 'PKR', 'USD']
    },
    {
        name: 'amount',
        message: 'Enter your amount',
        type: 'number'
    }
]);
console.log(user_answer);
let fromAmount = currency[user_answer.from];
// console.log(fromAmount);
let toAmount = currency[user_answer.to];
// console.log(toAmount);
let amount = user_answer.amount;
// console.log(amount);
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log(convertedAmount);
