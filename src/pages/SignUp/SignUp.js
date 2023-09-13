import React, { useEffect, useState } from "react";
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
  const [year, setYear] = useState("0");
  const [month, setMonth] = useState("0");
  const [day, setDay] = useState("0");
  const [yearList, setYearList] = useState([]);
  const [monthList, setMonthList] = useState([]);
  const [dayList, setDayList] = useState([]);

  const nav = useNavigate();
  const req = () => {
    fetch("http://10.58.52.153:8000/users/signup", {
      method: "POST",
      body: JSON.stringify({
        email: userEmail,
        password: userPassword,
        nickname: userNickname,
        phoneNumber:
          userPhoneNumber.number.length > 0
            ? userPhoneNumber.inter + "-" + userPhoneNumber.number
            : null,
        birthday:
          year === "0" || month === "0" || day == "0"
            ? null
            : year + "/" + month + "/" + day,
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

  useEffect(() => {
    let yearList2 = [];
    let monthList2 = [];
    let dayList2 = [];

    for (let i = 2023; i > 1799; i--) {
      yearList2.push(i);
    }
    for (let j = 1; j < 13; j++) {
      monthList2.push(j);
    }
    for (let k = 1; k < 32; k++) {
      dayList2.push(k);
    }

    setYearList(yearList2);
    setMonthList(monthList2);
    setDayList(dayList2);
  }, []);

  const handleYear = (e) => {
    setYear(e.target.value);
  };

  const handleMonth = (e) => {
    setMonth(e.target.value);
  };

  const handleDay = (e) => {
    setDay(e.target.value);
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
      setCheckEmail(true);
    } else {
      alert("이메일에 @는 필수입니다.");
    }
  };

  const checkNickNameBtn = (e) => {
    if (userNickname == "") {
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
                <select onChange={handleYear}>
                  <option value="0">년도</option>
                  {yearList.map((yearList) => {
                    return <option value={yearList}>{yearList}</option>;
                  })}
                </select>
              </div>
              <div className="month">
                <select onChange={handleMonth}>
                  <option value="0">월</option>
                  {monthList.map((monthList) => {
                    return <option value={monthList}>{monthList}</option>;
                  })}
                </select>
              </div>
              <div className="day">
                <select onChange={handleDay}>
                  <option value="0">일</option>
                  {dayList.map((dayList) => {
                    return <option value={dayList}>{dayList}</option>;
                  })}
                </select>
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
