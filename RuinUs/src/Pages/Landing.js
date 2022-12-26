import React from 'react';
import { useNavigate } from 'react-router-dom';

function Landing() {
  const navigate = useNavigate();

  function resister() {
    navigate('/resister');
  }

  function login() {
    const userID = document.getElementById('userID');
    const userPW = document.getElementById('userPW');

    // 아이디 입력 유무 체크
    if (userID.value === '') {
      alert('아이디를 입력하시오.');
      userID.focus();
      userID.select();
      return false;
    }

    // 암호 입력 유무 체크
    if (userPW.value === '') {
      alert('암호를 입력하세요.');
      userPW.focus();
      return false;
    }

    alert('환영합니다!');
    document.loginForm.submit();
    navigate('/home');
  }

  return (
    <div class="bg-light text-center col-12 col-md-8 col-lg-4 position-absolute top-50 start-50 translate-middle">
      <div class="my-4 pt-2 bg-light">
        <div class="fs-1 fw-bold">Ruin Us</div>
        <div class="text-muted">"나쁜 기억 메모장"</div>
      </div>
      <form
        name="loginForm"
        action="/login"
        method="post"
        class="container bg-light col-12 col-md-10 col-lg-8 my-2 p-2"
      >
        <div class="row justify-content-center">
          <label for="userID" class="col-2 col-form-label border rounded-5">
            ID
          </label>
          <div class="col-8">
            <input type="text" class="form-control" id="userID" name="userID" />
          </div>
        </div>
        <div class="row justify-content-center mt-2">
          <label for="userPW" class="col-2 col-form-label border rounded-5">
            PW
          </label>
          <div class="col-8">
            <input type="password" class="form-control" id="userPW" name="userPW" />
          </div>
        </div>
      </form>
      <div class="bg-light">
        <button class="btn btn-outline-dark col-4 btn m-2" onClick={resister}>
          회원가입
        </button>
        <button class="btn btn-dark col-4 btn m-2" onClick={login}>
          로그인
        </button>
      </div>
      <hr />
      <div class="bg-light m-2 p-2">
        <button class="p-2 m-2">카카오</button>
        <button class="p-2 m-2">구글</button>
        <button class="p-2 m-2">페이스북</button>
      </div>
    </div>
  );
}

export default Landing;
