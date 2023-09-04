'use strict';
// logIn page
const login_page_overlay = document.querySelector('.logIn_page_layout');
const login_page_button = document.querySelector('.Login_page_button');
const create_login_page = document.getElementById('logIn_page_SignUp');

// sinUp page
const logIn = document.querySelector('.log_in');
const signUp_page_overlay = document.querySelector('.signUp_page');
const signUp_page_logIn = document.getElementById('log_in');

//forget password
const forget_password = document.getElementById('forgot_psw');
const forget_page_overlay = document.querySelector('.forget_pswrd_overlay');
const forget_page_login = document.getElementById('forget_page_login');

//home page button
const home_page_signUp = document.getElementById('home_button_signUp');
const home_page_login = document.getElementById('home_button_login');
const home_page_forget = document.getElementById('home_button_forget');

logIn.addEventListener('click', function () {
  login_page_overlay.classList.remove('hidden');
});

create_login_page.addEventListener('click', function () {
  login_page_overlay.classList.add('hidden');
  signUp_page_overlay.classList.remove('hidden');
});

signUp_page_logIn.addEventListener('click', function () {
  signUp_page_overlay.classList.add('hidden'); // hide the signup page when you click on the button
  login_page_overlay.classList.remove('hidden');
});

forget_password.addEventListener('click', function () {
  login_page_overlay.classList.add('hidden');
  forget_page_overlay.classList.remove('hidden');
});

forget_page_login.addEventListener('click', function () {
  forget_page_overlay.classList.add('hidden');
  login_page_overlay.classList.remove('hidden');
});

//functin for home button functionality
const home_btn_func = function () {
  login_page_overlay.classList.add('hidden');
  signUp_page_overlay.classList.add('hidden');
  forget_page_overlay.classList.add('hidden');
};
home_page_signUp.addEventListener('click', home_btn_func);
home_page_login.addEventListener('click', home_btn_func);
home_page_forget.addEventListener('click', home_btn_func);
