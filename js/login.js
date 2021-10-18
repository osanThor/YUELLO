'use strict';
const loginForm = document.querySelector('form#loginForm');
const userId = loginForm.querySelector('#userId');
const userPw = loginForm.querySelector('#userPw');
const loginOkBtn = loginForm.querySelector('#loginOkBtn');

loginOkBtn.addEventListener('click',loginOkFunc);

function loginOkFunc(event){
    if (userId.value == "") {
        alert('아이디를 입력하세요')
        userId.focus();
        return false;
    }
    if (userId.value.length >= 10 && userId.value.length <= 1) {
        alert('10글자 이하로 입력하세요')
        userId.focus();
        userId.value = '';
        return false;
    }
    if (userPw.value == '' || userPw.value.length <= 0) {
        alert('비밀번호를 입력하세요');
        userPw.focus();
        return false;
    }
    if (userPw.value.length > 10) {
        alert('비밀번호 10글자 이하로 입력하세요');
        userPw.focus();
        userPw.value = '';
        return false;
    }
    alert('로그인 GO');

    loginForm.submit();
};