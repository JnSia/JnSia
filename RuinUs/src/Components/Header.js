import React from 'react';

function Header(props) {
  function GoLeft() {
    document.location.href = `/${props.prev}`;
  }

  function GoRight() {
    document.location.href = `/${props.next}`;
  }

  return (
    <div>
      <nav class="navbar bg-light">
        <div class="container-fluid">
          <button type="button" class="btn btn-dark m-2" onClick={GoLeft}>
            {props.left}
          </button>
          <div className="navbar-brand" href="#">
            {/* <img
              src="#"
              alt="Ruin Us"
              width="30"
              height="24"
              class="d-inline-block align-text-top"
            /> */}
            Ruin Us
          </div>
          <button type="button" class="btn btn-dark m-2" onClick={GoRight}>
            {props.right}
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Header;
