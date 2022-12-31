import React, { useEffect, useState } from 'react';
import Header from '../Components/Header';
import SetTime from './SetTime';

function Reserve() {
  const [modalShow, setModalShow] = useState(false);
  const [custom, setCustom] = useState('직접입력');

  useEffect(() => {
    const reserveBtn = document.querySelector('#reserve-btns');

    let reserveSelect = [];

    reserveBtn.classList.add('active');

    reserveBtn.addEventListener('click', (e) => {
      for (let i = 0; i < reserveBtn.childNodes.length; i++) {
        reserveBtn.childNodes[i].classList.remove('active');
        reserveSelect = [];
      }

      e.target.classList.add('active');
      reserveSelect.push(e.target.value);
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
        <div class="row justify-content-center m-2 mb-0 p-2" id="reserve-btns">
          <button class="col-10 col-md-8 btn btn-secondary m-2 p-2" value="삭제">
            삭제하지않음
          </button>
          <button class="col-10 col-md-8 btn btn-secondary m-2 p-2" value="삭제1">
            10분 후
          </button>
          <button class="col-10 col-md-8 btn btn-secondary m-2 p-2" value="삭제2">
            1시간 후
          </button>
          <button class="col-10 col-md-8 btn btn-secondary m-2 p-2" value="1일 후">
            1일 후
          </button>
          <button class="col-10 col-md-8 btn btn-secondary m-2 p-2" value="일주일 후">
            일주일 후
          </button>
          <button class="col-10 col-md-8 btn btn-secondary m-2 p-2">한 달 후</button>
          <button class="col-10 col-md-8 btn btn-secondary m-2 p-2">1년 후</button>
          <button
            class="col-10 col-md-8 btn btn-secondary m-2 p-2"
            value={custom}
            onClick={() => setModalShow(true)}
          >
            <SetTime show={modalShow} onHide={() => setModalShow(false)} />
            {custom}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Reserve;
