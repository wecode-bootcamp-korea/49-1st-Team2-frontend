import React, { useState } from "react";
import "./SignUp.scss";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [userEmail, setEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userCheckPassword, setUserCheckPassword] = useState("");
  const [userNickname, setNickname] = useState("");
  const [userPhoneNumber, setPhoneNumber] = useState({
    inter: "010",
    number: "",
  });
  const [checkEmail, setCheckEmail] = useState(false);
  const [checkNickname, setCheckNickname] = useState(false);

  const nav = useNavigate();
  const req = () => {
    const year = document.getElementById("birthYear").value;
    const month = document.getElementById("birthMonth").value;
    const day = document.getElementById("birthDay").value;

    fetch("http://10.58.52.153:8000/users/signup", {
      method: "POST",
      body: JSON.stringify({
        email: userEmail,
        password: userPassword,
        nickname: userNickname,
        phoneNumber: userPhoneNumber.inter + "-" + userPhoneNumber.number,
        birthday: year + "/" + month + "/" + day,
        profileImage: "http://www.google.com",
      }),
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        if (result.message === "SIGNUP_SUCCESS") {
          nav("/signupComplete");
        } else {
          alert("오류입니다.");
        }
      });
  };

  const Year = () => {
    const yearList = [];

    for (let i = 2023; i > 1799; i--) {
      yearList.push(
        <option key={i} value={i}>
          {i}년
        </option>
      );
    }
    return (
      <select id="birthYear">
        <option value={0}>년도</option>
        {yearList}
      </select>
    );
  };

  const Month = () => {
    const monthList = [];

    for (let i = 1; i < 13; i++) {
      monthList.push(
        <option key={i} value={i}>
          {i}월
        </option>
      );
    }

    return (
      <select id="birthMonth">
        <option value={0}>월</option>
        {monthList}
      </select>
    );
  };

  const Day = () => {
    const dayList = [];

    for (let i = 1; i < 32; i++) {
      dayList.push(
        <option key={i} value={i}>
          {i}일
        </option>
      );
    }

    return (
      <select id="birthDay">
        <option value={0}>일</option>
        {dayList}
      </select>
    );
  };

  const handleUserEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleUserPassword = (e) => {
    setUserPassword(e.target.value);
  };

  const handleUserCheckPassword = (e) => {
    setUserCheckPassword(e.target.value);
  };

  const handleNickname = (e) => {
    setNickname(e.target.value);
  };

  const checkEmailBtn = () => {
    if (userEmail.includes("@")) {
      console.log("이메일 확인 : " + userEmail);
      setCheckEmail(true);
    } else {
      alert("이메일에 @는 필수입니다.");
    }
  };

  const checkNickNameBtn = (e) => {
    console.log("닉네임 확인 : " + userNickname);
    if (e.target.value) {
      return null;
    } else {
      setCheckNickname(true);
    }
  };

  const handleUserPhone = (e) => {
    e.target.value = e.target.value
      .replace(/[^0-9]/g, "")
      .replace(/([0-9]{3,4})([0-9]{4})/g, "$1-$2");
    setPhoneNumber((pre) => {
      return { ...pre, number: e.target.value };
    });
  };

  const handleInterNumber = (e) => {
    setPhoneNumber((pre) => {
      return { ...pre, inter: e.target.value };
    });
  };

  const regex_pattern = /.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\|-].*/;

  const completeSign =
    checkNickname &&
    checkEmail &&
    userPassword.length > 10 &&
    userPassword === userCheckPassword &&
    regex_pattern.test(userPassword);

  return (
    <div className="signUp">
      <header>
        <Link to="/">
          <img
            src={process.env.PUBLIC_URL + "/images/Back_arrow.png"}
            alt="앞페이지로 넘어갈 수 있는 뒤로가기 버튼이며 왼쪽을 가르키는 화살표 모양의 아이콘이다."
          />
        </Link>
        뒤로
      </header>
      <section className="putInfo">
        <h1>회원가입</h1>
        <div className="put">
          <div className="baseInfo">
            <label htmlFor="userEmail">
              기본 정보 <span className="redText">필수 사항</span>
            </label>
            <div className="normalInfo" required>
              <div className="infoWrap">
                <input
                  type="email"
                  id="userEmail"
                  placeholder="이메일"
                  onChange={handleUserEmail}
                  disabled={checkEmail}
                />
                <div className="checkBtnWrap">
                  <input
                    type="button"
                    className="bordBtn sign"
                    value="중복 확인"
                    onClick={checkEmailBtn}
                    disabled={checkEmail}
                  />
                </div>
              </div>
              <div className="infoWrap">
                <input
                  type="password"
                  id="userPw"
                  placeholder="비밀번호"
                  onChange={handleUserPassword}
                />
              </div>
              <div className="infoWrap">
                <input
                  type="password"
                  id="userPwCheck"
                  placeholder="비밀번호 확인"
                  onChange={handleUserCheckPassword}
                />
              </div>
              <div className="infoWrap">
                <input
                  type="name"
                  id="userName"
                  placeholder="닉네임"
                  autoComplete="off"
                  onChange={handleNickname}
                  disabled={checkNickname}
                />
                <div className="checkBtnWrap">
                  <input
                    type="button"
                    className="bordBtn sign"
                    value="중복 확인"
                    onClick={checkNickNameBtn}
                    disabled={checkNickname}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="nicknamewrap">
            <label htmlFor="profile">
              프로필 사진<span className="subText">선택 사항</span>
            </label>
            <div className="nickname">
              <div className="fileSelect">
                <input type="button" id="profile" value="파일 선택"></input>
                <div> 파일을 선택해주세요 </div>
              </div>
            </div>
          </div>
          <div className="telephone">
            <label htmlFor="userPhone">
              전화번호 <span className="subText">선택 사항</span>
            </label>
            <div className="telUser">
              <select
                id="userPhone"
                defaultValue="num1"
                onChange={handleInterNumber}
              >
                <option value="010">010</option>
                <option value="011">011</option>
                <option value="016">016</option>
                <option value="018">018</option>
              </select>
              <input
                type="tel"
                id="userTel"
                placeholder="휴대폰 번호를 입력해 주세요"
                onChange={handleUserPhone}
                maxLength="9"
              />
            </div>
          </div>
          <div className="birthday">
            <label htmlFor="birthYear">
              생일 <span className="subText">선택 사항</span>
            </label>
            <div className="birthSelcet">
              <div className="year">
                <Year />
              </div>
              <div className="month">
                <Month />
              </div>
              <div className="day">
                <Day />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="buttonWrap">
        <input
          type="button"
          className="fillBtn btn"
          value="회원가입"
          onClick={req}
          disabled={!completeSign}
        />
      </section>
    </div>
  );
};

export default SignUp;
