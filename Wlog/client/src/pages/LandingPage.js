import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ChatBot from '../components/ChatBot';

function LandingPage() {
  return (
    <div>
      <Header />
      <div>검색창</div>
      <div>리스트 카드</div>
      <ChatBot />
      <Footer />
    </div>
  );
}

export default LandingPage;
