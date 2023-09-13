import React, { useEffect, useState } from "react";
import "./Main.scss";
import { Link, useNavigate } from "react-router-dom";

const Main = () => {
  const nav = useNavigate();
  const [list, setList] = useState([]);
  const goWrite = () => {
    nav("/writeList");
  };

  useEffect(() => {
    fetch("/data/contents.json", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setList(data);
      });
  }, []);

  const goDetial = (key) => {
    // 게시글의 PK값 가져와서 이동해야하는 로직 짜야함.
    nav("/mainDetail", { state: { key: key } });
  };

  return (
    <div className="main">
      <div className="contentsBox">
        <div className="contentList">
          {/* 여기 부분 map으로 불러옴. */}
          {list.map((content) => {
            return (
              <div
                className="content"
                key={content.id}
                onClick={() => goDetial(content.id)}
              >
                <div className="nameWrap">
                  <img
                    src={content.img ? content.img : "/images/testImg.png"}
                  />
                  <label>
                    {content.nickName}
                    <span>{content.date}</span>
                  </label>
                </div>
                <div className="textBox">
                  <p>{content.content}</p>
                </div>
                <div>
                  <p className="comment">댓글{content.reviewCnt}</p>
                </div>
              </div>
            );
          })}
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
