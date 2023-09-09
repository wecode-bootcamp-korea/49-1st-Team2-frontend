import React from "react";
import "./SignUpComplete.scss";
import { Link, useNavigate } from "react-router-dom";

const SignUpComplete = () => {
  const nav = useNavigate();
  const goHome = () => {
    nav("/");
  };

  return (
    <div className="signUpComplete">
      <header>
        <Link to="/">
          <img
            src={process.env.PUBLIC_URL + "/images/Back_arrow.png"}
            alt="앞페이지로 넘어갈 수 있는 뒤로가기 버튼이며 왼쪽을 가르키는 화살표 모양의 아이콘이다."
          />
        </Link>
        뒤로
      </header>
      <div className="complete">
        <img src="/images/banner_square.png" />
        <div>
          <p>회원 가입되었습니다!</p>
          <p>이제 로그인해주세요.</p>
        </div>
      </div>
      <button className="fillBtn" onClick={goHome}>
        확인
      </button>
    </div>
  );
};

export default SignUpComplete;
