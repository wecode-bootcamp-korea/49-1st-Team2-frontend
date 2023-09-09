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
        <ul className="put">
          <li className="baseInfo">
            <ul required className="normalInfo">
              <label htmlFor="userEmail">
                기본 정보 <span className="redText">필수 사항</span>
              </label>
              <li>
                <input type="email" id="userEmail" placeholder="이메일" />
              </li>
              <li>
                <input type="password" id="userPw" placeholder="비밀번호" />
              </li>
              <li>
                <input
                  type="password"
                  id="userPwCheck"
                  placeholder="비밀번호확인"
                />
              </li>
            </ul>
          </li>
          <li className="nickname">
            <ul>
              <label htmlFor="userName">
                닉네임과 프로필 이미지{" "}
                <span className="subText">선택 사항</span>
              </label>
              <li>
                <input
                  type="name"
                  id="userName"
                  placeholder="닉네임"
                  autoComplete="off"
                />
              </li>
            </ul>
          </li>
          <li className="telephone">
            <ul className="telUser">
              <label htmlFor="userPhone">
                전화번호 <span className="subText">선택 사항</span>
              </label>
              <div>
                <ul>
                  <li className="phoneWrap">
                    <select id="userPhone" defaultValue="num1">
                      <option value="num1">010</option>
                      <option value="num2">011</option>
                      <option value="num3">016</option>
                      <option value="num4">018</option>
                    </select>
                  </li>
                  <li className="telWrap">
                    <input
                      type="tel"
                      id="userTel"
                      placeholder="휴대폰 번호를 입력해 주세요"
                    />
                  </li>
                </ul>
              </div>
            </ul>
          </li>
          <li className="birthday">
            <ul>
              <label htmlFor="birthYear">
                생일 <span className="subText">선택 사항</span>
              </label>
              <li>
                <ul className="birthSelect">
                  <li className="year">
                    <Year />
                  </li>
                  <li className="month">
                    <Month />
                  </li>
                  <li className="day">
                    <Day />
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </section>
      <footer>
        <input type="button" className="btn" value="회원가입" onClick={req} />
      </footer>
    </div>
  );
};

export default SignUp;
