import React, { useState } from "react";
import "./WriteList.scss";
import { Link, useNavigate } from "react-router-dom";

const WriteList = () => {
  const nav = useNavigate();
  const [textSave, setTextSave] = useState("");

  const handleTextSave = (e) => {
    setTextSave(e.target.value);
    console.log(textSave);
  };

  const goBack = () => {
    nav("/main");
  };

  const save = () => {
    alert("준비중 !");
  };

  return (
    <div className="writeList">
      <div className="container">
        <div className="writeWrap">
          <img src="/images/testImg.png" />
          <div className="writeContent">
            <p>Name</p>
            <textarea
              Placeholder="스레드를 시작하세요."
              onChange={handleTextSave}
            ></textarea>
          </div>
        </div>
        <div className="btnWrap">
          <button className="bordBtn" onClick={goBack}>
            취소
          </button>
          <button className="fillBtn" onClick={save}>
            게시
          </button>
        </div>
      </div>
    </div>
  );
};
export default WriteList;
