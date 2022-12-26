import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from './Pages/Landing';
import Home from './Pages/Home';
import Write from './Pages/Write';
import Rewrite from './Pages/Rewrite';
import Cause from './Pages/Cause';
import Sort from './Pages/Sort';
import Reserve from './Pages/Reserve';
import Error from './Pages/Error';
import Post from './Pages/Post';
import Resister from './Pages/Resister';

function App() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <BrowserRouter>
      <div class="App bg-dark">
        {!isLogin ? (
          <Routes>
            <Route path="/" element={<Landing />}></Route>
            <Route path="/resister" element={<Resister />}></Route>
          </Routes>
        ) : (
          <Routes>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/write" element={<Write />}></Route>
            <Route path="/rewrite" element={<Rewrite />}></Route>
            <Route path="/cause" element={<Cause />}></Route>
            <Route path="/sort" element={<Sort />}></Route>
            <Route path="/reserve" element={<Reserve />}></Route>
            <Route path="/post" element={<Post />}></Route>
            <Route path="*" element={<Error />}></Route>
          </Routes>
        )}
      </div>
    </BrowserRouter>
  );
}
export default App;

// npm run build => product
//    베포할 때는 build 폴더에 있는 파일만 사용

// npx serve -s build
//    1회용 로컬 서버
