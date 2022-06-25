module.exports = (type, string) => {
  let code = 0

  if (type === 'info') {
    code = 36
  } else if (type === 'success') {
    code = 32
  } else if (type === 'warn') {
    code = 33
  } else if (type === 'error') {
    code = 31
  } else if (type === 'detail') {
    return console.info('\x1b[35m%s\x1b[0m', '        ' + string)
  }

  const date = new Date()
  const hoursNumber = date.getHours()
  const minutesNumber = date.getMinutes()

  let hoursString = String(hoursNumber)
  let minutesString = String(minutesNumber)

  if (hoursNumber <= 9) {
    hoursString = '0' + hoursString
  }
  if (minutesNumber <= 9) {
    minutesString = '0' + minutesString
  }

  console.info(`\x1b[${code}m%s\x1b[0m`, `${hoursString}:${minutesString} | ${string}`)
}