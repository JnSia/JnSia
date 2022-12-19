import React from 'react';
import Modal from 'react-bootstrap/Modal';

function SetTime(props) {
  return (
    <Modal {...props} size="sm" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" class="fs-6 px-2">
          삭제 시간 설정
        </Modal.Title>
      </Modal.Header>
      <Modal.Body class="p-2 m-2 row">
        <h1>날짜 입력할 수 있는 달력</h1>
        <h1>시간 입력할 수 있는 시계</h1>
      </Modal.Body>
      <Modal.Footer class="m-2 p-2">
        <button type="button" class="btn btn-dark my-2" onClick={props.onHide}>
          돌아가기
        </button>
      </Modal.Footer>
    </Modal>
  );
}

export default SetTime;
