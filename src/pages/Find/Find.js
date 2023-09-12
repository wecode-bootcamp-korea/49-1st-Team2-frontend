import React, { useState } from "react";
import "./Find.scss";
import { Link } from "react-router-dom";

const Find = () => {
  const [userEmail, setUserEmail] = useState("");
  const [popUp, setPopUp] = useState("off");

  const checkEmail = true;

  const handleUserEmail = (e) => {
    setUserEmail(e.target.value);
  };

  const req = () => {
    // fetch("http://10.58.52.160:8000/users", {
    //   method: "POST",
    //   body: JSON.stringify({
    //     email: userEmail,
    //     url: "http://localhost:3000/repassword",
    //   }),
    //   headers: {
    //     "Content-Type": "application/json;charset=utf-8",
    //   },
    // })
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((result) => {
    //     if (req.ok === false) {
    //       alert("가입 이력이 없는 회원입니다.");
    //     } else {
    //       setPopUp("on");
    //     }
    //     console.log(result);
    //   });
  };

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
                type="text"
                id="userEmail"
                placeholder="이메일"
                onChange={handleUserEmail}
              />
            </div>
            <div className="checkBtnWrap">
              <input
                type="button"
                className="bordBtn sign"
                value="중복 확인"
                onClick={req}
                disabled={userEmail.includes("@") ? !checkEmail : checkEmail}
              />
            </div>
          </div>
          <div className={popUp}>
            이메일이 발송되었습니다. 이메일을 확인해주세요.
          </div>
        </div>
        <div className="imgWrap">
          <img
            src={process.env.PUBLIC_URL + "/images/password_img.svg"}
            alt="배경사진"
          />
        </div>
      </div>
    </div>
  );
};

export default Find;
