import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/views/NavBar/NavBar';
import LandingPage from './components/views/LandingPage/LandingPage';
import LoginPage from './components/views/LoginPage/LoginPage';
import RegisterPage from './components/views/RegisterPage/RegisterPage';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route exact path="/" element={<LandingPage />}></Route>
          <Route path="/NavBar" element={<NavBar />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/register" element={<RegisterPage />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

// Props (properties)
//      parent component에서 child component로 data를 인계

// State
//      componet 내에서 data를 전달하거나 교환
//      data 변경 시 re:rendering

// Redux는 state를 관리
//      unidirectional
//      Action (Dispatch) => 발생한 변경사항을 설명
//      Reducer => 이전 state와 action object를 받은 후 next state를 return
//      Store => state 저장

// redux-promise => promise() 이용 가능하게 만드는 middleware
// redux-thunk => function() 이용 가능하게 만드는 middleware
