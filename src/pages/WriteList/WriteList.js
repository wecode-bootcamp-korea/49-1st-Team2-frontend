import React, { useEffect, useState } from "react";
import "./WriteList.scss";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "../Login/Login";

const WriteList = () => {
  const nav = useNavigate();
  const [textSave, setTextSave] = useState("");
  const nickName = localStorage.getItem("nickName");
  const loc = useLocation();
  let key = null;
  if (loc.state != null) {
    key = loc.state.key;
  }

  // useEffect(() => {
  //   if (!nickName) {
  //     alert("유저 정보가 없습니다. 로그인을 먼저 해주세요.");
  //     nav("/");
  //   }
  // }, []);

  const handleTextSave = (e) => {
    setTextSave(e.target.value);
  };

  const goBack = () => {
    nav("/main");
  };

  // fetch("http://10.58.52.97:8000/login", {
  //   method: "GET",
  // })
  //   .then()
  //   .then();

  const update = () => {
    if (textSave.length === 0) {
      alert("수정된 부분이 없습니다.");
    } else {
      fetch("http://10.58.52.104:8000/threads", {
        method: "PATCH",
        body: JSON.stringify({
          content: textSave,
          postId: key,
        }),
        headers: {
          "Content-Type": "application/json;charset=utf-8",
          Authorization: localStorage.getItem("token"),
        },
      })
        .then((res) => {
          return res.json();
        })
        .then((result) => {
          if (result.message === "post updated") {
            alert("게시글이 수정이 완료되었습니다.");
            nav("/main");
          } else {
            alert(result.message);
          }
        });
    }
  };

  const req = () => {
    if (textSave.length === 0) {
      alert("게시글을 입력해주세요.");
    } else {
      fetch("http://10.58.52.104:8000/threads", {
        method: "POST",
        body: JSON.stringify({
          content: textSave,
        }),
        headers: {
          "Content-Type": "application/json;charset=utf-8",
          Authorization: localStorage.getItem("token"),
        },
      })
        .then((res) => {
          return res.json();
        })
        .then((result) => {
          if (result.message === "post created") {
            alert("게시글이 등록이 완료되었습니다.");
            nav("/Main");
          } else {
            alert("오류가 발생했습니다.");
          }
        });
    }
  };

  return (
    <div className="writeList">
      <div className="container">
        <div className="writeWrap">
          <div className="imgWrap">
            <img src="/images/testImg.png" />
          </div>
          <div className="writeContent">
            <div className="nickNameWrap">
              <p>{nickName}</p>
            </div>
            <div className="textWrap">
              <textarea
                placeholder="스레드를 시작하세요."
                onChange={handleTextSave}
              >
                {key && loc.state.content}
              </textarea>
            </div>
          </div>
        </div>
        <div className="btnWrap">
          <button className="bordBtn" onClick={goBack}>
            취소
          </button>
          <button className="fillBtn" onClick={key ? update : req}>
            {key ? "수정" : "등록"}
          </button>
        </div>
      </div>
    </div>
  );
};
export default WriteList;
