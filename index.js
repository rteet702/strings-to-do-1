const removeBlanks = (string) => {
    let returnString = "";
    for (const char of string) {
        if (char !== " ") {
            returnString += char;
        }
    }
    return returnString;
};

console.log(removeBlanks("This is a test"));
