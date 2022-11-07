import React from 'react';

function Resister() {
  function resister(event) {
    const userID = document.getElementById('userID');
    const userPW = document.getElementById('userPW');
    const email = document.getElementById('email');

    // 아이디 입력 유무 체크
    if (userID.value == '') {
      alert('아이디를 입력하시오');
      userID.focus();
      userID.select();
      return false;
    }

    // 암호 입력 유무 체크
    if (userPW.value == '') {
      alert('암호를 입력하세요.');
      userPW.focus();
      return false;
    }

    // 암호 입력 유무 체크
    if (email.value == '') {
      alert('이메일를 입력하세요.');
      email.focus();
      return false;
    }

    alert('환영합니다!');
    document.resisterForm.submit();
    document.location.href = '/';
  }

  return (
    <div class="bg-light text-center col-12 col-md-8 col-lg-4 position-absolute top-50 start-50 translate-middle">
      <div class="m-4 p-4 bg-light">
        <div class="fs-1 fw-bold">Ruin Us</div>
        <div class="text-muted">"나쁜 기억 메모장"</div>
      </div>
      <form name="resisterForm" method="post" class="container bg-light col-12 col-md-10 col-lg-8 my-2 p-2">
        <div class="row justify-content-center my-2">
          <label for="userID" class="col-2 col-form-label border rounded-5">
            ID
          </label>
          <div class="col-6">
            <input type="text" class="form-control" id="userID" name="userID" />
          </div>
        </div>
        <div class="row justify-content-center my-4">
          <label for="userPW" class="col-2 col-form-label border rounded-5">
            PW
          </label>
          <div class="col-6">
            <input type="password" class="form-control" id="userPW" name="userPW" />
          </div>
        </div>
        <div class="row justify-content-center my-2">
          <label for="userPW" class="col-2 col-form-label border rounded-5">
            Email
          </label>
          <div class="col-6">
            <input type="email" class="form-control" id="email" name="email" />
          </div>
        </div>
      </form>
      <div class="bg-light">
        <button class="btn btn-dark col-6 btn m-4 p-2">회원가입</button>
      </div>
    </div>
  );
}

export default Resister;
