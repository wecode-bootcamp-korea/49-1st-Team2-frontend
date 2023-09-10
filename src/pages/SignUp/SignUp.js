import React from "react";
import "./SignUp.scss";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const nav = useNavigate();
  const req = () => {
    //   fetch("http://10.58.52.160:8000/users", {
    //     method: "POST",
    //     body: JSON.stringify({
    //       email: "youngeun@gmail.com",
    //       password: "9875648579!!",
    //       name: "이영은",
    //     }),
    //     headers: {
    //       "Content-Type": "application/json;charset=utf-8",
    //     },
    //   })
    //     .then((res) => {
    //       return res.json();
    //     })
    //     .then((result) => {
    //       console.log(result);
    //     });
    nav("/signupComplete");
  };

  const Year = () => {
    const yearList = [];

    for (let i = 2023; i > 1799; i--) {
      yearList.push(<option key={i}>{i}년</option>);
    }

    return (
      <select id="birthYear" defaultValue={yearList[0]}>
        {yearList}
      </select>
    );
  };

  const Month = () => {
    const monthList = [];

    for (let i = 1; i < 13; i++) {
      monthList.push(<option key={i}>{i}월</option>);
    }

    return (
      <select id="birthMonth" defaultValue={monthList[0]}>
        {monthList}
      </select>
    );
  };

  const Day = () => {
    const dayList = [];

    for (let i = 1; i < 32; i++) {
      dayList.push(<option key={i}>{i}일</option>);
    }

    return (
      <select id="birthDay" defaultValue={dayList[0]}>
        {dayList}
      </select>
    );
  };

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
                <input type="email" id="userEmail" placeholder="이메일" />
              </div>
              <div className="infoWrap">
                <input type="password" id="userPw" placeholder="비밀번호" />
              </div>
              <div className="infoWrap">
                <input
                  type="password"
                  id="userPwCheck"
                  placeholder="비밀번호 확인"
                />
              </div>
            </div>
          </div>
          <div className="nicknamewrap">
            <label htmlFor="userName">
              닉네임<span className="subText">선택 사항</span>
            </label>
            <div className="nickname">
              <div className="inputWrap">
                <input
                  type="name"
                  id="userName"
                  placeholder="닉네임"
                  autoComplete="off"
                />
              </div>
              <div className="fileSelect">
                <input type="button" value="파일 선택"></input>
                <div> 파일을 선택해주세요 </div>
              </div>
            </div>
          </div>
          <div className="telephone">
            <label htmlFor="userPhone">
              전화번호 <span className="subText">선택 사항</span>
            </label>
            <div className="telUser">
              <select id="userPhone" defaultValue="num1">
                <option value="num1">010</option>
                <option value="num2">011</option>
                <option value="num3">016</option>
                <option value="num4">018</option>
              </select>
              <input
                type="tel"
                id="userTel"
                placeholder="휴대폰 번호를 입력해 주세요"
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
        />
      </section>
    </div>
  );
};

export default SignUp;
