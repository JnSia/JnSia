import React from 'react';
import Header from '../Components/Header';
import Title from '../Components/Title';
import WriteBtn from '../Components/WriteBtn';

function Home() {
  return (
    <div className="Home">
      <Header first="/write"></Header>
      <div className="List">
        <Title
          title="오늘 밤에 난 내가 좋아졌어!"
          deleteTime="일주일 후 삭제"
        ></Title>
        <Title
          title="어젯밤에 난 내가 싫어졌어..."
          deleteTime="1일 후 삭제"
        ></Title>
        <Title
          title="오늘 밤에 난 내가 좋아졌어!"
          deleteTime="일주일 후 삭제"
        ></Title>
        <Title
          title="어젯밤에 난 내가 싫어졌어..."
          deleteTime="1일 후 삭제"
        ></Title>
        <Title
          title="오늘 밤에 난 내가 좋아졌어!"
          deleteTime="일주일 후 삭제"
        ></Title>
        <Title
          title="어젯밤에 난 내가 싫어졌어..."
          deleteTime="1일 후 삭제"
        ></Title>
        <Title
          title="오늘 밤에 난 내가 좋아졌어!"
          deleteTime="일주일 후 삭제"
        ></Title>
        <Title
          title="어젯밤에 난 내가 싫어졌어..."
          deleteTime="1일 후 삭제"
        ></Title>
        <Title
          title="오늘 밤에 난 내가 좋아졌어!"
          deleteTime="일주일 후 삭제"
        ></Title>
        <Title
          title="어젯밤에 난 내가 싫어졌어..."
          deleteTime="1일 후 삭제"
        ></Title>
      </div>
      <WriteBtn />
    </div>
  );
}

export default Home;
