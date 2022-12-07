import React, { useEffect } from 'react';
import Header from '../Components/Header';
import SetTime from './SetTime';

function Reserve() {
  const [modalShow, setModalShow] = React.useState(false);

  useEffect(() => {
    const reserveBtn = document.querySelector('#reserve-btns');

    let reserveSelect = [];

    reserveBtn.classList.add('active');

    console.log(reserveBtn.childNodes[0]);

    reserveBtn.addEventListener('click', (e) => {
      for (let i = 0; i < reserveBtn.childNodes.length; i++) {
        reserveBtn.childNodes[i].classList.remove('active');
        reserveSelect = [];
      }

      e.target.classList.add('active');
      reserveSelect.push(e.target.innerText);
      console.log(reserveSelect);
    });
  }, []);

  return (
    <div>
      <Header left="뒤로" prev="Sort" next="Home" right="저장" />
      <div class="container bg-dark">
        <div class="m-4 p-2 fs-6 text-center text-white">
          <div>당신의 글을 삭제합니다.</div>
          <br />
          <div>언제 삭제할까요?</div>
        </div>
        <div class="row justify-content-center m-2 p-2" id="reserve-btns">
          <button class="col-10 col-md-8 btn btn-secondary m-2 p-2">삭제하지않음</button>
          <button class="col-10 col-md-8 btn btn-secondary m-2 p-2">10분 후</button>
          <button class="col-10 col-md-8 btn btn-secondary m-2 p-2">1시간 후</button>
          <button class="col-10 col-md-8 btn btn-secondary m-2 p-2">1일 후</button>
          <button class="col-10 col-md-8 btn btn-secondary m-2 p-2">일주일 후</button>
          <button class="col-10 col-md-8 btn btn-secondary m-2 p-2">한 달 후</button>
          <button class="col-10 col-md-8 btn btn-secondary m-2 p-2">1년 후</button>
          <SetTime show={modalShow} onHide={() => setModalShow(false)} />
          <button class="col-10 col-md-8 btn btn-secondary m-2 p-2" onClick={() => setModalShow(true)}>
            직접설정
          </button>
        </div>
      </div>
    </div>
  );
}

export default Reserve;
