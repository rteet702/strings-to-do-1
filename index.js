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

console.log(removeBlanks("This is a test"));
console.log(getDigits("Thi3s 5is a6test"));
console.log(acronym("Thi3s 5is - a6test"));
