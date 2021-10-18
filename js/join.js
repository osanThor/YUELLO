'use strict';
const joinForm = document.querySelector('form#joinForm');
const userId = joinForm.querySelector('#userId');
const userPw = joinForm.querySelector('#userPW');
const userPw2 = joinForm.querySelector('#userPWcheck');
const userName = joinForm.querySelector('#userName');
const joinOkBtn = joinForm.querySelector('#joinOkBtn');

joinOkBtn.addEventListener('click', joinOkFunc);

function joinOkFunc(event) {
    //아이디 골란X, 0~10글자 이하
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

    //비밀번호 공란X 0~10글자 이하
    if (userPw.value == '' || userPw.value.length <= 0) {
        alert('비밀번호를 입력하세요');
        userPw.focus();
        return false;
    }
    //0~10글자 이하
    if (userPw.value.length > 10) {
        alert('비밀번호 10글자 이하로 입력하세요');
        userPw.focus();
        userPw.value = '';
        return false;
    }
    //비밀번호 확인
    if (userPw2.value == '' || userPw2.value.length <= 0) {
        alert('비밀번호 확인을 입력하세요')
        userPw2.focus();
        return false;
    }

    if (!userPw2Func()) {
        alert('비밀번호가 일치하지 않습니다. 다시 확인해 주세요');
        userPw2.focus();
        userPw2.value = '';
        return false;
    }

    //이름 공란X 0~10글자
    if (userName.value == '' || userName.value.length <= 0) {
        alert('이름을 입력하세요');
        userPw.focus();
        return false;
    }
    //0~10글자
    if (userName.value.length > 10) {
        alert('이름 10글자 이하로 입력하세요');
        userPw.focus();
        userPw.value = '';
        return false;
    }

    alert('회원가입 GO');

    joinForm.submit();
}
//비밀번호 확인
userPw2.addEventListener('keyup', userPw2Func);
// const spanPwChecked = joinForm.querySelector('span.pwChecked')

function userPw2Func(event) {
    if (userPw.value == userPw2.value) {
        spanPwChecked.innerText = "비밀번호가 일치합니다.";
        // spanPwChecked.style.color = '#00f'
        return true;
    } else {
        spanPwChecked.innerText = "비밀번호가 일치하지 않습니다.";
        // spanPwChecked.style.color = '#f00'
        return false;
    }
}