import React, { useEffect } from 'react';
import axios from 'axios';

function LandingPage() {
  useEffect(() => {
    axios.get('/api/hello').then((response) => {
      console.log(response.data);
    });
  }, []);

  function onClickHandler(props) {
    axios.get('/api/users/logout').then((response) => {
      if (response.data.success) {
        props.history.path('/login');
      } else {
        alert('로그아웃 실패');
      }
    });
  }

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100vh',
      }}
    >
      <h2>시작 페이지</h2>

      <button onClick={onClickHandler}>로그아웃</button>
    </div>
  );
}

export default LandingPage;

// Cors (Cross-Origin Resource Sharing) 보완
// Proxy를 사용하는 방법으로 해결 => Configuring the Proxy Mang
