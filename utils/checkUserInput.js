/* eslint-disable no-throw-literal */
module.exports = (userInput, lastNote) => {
  if (!isNaN(userInput)) {
    if (userInput === 0) {
      throw 'Empty Set'
    }
    if (userInput > 0 && userInput <= 10000) {
      if (userInput % lastNote === 0) {
        return userInput
      } else {
        throw 'NoteUnavailableException'
      }
    }
    if (userInput > 10000) {
      throw 'Max Limit: 10000'
    } else {
      throw 'InvalidArgumentException'
    }
  } else {
    throw 'Just Type Numbers Please'
  }
}
