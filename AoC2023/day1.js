const fs = require('fs');

const numberMap = {
    'one': 1,
    'two': 2,
    'three': 3,
    'four': 4,
    'five': 5,
    'six': 6,
    'seven': 7,
    'eight': 8,
    'nine': 9,
    // 'zero': 0,
}

function convertToNumber(str) {
    let newStr = str.split("");
    for (const key in numberMap) {
        let substring = key;

        while (newStr.join("").indexOf(substring) !== -1) {
            newStr.splice(newStr.join("").indexOf(substring), substring.length, numberMap[substring])
        }
    }

    // console.log(newStr.join(""));
    return newStr.join("")
}

fs.readFile('./day1input.txt','utf-8',(err, data) => {
    if (err) {
        console.log(err);
    }
    let tempArr1;
    tempArr1 = data.split("\r\n");
    // console.log(tempArr1);

    for (let i = 0; i < tempArr1.length; i++) {
        tempArr1[i] = convertToNumber(tempArr1[i])
        // console.log(tempArr1[i])
    }

    let countTotal = 0;

    for (let i = 0; i < tempArr1.length; i++) { // loop for rows
        let a; // value of first number found
        let b; // running value of last number seen
    
        for (let j = 0; j < tempArr1[i].length; j++) { // loop for-each row as a string
            if (a == undefined && parseInt(tempArr1[i][j]) ) {
                a = Number(tempArr1[i][j]);
            }

            if (parseInt(tempArr1[i][j])) {
                b = Number(tempArr1[i][j]);
            }
        }

        // if (a && !b) { // this is redundant as long as the second if-statement doesn't get modified in the future.
        //     b = a;
        // }
        let text = (`${a.toString()}` + `${b.toString()}`)
        countTotal += Number(text);
        console.log(`row ${i+1}:`, text, tempArr1[i])
    }

    console.log(countTotal);
    return countTotal
})

// day1
// prompt1
//The newly-improved calibration document consists of lines of text; each line originally contained a specific calibration value that the Elves now need to recover. On each line, the calibration value can be found by combining the first digit and the last digit (in that order) to form a single two-digit number.
// For example:
// 1abc2
// pqr3stu8vwx
// a1b2c3d4e5f
// treb7uchet
// In this example, the calibration values of these four lines are 12, 38, 15, and 77. Adding these together produces 142.
// Consider your entire calibration document. What is the sum of all of the calibration values?
// prompt2
// Your calculation isn't quite right. It looks like some of the digits are actually spelled out with letters: one, two, three, four, five, six, seven, eight, and nine also count as valid "digits".
// Equipped with this new information, you now need to find the real first and last digit on each line.