// Vanila script Validation
const form = document.querySelector('#form')
const fullName = document.querySelector('#name')
const Email = document.querySelector('#email')
let orderCount = document.querySelector('#order-count').value
let Items = parseInt(orderCount)
const orderName = document.querySelector('#order-name')
const userAddress = document.querySelector('#address')
let submitBtn = document.querySelector('#submit')

form.addEventListener('submit', (event) => {
  validateForm()
  if (isFormValid() === true) {
    // form.submit()
    preventDefault()
  } else {
    event.preventDefault()
  }
})

// Validating the submission process
function isFormValid() {
  const inputContainers = form.querySelectorAll('.form-group')
  let result = true
  inputContainers.forEach((container) => {
    if (container.classList.contains('error')) {
      result = false
    }
  })
  return result
}

// Form Validation
function validateForm() {
  // UserName
  if (fullName.value.trim() == '') {
    setError(fullName, 'field must not be empty!')
  } else if (
    fullName.value.trim().length < 3 ||
    fullName.value.trim().lenghth > 20
  ) {
    setError(fullName, 'enter a valid name')
  } else {
    setSuccess(fullName)
  }

  // Email
  if (Email.value.trim() == '') {
    setError(Email, 'field must not be empty!')
  } else if (isEmailValid(Email.value)) {
    setSuccess(Email)
  } else {
    setError(Email, 'enter a valid email address!')
  }

  // OrderCount
  if (orderCount.value === '') {
    setError(orderCount, 'field must not be empty!')
  } else if (isNaN(Items)) {
    setError(orderCount, 'Select a valid number of order')
  } else {
    setSuccess(orderCount)
  }

  // UserSubject
  if (orderName.value.trim() == '') {
    setError(orderName, 'field must not be empty!')
  } else if (
    orderName.value.trim().length < 2 ||
    orderName.value.trim().lenghth > 50
  ) {
    setError(orderName, 'enter a valid name of your order!')
  } else {
    setSuccess(orderName)
  }

  // UserMsg
  if (userAddress.value.trim() == '') {
    setError(userAddress, 'field must not be empty!')
  } else if (userAddress.value.trim().length < 10) {
    setError(userAddress, 'Give your address in full!')
  } else if (userAddress.value.trim().lenghth > 500) {
    setError(userAddress, 'Address too long!')
  } else {
    setSuccess(userAddress)
  }

  // Defining the error function
  function setError(element, errorMessage) {
    const parent = element.parentElement
    if (parent.classList.contains('success')) {
      parent.classList.remove('success')
    }
    parent.classList.add('error')
    const paragraph = parent.querySelector('#error-msg')
    paragraph.textContent = errorMessage
  }

  function setSuccess(element) {
    const parent = element.parentElement
    if (parent.classList.contains('error')) {
      parent.classList.remove('error')
    }
    parent.classList.add('success')
  }

  // Email validation
  function isEmailValid(email) {
    const reg = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    return reg.test(email)
  }
}

window.onbeforeunload = () => {
  for (const form of document.getElementsByTagName('form')) {
    form.reset()
  }
}
