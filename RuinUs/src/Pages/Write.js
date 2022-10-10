import React from 'react';
import Header from '../Components/Header';

function Write() {
  return (
    <div>
      <Header function="goSort"></Header>
      <form>
        <input type="text" placeholder="제목을 입력해 주시라요."></input>
        <input type="text" placeholder="내용을 입력해 주십사하오."></input>
      </form>
    </div>
  );
}

export default Write;
