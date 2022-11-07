import React from 'react';
import { Link } from 'react-router-dom';
import Title from '../Components/Title';
import Setting from './setting';

function Home() {
  const [modalShow, setModalShow] = React.useState(false);

  function goWrite() {
    document.location.href = `/Write`;
  }

  return (
    <div>
      <nav class="navbar bg-light">
        <div class="container-fluid">
          <button type="button" class="btn btn-dark m-2" onClick={() => setModalShow(true)}>
            설정
          </button>
          <div className="navbar-brand" href="#">
            {/* <img src="./wood-bg.jpg" alt="Ruin Us" width="30" height="24" class="d-inline-block align-text-top" /> */}
            Ruin Us
          </div>
          <Setting show={modalShow} onHide={() => setModalShow(false)} />
          <button type="button" class="btn btn-dark m-2" onClick={goWrite}>
            작성
          </button>
        </div>
      </nav>
      <div class="container">
        <div class="row justify-content-center">
          <div class="bg-dark col-lg-8 col-md-10 col-sm-12">
            <Title title="배고픈데 뭐 먹지?" tag="#슬픔 #걱정 #억울함" time="10분 후 삭제" />
            <Title title="아무거나 먹어야지..." tag="#배고픔 #라면 #질려" time="1분 후 삭제" />
            <Title title="UI... 어렵다..." tag="#슬픔 #우울함 #서러움" time="1주일 후 삭제" />
            <Title title="그래도 힘내자!" tag="#힘내 #히히 #화이팅" time="삭제하지 않음" />
            <Title title="배고픈데 뭐 먹지?" tag="#슬픔 #걱정 #억울함" time="10분 후 삭제" />
            <Title title="아무거나 먹어야지..." tag="#배고픔 #라면 #질려" time="1분 후 삭제" />
            {/* <Title /> */}
            {/* <Title /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
