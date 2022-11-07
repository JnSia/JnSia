import React from 'react';
import Header from '../Components/Header';

function Cause() {
  return (
    <div>
      <Header left="뒤로" prev="Write" next="Sort" right="다음" />
      <div class="container bg-dark">
        <div class="m-4 p-2 fs-6 text-center text-white">감정의 원인은 무엇이었나요?</div>
        <div class="row justify-content-center m-2">
          <button class="col-4 btn btn-secondary m-2 p-2">사랑</button>
          <button class="col-4 btn btn-secondary m-2 p-2">직장</button>
          <button class="col-4 btn btn-secondary m-2 p-2">취업</button>
          <button class="col-4 btn btn-secondary m-2 p-2">인간관계</button>
          <button class="col-4 btn btn-secondary m-2 p-2">사업</button>
          <button class="col-4 btn btn-secondary m-2 p-2">건강</button>
          <button class="col-4 btn btn-secondary m-2 p-2">학업</button>
          <button class="col-4 btn btn-secondary m-2 p-2">기타</button>
        </div>
      </div>
    </div>
  );
}

export default Cause;
