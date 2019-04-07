/* eslint-disable no-throw-literal */
module.exports = (userInput, lastNote, dailyLimit) => {
  if (!isNaN(userInput)) {
    if (userInput >= 0 && userInput <= dailyLimit) {
      if (userInput % lastNote === 0) {
        return userInput
      } else {
        throw {
          error: 'NoteUnavailableException',
          error_msg: 'Value must be in multiples of ' + lastNote
        }
      }
    }
    if (userInput > dailyLimit) {
      throw {
        error: 'DailyLimitException',
        error_msg: 'Daily withdrawal limit is ' + dailyLimit
      }
    } else {
      throw {
        error: 'InvalidArgumentException',
        error_msg: 'Value more than 0 and multiples of ' + lastNote
      }
    }
  } else {
    throw {
      error: 'InvalidArgumentException',
      error_msg: 'Just Type Numbers!'
    }
  }
}
