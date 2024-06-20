// const register = document.querySelector('#register');

// // register.addEventListener('click',function(){
// //     setTimeout( () => {
// //         document.body.style.transition = 'all ease-in-out  1s';
// //         window.location.href = '/Signup/signup.html';
// //     },1000)
// // })

// const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
// const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
// const email = document.querySelector('#email');
// const password = document.querySelector('#password');
// const loginbtn = document.querySelector('#loginbtn');

// register.addEventListener('click', function() {
//   setTimeout( () => {
//     document.body.style.transition = 'all ease-in-out  1s';
//     window.location.href = '/Signup/signup.html';
//   },1000);
// });
// loginbtn.addEventListener('click', function() {
//   // event.preventDefault(); // Prevent the default form submission
//   if (emailRegex.test(email.value) && passwordRegex.test(password.value)) {
//     setTimeout( () => {
//       document.body.style.transition = 'all ease-in-out  1s';
//       window.location.href = '../index.html';
//     },1000);
//   } else {
//     alert('Please enter a valid email and password.');
//   }
// });

// // loginbtn.addEventListener('click',function(){
// //   setTimeout( () => {
// //     // document.body.style.transition = 'all ease-in-out  1s';
// //     // window.location.href = '../index.html';
// //     alert('chl rha h');
// //   },1000);
// // })

// // loginbtn.addEventListener('click', function() {
// //   setTimeout(() => {
// //     document.body.style.transition = 'all ease-in-out 1s';
// //     window.location.href = '../index.html';
// //   },1000);
// // });



// // loginbtn.addEventListener('click', function(event) {
// //     event.preventDefault(); // Prevent the default form submission

// //     // Simple email validation using regex
// //     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// //     if (!emailRegex.test(email.value)) {
// //       alert('Please enter a valid email address.');
// //       email.style.borderColor = 'red';
// //       return;
// //     }
  
// //     // Simple password validation using regex
// //     const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
// //     if (!passwordRegex.test(password.value)) {
// //       alert('Please enter a valid password. Must be at least 8 characters long, contain at least one letter and one number.');
// //       password.style.borderColor = 'red';
// //       return;
// //     }
  
// //     // If both email and password are valid, redirect to the dashboard page
// //     setTimeout( () => {
// //       document.body.style.transition = 'all ease-in-out  1s';
// //       window.location.href = '/index.html';
// //     },1000);
// //   });s