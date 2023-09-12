import React from "react";
import "./RePassword.scss";
import { Link } from "react-router-dom";

const RePassword = () => {
  return (
    <div className="repassword">
      <header>
        <Link to="/find">
          <img
            src={process.env.PUBLIC_URL + "/images/Back_arrow.png"}
            alt="앞페이지로 넘어갈 수 있는 뒤로가기 버튼이며 왼쪽을 가르키는 화살표 모양의 아이콘이다."
          />
        </Link>
        뒤로
      </header>
      <div className="putPwWrap">
        <div>
          <div className="pwWrap">
            <input type="password" id="userPassword" placeholder="비밀번호" />
          </div>
          <div className="pwWrap">
            <input type="password" id="checkPw" placeholder="비밀번호 확인" />
          </div>
        </div>
      </div>
      <div className="btnWrap">
        <input type="button" className="fillBtn btn" value="확인" />
      </div>
    </div>
  );
};

export default RePassword;
