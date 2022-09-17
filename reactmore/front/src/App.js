import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/views/Header/Header';
import MainPage from './components/views/MainPage/MainPage';
import LoginPage from './components/views/LoginPage/LoginPage';
import ResisterPage from './components/views/ResisterPage/ResisterPage';
import CommunityPage from './components/views/CommunityPage/CommunityPage';
import ReviewPage from './components/views/ReviewPage/ReviewPage';
import QnAPage from './components/views/QnAPage/QnAPage';
import GroupListPage from './components/views/GroupListPage/GroupListPage';
import GroupInfoPage from './components/views/GroupInfoPage/GroupInfoPage';
import Footer from './components/views/Footer/Footer';
import ErrorPage from './components/views/ErrorPage/ErrorPage';
import LandingPage from './components/views/LandingPage/LandingPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <LandingPage />
        <Routes>
          <Route exact path="/" element={<MainPage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/resister" element={<ResisterPage />}></Route>
          <Route path="/QnA" element={<QnAPage />}></Route>
          <Route path="/community" element={<CommunityPage />}></Route>
          <Route path="/grouplist" element={<GroupListPage />}></Route>
          <Route path="/groupinfo" element={<GroupInfoPage />}></Route>
          <Route path="/review" element={<ReviewPage />}></Route>
          <Route path="/*" element={<ErrorPage />}></Route>
        </Routes>
      </div>
      ;
    </BrowserRouter>
  );
}

export default App;
