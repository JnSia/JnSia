import React from 'react';
import Header from '../Components/Header';

function Sort() {
  return (
    <div>
      <Header left="뒤로" prev="Cause" next="Reserve" right="다음" />
      <div class="container bg-dark">
        <div class="m-4 p-2 fs-6 text-center text-white">감정을 분류해 보세요.</div>
        <div class="row justify-content-center m-2">
          <button class="col-4 btn btn-secondary m-2 p-2">슬픔</button>
          <button class="col-4 btn btn-secondary m-2 p-2">질투</button>
          <button class="col-4 btn btn-secondary m-2 p-2">분노</button>
          <button class="col-4 btn btn-secondary m-2 p-2">서러움</button>
          <button class="col-4 btn btn-secondary m-2 p-2">괴로움</button>
          <button class="col-4 btn btn-secondary m-2 p-2">외로움</button>
          <button class="col-4 btn btn-secondary m-2 p-2">억울함</button>
          <button class="col-4 btn btn-secondary m-2 p-2">기타</button>
        </div>
      </div>
    </div>
  );
}

export default Sort;
