/*-------------------------------- Constants --------------------------------*/

const addition = '+'
const division = '/'
const subtraction = '-'
const MULTIPLICATION = '*'

/*-------------------------------- Variables --------------------------------*/

let currentInput = ''
let previousInput = ''
let operator = ''

/*------------------------ Cached Element References ------------------------*/

const display = document.querySelector('.display')
const calculator = document.querySelector('#calculator')

/*----------------------------- Event Listeners -----------------------------*/

calculator.addEventListener('click', (event) => {
  const target = event.target

  if (target.classList.contains('number')) {
    currentInput += target.innerText
    display.innerText = currentInput
  }

  if (target.classList.contains('operator')) {
    if (currentInput) {
      previousInput = currentInput
      currentInput = ''
      operator = target.innerText
    }
  }

  if (target.classList.contains('equals')) {
    if (previousInput && currentInput) {
      const result = calculate(previousInput, currentInput, operator)
      display.innerText = result

      previousInput = ''
      currentInput = ''
      operator = ''
    }
  }

  if (target.classList.contains('clear')) {
    currentInput = ''
    previousInput = ''
    operator = ''
    display.innerText = ''
  }
})

/*-------------------------------- Functions --------------------------------*/

function calculate(num1, num2, operator) {
  num1 = parseFloat(num1)
  num2 = parseFloat(num2)

  switch (operator) {
    case ADDITION:
      return num1 + num2
    case SUBTRACTION:
      return num1 - num2
    case MULTIPLICATION:
      return num1 * num2
    case DIVISION:
      return num1 / num2
    default:
      return ''
  }
}
