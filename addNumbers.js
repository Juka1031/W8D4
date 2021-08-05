const { read } = require('fs');
const readline = require('readline');

const reader = readline.createInterface({
    // it's okay if this part is magic; it just says that we want to
    // 1. output the prompt to the standard output (console)
    // 2. read input from the standard input (again, console)

    input: process.stdin,
    output: process.stdout
});

addNums = function(sums, numleft, cb) {
    if (numleft > 0) {
        reader.question("Enter a number: ", (numString)=> {
            let num = parseInt(numString);
            sums += num;
            console.log(sums);
            addNums(sums, numleft - 1, cb);
        });
    }
    else {
        cb(sums);
        reader.close();
    }
}

addNums(0, 3, sum => console.log(`Total Sum: ${sum}`));
