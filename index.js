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

console.log(removeBlanks("This is a test"));
console.log(getDigits("Thi3s 5is a6test"));
