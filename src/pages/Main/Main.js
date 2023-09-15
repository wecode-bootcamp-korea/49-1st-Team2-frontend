import React, { useEffect, useState } from "react";
import "./Main.scss";
import { Link, useNavigate } from "react-router-dom";

const Main = () => {
  const nav = useNavigate();
  const [list, setList] = useState();
  const nickName = localStorage.getItem("nickName");
  const goWrite = () => {
    nav("/writeList");
  };

  //mockdata
  // useEffect(() => {
  //   fetch("/data/contents.json", {
  //     method: "GET",
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setList(data);
  //     });
  // }, []);

  useEffect(() => {
    fetch("http://10.58.52.104:8000/threads", {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        setList(result.data);
      });
  }, []);

  const goDetial = (key) => {
    nav("/mainDetail", { state: { key: key } });
  };

  //글 삭제
  const deleteContents = (key) => {
    fetch("http://10.58.52.185:8000/threads", {
      method: "DELETE",
      body: JSON.stringify({
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
        if (result.message === "post deleted") {
          setList((pre) => pre.filter((item) => item.id !== key));
        } else {
          alert(result.message);
        }
      });
  };
  //글 수정
  const updateContents = (key, content) => {
    nav("/writeList", { state: { key, content } });
  };

  return (
    <div className="main">
      <div className="contentsBox">
        <div className="contentList">
          {list?.map((content) => {
            return (
              <div className="content" key={content.id}>
                <div className="nameWrap">
                  <img
                    src={
                      content.profileImage
                        ? content.profileImage
                        : "/images/testImg.png"
                    }
                  />
                  <label>
                    {content.nickname}
                    <div className="frame">
                      {nickName == content.nickname && (
                        <div>
                          <a
                            className="Cred"
                            onClick={() => deleteContents(content.id)}
                          >
                            삭제
                          </a>
                          <a
                            onClick={() =>
                              updateContents(content.id, content.content)
                            }
                          >
                            수정
                          </a>
                        </div>
                      )}
                      <span className="Cgray60">{content.createdAt}</span>
                    </div>
                  </label>
                </div>
                <div className="textBox" onClick={() => goDetial(content.id)}>
                  <p>{content.content}</p>
                </div>
                <div>
                  <p className="comment">댓글 {content.comments.length}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div>
          <button className="fillBtn writeBtn" onClick={goWrite}>
            글 쓰기
          </button>
        </div>
      </div>
    </div>
  );
};
export default Main;
