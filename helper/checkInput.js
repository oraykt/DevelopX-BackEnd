module.exports = (userInput) => {
    userInput = parseInt(userInput) || 0;
    if (!userInput)
        return;
    if (userInput < 0)
        throw "InvalidArgumentException"
}