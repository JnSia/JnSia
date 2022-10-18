import React, { useState } from 'react';
import Modal from 'react-modal';

function Header() {
  const [ModalIsOpen, setModalIsOpen] = useState(false);

  function GoBlog() {
    window.location.href = 'https://blog.naver.com/kia546';
  }

  return (
    <div className="Header">
      <button className="setting" onClick={() => setModalIsOpen(true)}>
        설정
      </button>
      <Modal className="modal" isOpen={ModalIsOpen}>
        <button onClick={GoBlog}>개발자 근황 알아보기</button>
        <button onClick={() => setModalIsOpen(false)}>닫기</button>
      </Modal>
    </div>
  );
}

export default Header;
