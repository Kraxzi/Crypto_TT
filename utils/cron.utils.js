const cronUtils = {
  generateCronExpression: (interval) => {
    const seconds = Math.floor(interval / 100)
    if (seconds > 84600) {
      throw new Error('Please, try another interval')
    }
    return `*/${seconds} * * * * *`
  }
}

module.exports = cronUtils