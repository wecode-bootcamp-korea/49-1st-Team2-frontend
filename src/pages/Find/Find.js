import React from "react";
import "./Find.scss";
import { Link, useNavigate } from "react-router-dom";

const Find = () => {
  return (
    <div className="find">
      <header>
        <Link to="/">
          <img
            src={process.env.PUBLIC_URL + "/images/Back_arrow.png"}
            alt="앞페이지로 넘어갈 수 있는 뒤로가기 버튼이며 왼쪽을 가르키는 화살표 모양의 아이콘이다."
          />
        </Link>
        뒤로
      </header>
      <div className="emailCheckWrap">
        <div className="textWrap">
          <div className="emailCheck">
            <div className="checkEmailWrap">
              <input
                type="email"
                id="userEmail"
                placeholder="이메일"
                // onChange={handleUserEmail}
                // disabled={checkEmail}
              />
            </div>
            <div className="checkBtnWrap">
              <input
                type="button"
                className="bordBtn sign"
                value="중복 확인"
                // onClick={checkEmailBtn}
                // disabled={checkEmail}
              />
            </div>
          </div>
          <div className="textRed">
            이메일이 발송되었습니다. 이메일을 확인해주세요.
          </div>
        </div>
        <div className="imgWrap">
          <img
            src={process.env.PUBLIC_URL + "/images/school-2596090.svg"}
            alt="배경사진"
          />
        </div>
      </div>
    </div>
  );
};

export default Find;
