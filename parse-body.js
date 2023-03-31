function firstStep(input) {
  // Your code here
  return input.split('&')
}

function secondStep(input) {
  // Your code here
  return input.map(string => string.split('='))
}

function thirdStep(input) {
  // Your code here
  return input.map(array => array.map(string => string.replace(/[+]/i, ' ')))
}

function fourthStep(input) {
  // Your code here
  return input.map(arr => arr.map(string => decodeURIComponent(string)))
}

function fifthStep(input) {
  // Your code here
  let obj = {
    
  }
  
  input.forEach(arr => {
    obj[arr[0]] = arr[1]
  })

  return obj
}

function parseBody(str) {
  // Your code here
  let obj = fifthStep(fourthStep(thirdStep(secondStep(firstStep(str)))))
  return obj
}

/******************************************************************************/
/******************* DO NOT CHANGE THE CODE BELOW THIS LINE *******************/

module.exports = {
  firstStep,
  secondStep,
  thirdStep,
  fourthStep,
  fifthStep,
  parseBody
};