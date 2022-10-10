import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Title extends Component {
  render() {
    return (
      <div class="row align-items-end" className="title">
        <p class="col-8" id="title">
          {this.props.title}
        </p>
        <p class="col-4" id="deleteTime">
          {this.props.deleteTime}
        </p>
        <Link to="/Write"></Link>
      </div>
    );
  }
}

export default Title;
