import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from './Pages/Landing';
import Home from './Pages/Home';
import Write from './Pages/Write';
import Sort from './Pages/Sort';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Landing />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/write" element={<Write />}></Route>
          <Route path="/sort" element={<Sort />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;

// npm run build => product
//    베포할 때는 build 폴더에 있는 파일만 사용

// npx serve -s build
//    1회용 로컬 서버
