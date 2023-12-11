const fs = require('fs');

fs.readFile('./day2input.txt','utf-8',(err, data) => {
    if (err) {
        console.log(err);
    }
    let tempArr1;
    // tempArr1 = data.split("\r\n");
    tempArr1 = ["Game 1: 7 blue, 5 red; 10 red, 7 blue; 5 blue, 4 green, 15 red; 4 green, 6 red, 7 blue; 5 green, 8 blue, 4 red; 5 red, 4 blue, 3 green"]
    // console.log(tempArr1);

    let gamesCounter = 0;
    const masterGameDice = {"r": 12, "g": 13, "b": 14,};

    for (let i = 0; i < tempArr1.length; i++) {
        // tempArr1[i]
        const diceUsed = { // we'll pretend for now that it's total per game
            "r": 0,
            "g": 0,
            "b": 0,
        };

        let tempNum = "";
        let tempStr = "";
        const gameNum = i+1;
        // tempArr1[i].split("").splice(0, tempArr1[i].split("").indexOf(':')+1);
        // let test = tempArr1[i].split("");
        
        
        for (let j = 0; j < tempArr1[i].length; j++) {
            tempArr1[i] = tempArr1[i].slice(tempArr1[i].indexOf(":")+2, tempArr1[i].length);
            console.log(tempArr1[i]);
            // let test = tempArr1[i].slice(tempArr1[i].indexOf(":")+2, tempArr1[i].length);
            // console.log(test, "test");
            // tempArr1[i] = test;

            // console.log(tempArr1[i], "split")
            // tempArr1[i] = tempArr1[i].split("");

            if (parseInt(tempArr1[i][j]) && (parseInt(tempArr1[i][j+1]) || tempArr1[i][j+1] == 0)) {
                let temp = String(tempArr1[i][j]) + String(tempArr1[i][j+1]);
                tempNum = temp;
                Number(tempNum) >= 10 ? tempStr = tempArr1[i][j+3] : tempStr = tempArr1[i][j+2];
                tempArr1[i].split("").splice(0, 4)
            } else if (parseInt(tempArr1[i][j]) && tempArr1[i][j+1] == " ") {
                tempNum += tempArr1[i][j]
                tempStr += tempArr1[i][j+2]
                tempArr1[i].split("").splice(0, 3)
            } else if (tempArr1[i][j].match((/[A-Za-z\,\s]/)) && tempArr1[i][j]) {
                // console.log(tempArr1[i]);
                tempArr1[i].split("").splice(0, 1);

                switch (tempStr) {
                    case "r":
                    case "r ":
                        diceUsed["r"] += Number(tempNum);
                        tempNum = "";
                        tempStr = "";
                        break;
                    case "g":
                        diceUsed["g"] += Number(tempNum);
                        tempNum = "";
                        tempStr = "";
                        break;
                    case "b":
                        diceUsed["b"] += Number(tempNum);
                        tempNum = "";
                        tempStr = "";
                        break;
                    // default:
                    //     tempNum = "";
                    //     tempStr = "";
                }
            }

            console.log("num:", tempNum, "str:", tempStr);
        }
        console.log(diceUsed);

        for (const letter in diceUsed) {
            if (masterGameDice[letter] <= diceUsed[letter]) {
                gamesCounter += gameNum;
            }
        }
    }

    // console.log(gamesCounter);
    return gamesCounter;
})

// Determine which games would have been possible if the bag had been loaded with only 12 red cubes, 13 green cubes, and 14 blue cubes. What is the sum of the IDs of those games?