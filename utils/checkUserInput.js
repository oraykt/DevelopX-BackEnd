/* eslint-disable no-throw-literal */
module.exports = (userInput) => {
  if (!isNaN(userInput)) {
    if (userInput >= 0 && userInput <= 10000) {
      return userInput
    }
    if (userInput > 10000) {
      throw 'Max Limit: 10000'
    } else {
      throw 'InvalidArgumentException'
    }
  } else {
    throw 'InvalidArgumentException'
  }
}
