import React, { useEffect, useState } from "react";
import "./WriteList.scss";
import { Link, useNavigate } from "react-router-dom";
import "../Login/Login";

const WriteList = () => {
  const nav = useNavigate();
  const [textSave, setTextSave] = useState("");
  const nickName = localStorage.getItem("nickName");

  // useEffect(() => {
  //   if (!nickName) {
  //     alert("유저 정보가 없습니다. 로그인을 먼저 해주세요.");
  //     nav("/");
  //   }
  // }, []);

  const handleTextSave = (e) => {
    setTextSave(e.target.value);
  };

  const goBack = () => {
    nav("/main");
  };

  // fetch("http://10.58.52.97:8000/login", {
  //   method: "GET",
  // })
  //   .then()
  //   .then();

  const req = () => {
    if (textSave.length === 0) {
      alert("게시글을 입력해주세요.");
    } else {
      fetch("http://10.58.52.59:8000/threads", {
        method: "POST",
        body: JSON.stringify({
          content: textSave,
        }),
        headers: {
          "Content-Type": "application/json;charset=utf-8",
          Authorization: localStorage.getItem("token"),
        },
      })
        .then((res) => {
          return res.json();
        })
        .then((result) => {
          if (result.message === "post created") {
            alert("게시글이 등록이 완료되었습니다.");
            nav("/Main");
          } else {
            alert("오류가 발생했습니다.");
          }
        });
    }
  };

  return (
    <div className="writeList">
      <div className="container">
        <div className="writeWrap">
          <div className="imgWrap">
            <img src="/images/testImg.png" />
          </div>
          <div className="writeContent">
            <div className="nickNameWrap">
              <p>{nickName}</p>
            </div>
            <div className="textWrap">
              <textarea
                placeholder="스레드를 시작하세요."
                onChange={handleTextSave}
              ></textarea>
            </div>
          </div>
        </div>
        <div className="btnWrap">
          <button className="bordBtn" onClick={goBack}>
            취소
          </button>
          <button className="fillBtn" onClick={req}>
            게시
          </button>
        </div>
      </div>
    </div>
  );
};
export default WriteList;
