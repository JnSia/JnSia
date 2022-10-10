import React, { Component } from 'react';
import Nav from '../hooks/Nav';

export class Header extends Component {
  render() {
    return (
      <div class="grid text-center" className="Header">
        {/* <button type="button" class="btn btn-default g-col-3 g-start-0">
          뒤로
        </button> */}
        <button type="button" class="btn btn-outline-default g-col-3 g-start-6">
          히히
        </button>
        <Nav />
        <button type="button" class="btn btn-outline-default g-col-3 g-start-9">
          다음
        </button>
      </div>
    );
  }
}

export default Header;
