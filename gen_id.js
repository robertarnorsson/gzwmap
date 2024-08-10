// Run "node gen_id.js" in the terminal to generate random IDs with a prefix

const readline = require('readline');

// Function to generate a random ID
function generateRandomId(prefix, length = 6) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let randomId = '';
    for (let i = 0; i < length; i++) {
        randomId += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return `${prefix}-${randomId}`;
}

// Function to generate multiple IDs
function generateIds(prefix, count = 1, length = 6) {
    return Array.from({ length: count }, () => generateRandomId(prefix, length));
}

// Function to clean the prefix to a single uppercase letter
function cleanPrefix(input) {
    const cleaned = input.trim().toUpperCase();
    return /^[A-Z]+$/.test(cleaned) ? cleaned : null;
}

// Function to prompt user until a valid prefix is provided
function promptForPrefix(rl, callback) {
    rl.question('Enter the prefix for the IDs (single uppercase letter): ', (prefixInput) => {
        const prefix = cleanPrefix(prefixInput);
        if (prefix) {
            callback(prefix);
        } else {
            console.error('Invalid prefix. Please enter only uppercase letter.');
            promptForPrefix(rl, callback);
        }
    });
}

// Function to handle user input and generate IDs
function main() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    promptForPrefix(rl, (prefix) => {
        rl.question('Enter the number of IDs to generate (default is 1): ', (countInput) => {
            rl.question('Enter the length of the random ID part (default is 6): ', (lengthInput) => {
                const countNum = parseInt(countInput, 10) || 1;
                const lengthNum = parseInt(lengthInput, 10) || 6;
                
                const ids = generateIds(prefix, countNum, lengthNum);
                const idsString = ids.join('\n');
                
                // Output the generated IDs
                console.log('\nGenerated IDs:');
                console.log(idsString);
                
                rl.close();
            });
        });
    });
}

main();
