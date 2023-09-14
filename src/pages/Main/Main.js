import React, { useEffect, useState } from "react";
import "./Main.scss";
import { Link, useNavigate } from "react-router-dom";

const Main = () => {
  const nav = useNavigate();
  const [list, setList] = useState([]);
  const nickName = localStorage.getItem("nickName");
  // 테스트
  // localStorage.setItem("nickName", "홍길동");
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

  //글 삭제
  const deleteContents = (key) => {
    //fetch문 써서 삭제되면 밑에 2가지 방법 실행
    //setList((info) => info.filter((item) => item.id !== key)); 프론트엔드에서 직접 데이터를 삭제
    //window.location.reload(); 새로고침해서 백엔드에서 데이터 리로딩
  };
  //글 수정
  const updateContents = (key) => {};

  return (
    <div className="main">
      <div className="contentsBox">
        <div className="contentList">
          {/* 여기 부분 map으로 불러옴. */}
          {list.map((content) => {
            return (
              <div className="content" key={content.id}>
                <div className="nameWrap">
                  <img
                    src={content.img ? content.img : "/images/testImg.png"}
                  />
                  <label>
                    {content.nickName}
                    {/* <span>{content.date}</span> */}

                    <div className="frame">
                      <span className="Cgray60">{content.date}</span>
                      {nickName == content.nickName && (
                        <div>
                          <a
                            className="Cred"
                            onClick={() => deleteContents(content.id)}
                          >
                            삭제
                          </a>
                          <a onClick={() => updateContents(content.id)}>수정</a>
                        </div>
                      )}
                    </div>
                  </label>
                </div>
                <div className="textBox" onClick={() => goDetial(content.id)}>
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
