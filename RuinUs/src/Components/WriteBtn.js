import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class WriteBtn extends Component {
  render() {
    return (
      <div className="test">
        <Link to="/Write" className="WriteBtn">
          글쓰기
        </Link>
      </div>
    );
  }
}

export default WriteBtn;
