// AJAX: 서버로 요청을 보내는 코드
//      Axios 라이브러리 사용
//      <script src="https://unpkg.com/axios/dist/axios.min.js"></script>

// axios.get은 promise 기반 함수 => async/await 사용 가능
// axios.post는 데이터를 넣어서 전송 가능

// FormData 객체 이용
//      append로 데이터를 하나씩 추가
//      has로 데이터 존재 여부 확인
//      get으로 데이터 조회
//      getAll로 데이터 모두 조회
//      delete로 데이터 삭제
//      set으로 데이터 수정

// encodeURIComponent, encodeURIComponent
//      => 주소창에 한글을 입력하면 서버가 처리하지 못하는 경우를 막음

(async () => {
  try {
    const result = await axios.get(
      `https://www.naver.com/${encodeURIComponent('node')}`
      // 서버에서는 decodeURIComponent로 한글을 입력 받음
    );
    console.log(result);
  } catch (error) {
    console.log(error);
  }
})();

// data attribute와 dataset
//      자바스크립트에서 태그.dataset.속성명으로 접근 가능
//          data-user-job => dataset.userJob
//          data-id => dataset.id
//      자바스크립트에 dataset 값을 넣으면 data-속성이 생김
//          dataset.monthSalary = 10000 => data-month-salaly="10000"
