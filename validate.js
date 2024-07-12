// Vanilla script Validation
const form = document.querySelector('#form');
const fullName = document.querySelector('#name');
const email = document.querySelector('#email');
const orderCount = document.querySelector('#order-count');
const orderName = document.querySelector('#order-name');
const userAddress = document.querySelector('#address');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission behavior
  validateForm();
  
  if (isFormValid()) {
    // Store data in localStorage
    localStorage.setItem('name', fullName.value.trim());
    localStorage.setItem('email', email.value.trim());
    localStorage.setItem('orderCount', orderCount.value.trim());
    localStorage.setItem('orderName', orderName.value.trim());
    localStorage.setItem('userAddress', userAddress.value.trim());

    // Redirect to success page
    window.location.href = 'success.html';
  }
});

// Validating the submission process
function isFormValid() {
  const inputContainers = form.querySelectorAll('.form-group');
  let result = true;

  inputContainers.forEach((container) => {
    if (container.classList.contains('error')) {
      result = false;
    }
  });

  return result;
}

// Form Validation
function validateForm() {
  // UserName
  if (fullName.value.trim() === '') {
    setError(fullName, 'Field must not be empty!');
  } else if (fullName.value.trim().length < 3 || fullName.value.trim().length > 20) {
    setError(fullName, 'Enter a valid name');
  } else {
    setSuccess(fullName);
  }

  // Email
  if (email.value.trim() === '') {
    setError(email, 'Field must not be empty!');
  } else if (isEmailValid(email.value)) {
    setSuccess(email);
  } else {
    setError(email, 'Enter a valid email address!');
  }

  // OrderCount
  if (orderCount.value.trim() === '') {
    setError(orderCount, 'Field must not be empty!');
  } else if (isNaN(orderCount.value) || parseInt(orderCount.value) <= 0) {
    setError(orderCount, 'Select a valid number of orders');
  } else {
    setSuccess(orderCount);
  }

  // OrderName
  if (orderName.value.trim() === '') {
    setError(orderName, 'Field must not be empty!');
  } else if (orderName.value.trim().length < 2 || orderName.value.trim().length > 50) {
    setError(orderName, 'Enter a valid name for your order!');
  } else {
    setSuccess(orderName);
  }

  // UserAddress
  if (userAddress.value.trim() === '') {
    setError(userAddress, 'Field must not be empty!');
  } else if (userAddress.value.trim().length < 10) {
    setError(userAddress, 'Give your address in full!');
  } else if (userAddress.value.trim().length > 500) {
    setError(userAddress, 'Address too long!');
  } else {
    setSuccess(userAddress);
  }
}

// Defining the error function
function setError(element, errorMessage) {
  const parent = element.parentElement;
  if (parent.classList.contains('success')) {
    parent.classList.remove('success');
  }
  parent.classList.add('error');
  const paragraph = parent.querySelector('.error-msg');
  paragraph.textContent = errorMessage;
}

function setSuccess(element) {
  const parent = element.parentElement;
  if (parent.classList.contains('error')) {
    parent.classList.remove('error');
  }
  parent.classList.add('success');
}

// Email validation
function isEmailValid(email) {
  const reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@"]+\.)+[^<>()[\]\\.,;:\s@"]{2,})$/i;
  return reg.test(email);
}





// // Vanila script Validation
// const form = document.querySelector('#form');
// const fullName = document.querySelector('#name');
// const email = document.querySelector('#email');
// const orderCount = document.querySelector('#order-count');
// const orderName = document.querySelector('#order-name');
// const userAddress = document.querySelector('#address');
// const submitBtn = document.querySelector('#submit');

// form.addEventListener('submit', (event) => {
//   event.preventDefault(); // Prevent default form submission behavior
//   validateForm();
  
//   if (isFormValid()) {
//     // Store data in localStorage
//     localStorage.setItem('name', fullName.value.trim());
//     localStorage.setItem('email', email.value.trim());
//     localStorage.setItem('password', orderCount.value.trim()); // Storing password in a safe way should be considered in a real app

//     // Redirect to success page
//     window.location.href = 'success.html';
//   }
// });

// // Validating the submission process
// function isFormValid() {
//   const inputContainers = form.querySelectorAll('.form-group');
//   let result = true;

//   inputContainers.forEach((container) => {
//     if (container.classList.contains('error')) {
//       result = false;
//     }
//   });

//   return result;
// }

// // Form Validation
// function validateForm() {
//   // UserName
//   if (fullName.value.trim() === '') {
//     setError(fullName, 'Field must not be empty!');
//   } else if (fullName.value.trim().length < 3 || fullName.value.trim().length > 20) {
//     setError(fullName, 'Enter a valid name');
//   } else {
//     setSuccess(fullName);
//   }

//   // Email
//   if (email.value.trim() === '') {
//     setError(email, 'Field must not be empty!');
//   } else if (isEmailValid(email.value)) {
//     setSuccess(email);
//   } else {
//     setError(email, 'Enter a valid email address!');
//   }

//   // OrderCount (acting as Password)
//   if (orderCount.value.trim() === '') {
//     setError(orderCount, 'Field must not be empty!');
//   } else if (isNaN(orderCount.value) || parseInt(orderCount.value) <= 0) {
//     setError(orderCount, 'Select a valid number of orders');
//   } else {
//     setSuccess(orderCount);
//   }

//   // OrderName
//   if (orderName.value.trim() === '') {
//     setError(orderName, 'Field must not be empty!');
//   } else if (orderName.value.trim().length < 2 || orderName.value.trim().length > 50) {
//     setError(orderName, 'Enter a valid name for your order!');
//   } else {
//     setSuccess(orderName);
//   }

//   // UserAddress
//   if (userAddress.value.trim() === '') {
//     setError(userAddress, 'Field must not be empty!');
//   } else if (userAddress.value.trim().length < 10) {
//     setError(userAddress, 'Give your address in full!');
//   } else if (userAddress.value.trim().length > 500) {
//     setError(userAddress, 'Address too long!');
//   } else {
//     setSuccess(userAddress);
//   }
// }

// // Defining the error function
// function setError(element, errorMessage) {
//   const parent = element.parentElement;
//   if (parent.classList.contains('success')) {
//     parent.classList.remove('success');
//   }
//   parent.classList.add('error');
//   const paragraph = parent.querySelector('.error-msg'); // Adjusted to use a class selector for error messages
//   paragraph.textContent = errorMessage;
// }

// function setSuccess(element) {
//   const parent = element.parentElement;
//   if (parent.classList.contains('error')) {
//     parent.classList.remove('error');
//   }
//   parent.classList.add('success');
// }

// // Email validation
// function isEmailValid(email) {
//   const reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@"]+\.)+[^<>()[\]\\.,;:\s@"]{2,})$/i;
//   return reg.test(email);
// }







// // Vanila script Validation
// const form = document.querySelector('#form');
// const fullName = document.querySelector('#name');
// const email = document.querySelector('#email');
// const orderCount = document.querySelector('#order-count');
// const orderName = document.querySelector('#order-name');
// const userAddress = document.querySelector('#address');
// const submitBtn = document.querySelector('#submit');

// form.addEventListener('submit', (event) => {
//   event.preventDefault(); // Prevent default form submission behavior
//   validateForm();
  
//   if (isFormValid()) {
//     // Proceed with form submission if validation passes
//     form.submit();
//   }
// });

// // Validating the submission process
// function isFormValid() {
//   const inputContainers = form.querySelectorAll('.form-group');
//   let result = true;

//   inputContainers.forEach((container) => {
//     if (container.classList.contains('error')) {
//       result = false;
//     }
//   });

//   return result;
// }

// // Form Validation
// function validateForm() {
//   // UserName
//   if (fullName.value.trim() === '') {
//     setError(fullName, 'Field must not be empty!');
//   } else if (fullName.value.trim().length < 3 || fullName.value.trim().length > 20) {
//     setError(fullName, 'Enter a valid name');
//   } else {
//     setSuccess(fullName);
//   }

//   // Email
//   if (email.value.trim() === '') {
//     setError(email, 'Field must not be empty!');
//   } else if (isEmailValid(email.value)) {
//     setSuccess(email);
//   } else {
//     setError(email, 'Enter a valid email address!');
//   }

//   // OrderCount
//   if (orderCount.value.trim() === '') {
//     setError(orderCount, 'Field must not be empty!');
//   } else if (isNaN(orderCount.value) || parseInt(orderCount.value) <= 0) {
//     setError(orderCount, 'Select a valid number of orders');
//   } else {
//     setSuccess(orderCount);
//   }

//   // OrderName
//   if (orderName.value.trim() === '') {
//     setError(orderName, 'Field must not be empty!');
//   } else if (orderName.value.trim().length < 2 || orderName.value.trim().length > 50) {
//     setError(orderName, 'Enter a valid name for your order!');
//   } else {
//     setSuccess(orderName);
//   }

//   // UserAddress
//   if (userAddress.value.trim() === '') {
//     setError(userAddress, 'Field must not be empty!');
//   } else if (userAddress.value.trim().length < 10) {
//     setError(userAddress, 'Give your address in full!');
//   } else if (userAddress.value.trim().length > 500) {
//     setError(userAddress, 'Address too long!');
//   } else {
//     setSuccess(userAddress);
//   }
// }

// // Defining the error function
// function setError(element, errorMessage) {
//   const parent = element.parentElement;
//   if (parent.classList.contains('success')) {
//     parent.classList.remove('success');
//   }
//   parent.classList.add('error');
//   const paragraph = parent.querySelector('.error-msg'); // Adjusted to use a class selector for error messages
//   paragraph.textContent = errorMessage;
// }

// function setSuccess(element) {
//   const parent = element.parentElement;
//   if (parent.classList.contains('error')) {
//     parent.classList.remove('error');
//   }
//   parent.classList.add('success');
// }

// // Email validation
// function isEmailValid(email) {
//   const reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@"]+\.)+[^<>()[\]\\.,;:\s@"]{2,})$/i;
//   return reg.test(email);
// }





// // // Vanila script Validation
// // const form = document.querySelector('#form')
// // const fullName = document.querySelector('#name')
// // const Email = document.querySelector('#email')
// // let orderCount = document.querySelector('#order-count').value
// // let Items = parseInt(orderCount)
// // const orderName = document.querySelector('#order-name')
// // const userAddress = document.querySelector('#address')
// // let submitBtn = document.querySelector('#submit')

// // form.addEventListener('submit', (event) => {
// //   validateForm()
// //   if (isFormValid() === true) {
// //     // form.submit()
// //     preventDefault()
// //   } else {
// //     event.preventDefault()
// //   }
// // })

// // // Validating the submission process
// // function isFormValid() {
// //   const inputContainers = form.querySelectorAll('.form-group')
// //   let result = true
// //   inputContainers.forEach((container) => {
// //     if (container.classList.contains('error')) {
// //       result = false
// //     }
// //   })
// //   return result
// // }

// // // Form Validation
// // function validateForm() {
// //   // UserName
// //   if (fullName.value.trim() == '') {
// //     setError(fullName, 'field must not be empty!')
// //   } else if (
// //     fullName.value.trim().length < 3 ||
// //     fullName.value.trim().lenghth > 20
// //   ) {
// //     setError(fullName, 'enter a valid name')
// //   } else {
// //     setSuccess(fullName)
// //   }

// //   // Email
// //   if (Email.value.trim() == '') {
// //     setError(Email, 'field must not be empty!')
// //   } else if (isEmailValid(Email.value)) {
// //     setSuccess(Email)
// //   } else {
// //     setError(Email, 'enter a valid email address!')
// //   }

// //   // OrderCount
// //   if (orderCount.value === '') {
// //     setError(orderCount, 'field must not be empty!')
// //   } else if (isNaN(Items)) {
// //     setError(orderCount, 'Select a valid number of order')
// //   } else {
// //     setSuccess(orderCount)
// //   }

// //   // UserSubject
// //   if (orderName.value.trim() == '') {
// //     setError(orderName, 'field must not be empty!')
// //   } else if (
// //     orderName.value.trim().length < 2 ||
// //     orderName.value.trim().lenghth > 50
// //   ) {
// //     setError(orderName, 'enter a valid name of your order!')
// //   } else {
// //     setSuccess(orderName)
// //   }

// //   // UserMsg
// //   if (userAddress.value.trim() == '') {
// //     setError(userAddress, 'field must not be empty!')
// //   } else if (userAddress.value.trim().length < 10) {
// //     setError(userAddress, 'Give your address in full!')
// //   } else if (userAddress.value.trim().lenghth > 500) {
// //     setError(userAddress, 'Address too long!')
// //   } else {
// //     setSuccess(userAddress)
// //   }

// //   // Defining the error function
// //   function setError(element, errorMessage) {
// //     const parent = element.parentElement
// //     if (parent.classList.contains('success')) {
// //       parent.classList.remove('success')
// //     }
// //     parent.classList.add('error')
// //     const paragraph = parent.querySelector('#error-msg')
// //     paragraph.textContent = errorMessage
// //   }

// //   function setSuccess(element) {
// //     const parent = element.parentElement
// //     if (parent.classList.contains('error')) {
// //       parent.classList.remove('error')
// //     }
// //     parent.classList.add('success')
// //   }

// //   // Email validation
// //   function isEmailValid(email) {
// //     const reg = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
// //     return reg.test(email)
// //   }
// // }

// // // window.onbeforeunload = () => {
// // //   for (const form of document.getElementsByTagName('form')) {
// // //     form.reset()
// // //   }
// // // }
