const firstNameInput = document.getElementById('first')
const lastNameInput = document.getElementById('last')
const emailInput = document.getElementById('email')
const passwordInput = document.getElementById('password')

const firstErrorElement = document.getElementById('firstError')
const lastErrorElement = document.getElementById('lastError')
const emailErrorElement = document.getElementById('emailError')
const passwordErrorElement = document.getElementById('passwordError')

const firstIconElement = document.getElementById('firstIcon')
const lastIconElement = document.getElementById('lastIcon')
const emailIconElement = document.getElementById('emailIcon')
const passwordIconElement = document.getElementById('passwordIcon')

const form = document.getElementById('form')

form.addEventListener('submit', submitForm)

function submitForm(e) {
  e.preventDefault()

  checkFirstName()

  checkLastName()

  checkEmail()

  checkPassword()
}

function checkFirstName() {
  if (firstNameInput.value.trim() === '') {
    firstNameInput.classList.add('error')
    firstErrorElement.classList.add('show')
    firstIconElement.classList.add('show')
    firstErrorElement.innerText = 'First name cannot be empty'
  } else {
    firstNameInput.classList.remove('error')
    firstErrorElement.classList.remove('show')
    firstIconElement.classList.remove('show')
  }
}

function checkLastName() {
  if (lastNameInput.value.trim() === '') {
    lastNameInput.classList.add('error')
    lastErrorElement.classList.add('show')
    lastIconElement.classList.add('show')
    lastErrorElement.innerText = 'Last name cannot be empty'
  } else {
    lastNameInput.classList.remove('error')
    lastErrorElement.classList.remove('show')
    lastIconElement.classList.remove('show')
  }
}

function checkEmail() {
  if (emailInput.value.trim() === '') {
    emailInput.classList.add('error')
    emailErrorElement.classList.add('show')
    emailIconElement.classList.add('show')
    emailErrorElement.innerText = 'Email cannot be empty'
  } else {
    emailInput.classList.remove('error')
    emailErrorElement.classList.remove('show')
    emailIconElement.classList.remove('show')
  }
}

function checkPassword() {
  if (passwordInput.value.trim() === '') {
    passwordInput.classList.add('error')
    passwordErrorElement.classList.add('show')
    passwordIconElement.classList.add('show')
    passwordErrorElement.innerText = 'Password cannot be empty'
  } else {
    passwordInput.classList.remove('error')
    passwordErrorElement.classList.remove('show')
    passwordIconElement.classList.remove('show')
  }
}