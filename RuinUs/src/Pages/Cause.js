import React, { useEffect } from 'react';
import Header from '../Components/Header';

function Cause() {
  useEffect(() => {
    const causeBtn = document.querySelector('#cause-btns');

    let causeSelect = [];

    causeBtn.addEventListener('click', (e) => {
      if (e.target.classList.contains('active')) {
        e.target.classList.remove('active');
        causeSelect.pop(e.target.innerText);
        console.log(causeSelect);
      } else {
        if (causeSelect.length === 3) {
          alert('3개 이하로 선택해주세요.');
          return false;
        }

        e.target.classList.add('active');
        causeSelect.push(e.target.innerText);
        console.log(causeSelect);
      }
    });
  }, []);

  return (
    <div>
      <Header left="뒤로" prev="Write" next="Sort" right="다음" />
      <div class="container bg-dark">
        <div class="m-4 p-2 fs-6 text-center text-white">감정의 원인은 무엇이었나요?</div>
        <div class="row justify-content-center m-2" id="cause-btns">
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
