/* eslint-disable no-throw-literal */

const checkDailyLimitException = (theAmount, dailyLimit) => {
  return theAmount <= dailyLimit
}

const checkNoteUnavailableException = (theAmount, lastNote) => {
  return theAmount % lastNote === 0
}

const checkInvalidArgumentException = (theAmount) => {
  return theAmount >= 0
}

module.exports = (theAmount, lastNote, dailyLimit) => {
  if (!isNaN(theAmount)) {
    if (checkInvalidArgumentException(theAmount)) {
      if (checkDailyLimitException(theAmount, dailyLimit)) {
        if (checkNoteUnavailableException(theAmount, lastNote)) {
          return theAmount
        } else {
          throw {
            error: 'NoteUnavailableException',
            error_msg: 'Value must be in multiples of ' + lastNote
          }
        }
      } else {
        throw {
          error: 'DailyLimitException',
          error_msg: 'Daily withdrawal limit is ' + dailyLimit
        }
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
