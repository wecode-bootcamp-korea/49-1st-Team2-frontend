import React from "react";
import "./Main.scss";
import { Link, useNavigate } from "react-router-dom";

const Main = () => {
  
  const nav = useNavigate();
  const goWrite = () => {
    nav("/writeList");
  };

  const goDetial = () => {
    // 게시글의 PK값 가져와서 이동해야하는 로직 짜야함.
    nav("/mainDetail");
  };
  return (
    <div className="main">
      <div className="contentsBox">
        <div className="contentList">
          {/* 여기 부분 map으로 불러옴. */}
          <div className="content" onClick={goDetial}>
            <div className="nameWrap">
              <img src="/images/testImg.png" />
              <label>
                Name<span>00:00:00</span>
              </label>
            </div>
            <div className="textBox">
              <p>
                일라이자 효과는 인간의 사고 과정과 감정을 AI 시스템에 잘못
                돌리는 사람들의 경향을 말하며, 따라서 시스템이 실제보다 더
                지능적이라고 믿는다. 이 현상은 1966년 MIT 교수 조셉 웨이젠바움이
                만든 챗봇인 ELIZA의 이름을 따서 명명되었다.
              </p>
            </div>
            <div>
              <p className="comment"> 댓글00</p>
            </div>
          </div>
          <div className="content" onClick={goDetial}>
            <div className="nameWrap">
              <img src="/images/testImg.png" />
              <label>
                Name<span>00:00:00</span>
              </label>
            </div>
            <div className="textBox">
              <p>
                일라이자 효과는 인간의 사고 과정과 감정을 AI 시스템에 잘못
                돌리는 사람들의 경향을 말하며, 따라서 시스템이 실제보다 더
                지능적이라고 믿는다. 이 현상은 1966년 MIT 교수 조셉 웨이젠바움이
                만든 챗봇인 ELIZA의 이름을 따서 명명되었다.
              </p>
            </div>
            <div>
              <p className="comment"> 댓글00</p>
            </div>
          </div>
          <div className="content" onClick={goDetial}>
            <div className="nameWrap">
              <img src="/images/testImg.png" />
              <label>
                Name<span>00:00:00</span>
              </label>
            </div>
            <div className="textBox">
              <p>
                일라이자 효과는 인간의 사고 과정과 감정을 AI 시스템에 잘못
                돌리는 사람들의 경향을 말하며, 따라서 시스템이 실제보다 더
                지능적이라고 믿는다. 이 현상은 1966년 MIT 교수 조셉 웨이젠바움이
                만든 챗봇인 ELIZA의 이름을 따서 명명되었다.
              </p>
            </div>
            <div>
              <p className="comment"> 댓글00</p>
            </div>
          </div>
          <div className="content" onClick={goDetial}>
            <div className="nameWrap">
              <img src="/images/testImg.png" />
              <label>
                Name<span>00:00:00</span>
              </label>
            </div>
            <div className="textBox">
              <p>
                일라이자 효과는 인간의 사고 과정과 감정을 AI 시스템에 잘못
                돌리는 사람들의 경향을 말하며, 따라서 시스템이 실제보다 더
                지능적이라고 믿는다. 이 현상은 1966년 MIT 교수 조셉 웨이젠바움이
                만든 챗봇인 ELIZA의 이름을 따서 명명되었다.
              </p>
            </div>
            <div>
              <p className="comment"> 댓글00</p>
            </div>
          </div>
        </div>
        <div>
          <button className="fillBtn writeBtn" onClick={goWrite}>
            글 쓰기
          </button>
        </div>
      </div>
    </div>
  );
};
export default Main;
