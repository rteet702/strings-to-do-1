const removeBlanks = (string) => {
    let returnString = "";
    for (const char of string) {
        if (char !== " ") {
            returnString += char;
        }
    }
    return returnString;
};

const getDigits = (string) => {
    let returnString = "";
    for (const char of string) {
        if (!isNaN(char)) {
            returnString += Number(char);
        }
    }
    return returnString;
};

const acronym = (string) => {
    const splitString = string.split(" ");
    let returnString = "";
    for (const word of splitString) {
        returnString += word[0].toUpperCase();
    }
    return returnString;
};

const countNonSpaces = (string) => {
    let count = 0;
    for (const char of string) {
        if (char !== " ") {
            count++;
        }
    }
    return count;
};

const removeShorterStrings = (array, length) => {
    const returnArray = [];
    for (const string of array) {
        if (string.length >= length) {
            returnArray.push(string);
        }
    }
    return returnArray;
};

console.log(removeBlanks("This is a test"));
console.log(getDigits("Thi3s 5is a6test"));
console.log(acronym("Thi3s 5is - a6test"));
console.log(countNonSpaces("this equals 12"));
console.log(
    removeShorterStrings(
        ["Good morning", "sunshine", "the", "Earth", "says", "hello"],
        4
    )
);
