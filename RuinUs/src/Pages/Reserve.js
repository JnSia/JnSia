import React from 'react';
import Header from '../Components/Header';

function Reserve() {
  return (
    <div>
      <Header left="뒤로" prev="Sort" next="Home" right="저장" />
      <div class="container bg-dark">
        <div class="m-4 p-2 fs-6 text-center text-white">
          <div>당신의 글을 삭제합니다.</div>
          <br />
          <div>언제 삭제할까요?</div>
        </div>
        <div class="row justify-content-center m-2 p-2">
          <button class="col-10 col-md-8 btn btn-secondary m-2 p-2">삭제하지않음</button>
          <button class="col-10 col-md-8 btn btn-secondary m-2 p-2">10분 후</button>
          <button class="col-10 col-md-8 btn btn-secondary m-2 p-2">1시간 후</button>
          <button class="col-10 col-md-8 btn btn-secondary m-2 p-2">1일 후</button>
          <button class="col-10 col-md-8 btn btn-secondary m-2 p-2">일주일 후</button>
          <button class="col-10 col-md-8 btn btn-secondary m-2 p-2">한 달 후</button>
          <button class="col-10 col-md-8 btn btn-secondary m-2 p-2">1년 후</button>
          <button class="col-10 col-md-8 btn btn-secondary m-2 p-2">직접설정</button>
        </div>
      </div>
    </div>
  );
}

export default Reserve;
