import React, { useState } from "react";
import "./WriteList.scss";
import { Link, useNavigate } from "react-router-dom";
import "../Login/Login";

const WriteList = (props) => {
  const nav = useNavigate();
  const [textSave, setTextSave] = useState("");

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
    fetch("http://10.58.52.97:8000/login", {
      method: "POST",
      body: JSON.stringify({
        text: textSave,
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
        console.log(result);
        if (token === "Login Successful") {
          alert("게시글이 등록이 완료되었습니다.");
          Link("/Main");
        } else {
          alert("오류가 발생했습니다.");
        }
      });
  };

  return (
    <div className="writeList">
      <div className="container">
        <div className="writeWrap">
          <img src="/images/testImg.png" />
          <div className="writeContent">
            <p>nickname</p>
            <textarea
              placeholder="스레드를 시작하세요."
              onChange={handleTextSave}
            ></textarea>
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
