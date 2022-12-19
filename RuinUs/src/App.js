import './App.css';
import React from 'react';
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
import PublicRoute from './Components/Route/PublicRoute';
import PrivateRoute from './Components/Route/PrivateRoute';

function App() {
  return (
    <BrowserRouter>
      <div class="App bg-dark">
        <Routes>
          <Route
            path="/"
            element={
              <PublicRoute>
                <Landing />
              </PublicRoute>
            }
          ></Route>
          <Route
            path="/resister"
            element={
              <PublicRoute>
                <Resister />
              </PublicRoute>
            }
          ></Route>
          <Route
            path="/home"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          ></Route>
          <Route
            path="/write"
            element={
              <PrivateRoute>
                <Write />
              </PrivateRoute>
            }
          ></Route>
          <Route
            path="/rewrite"
            element={
              <PrivateRoute>
                <Rewrite />
              </PrivateRoute>
            }
          ></Route>
          <Route
            path="/cause"
            element={
              <PrivateRoute>
                <Cause />
              </PrivateRoute>
            }
          ></Route>
          <Route
            path="/sort"
            element={
              <PrivateRoute>
                <Sort />
              </PrivateRoute>
            }
          ></Route>
          <Route
            path="/reserve"
            element={
              <PrivateRoute>
                <Reserve />
              </PrivateRoute>
            }
          ></Route>
          <Route
            path="/post"
            element={
              <PrivateRoute>
                <Post />
              </PrivateRoute>
            }
          ></Route>
          <Route path="*" element={<Error />}></Route>
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
