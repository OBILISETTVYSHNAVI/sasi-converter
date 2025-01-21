const { clear } = require("console");
const readline = require("readline");

// Function to convert INR to USD
function convertINRtoUSD(inrAmount, exchangeRate) {
    const usdAmount = inrAmount / exchangeRate;
    return usdAmount.toFixed(2); clear
}


function showMenu() {
    console.log("\n--- INR to USD Converter ---");
    console.log("1. Convert INR to USD");
    console.log("2. Exit");
}

    const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const fixedExchangeRate = 82.5; 

function main() {
    showMenu();
    rl.question("Choose an option: ", (option) => {
        if (option === "1") {
            rl.question("Enter the amount in INR: ", (inrAmount) => {
                const usdAmount = convertINRtoUSD(parseFloat(inrAmount), fixedExchangeRate);
                console.log(`₹${inrAmount} is approximately $${usdAmount}`);
                main(); 
            });
        } else if (option === "2") {
            console.log("Exiting the program. Goodbye!");
            rl.close();
        } else {
            console.log("Invalid option. Please try again.");
            main();
        }
    });
}
main();
