const codeLen = 5
function sample(array) {
  const index = Math.floor(Math.random() * array.length)
  return array[index]
}
// define genShortUrl function
function genShortCode() {
  // define things user might want
  const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz"
  const upperCaseLetters = lowerCaseLetters.toUpperCase()
  const numbers = "1234567890"

  let collection = (lowerCaseLetters + upperCaseLetters + numbers).split("")

  // start generating code
  let code = ""
  for (let i = 0; i < codeLen; i++) {
    code += sample(collection)
  }

  // return the generated code
  return code
}

module.exports = genShortCode
