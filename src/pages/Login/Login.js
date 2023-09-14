import React, { useState } from "react";
import "./Login.scss";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const nav = useNavigate();
  const [userPassword, setUserPassword] = useState("");
  const [userEmail, setUserEmail] = useState("");

  const saveUserId = (event) => {
    setUserEmail(event.target.value);
  };

  const saveUserPassword = (event) => {
    setUserPassword(event.target.value);
  };

  const isTurnOn = userEmail.includes("@") && userPassword.length >= 10;

  const req = () => {
    fetch("http://10.58.52.249:8000/users/login", {
      method: "POST",
      body: JSON.stringify({
        email: userEmail,
        password: userPassword,
      }),
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
    })
      .then((res) => {
        if (res.ok === true) {
          return res.json();
        }
        throw new Error("오류입니다.");
      })
      .catch((error) => alert(error))
      .then((result) => {
        if (result.message === "login success") {
          localStorage.setItem("token", result.token);
          localStorage.setItem("userCode", result.id);
          localStorage.setItem("nickName", result.nickname);
          nav("/Main");
          alert("로그인 성공");
        } else {
          alert("로그인 실패");
        }
      });
    nav("/Main");
  };

  return (
    <div className="login">
      <header>
        <img
          className="mainLogo"
          src={process.env.PUBLIC_URL + "/images/Logo.png"}
          alt="위코드의 로고"
        />
        <img
          className="textLogo"
          src={process.env.PUBLIC_URL + "/images/logo_wecode.png"}
          alt="위코드의 한글 로고"
        />
      </header>
      <section className="textBlock">
        <input
          type="email"
          id="email"
          placeholder="이메일"
          value={userEmail}
          onChange={saveUserId}
        />
        <input
          type="password"
          id="password"
          placeholder="비밀번호"
          value={userPassword}
          onChange={saveUserPassword}
        />
        <div className="btnWrap">
          <input
            type="button"
            className="fillBtn btn"
            disabled={!isTurnOn}
            value="로그인"
            onClick={req}
          />
        </div>
        <ul>
          <li>
            <Link to="/signUp">회원 가입</Link>
          </li>
          <li>
            <Link to="/find">비밀번호 찾기</Link>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Login;
