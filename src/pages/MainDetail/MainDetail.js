import React, { useState, useEffect } from "react";
import "./MainDetail.scss";
import { Link, useLocation } from "react-router-dom";

const MainDetail = () => {
  const loc = useLocation();
  //key 값 사용해서 pk로 상세글, 댓글 useeffect로 가져오기
  const [post, setpost] = useState({});
  const [commentList, setCommentList] = useState([]);
  const nickName = localStorage.getItem("nickName");
  // const [commentPut, setCommentPut] = useState("");
  let key = null;
  if (loc.state.key != null) {
    key = loc.state.key;
  }
  console.log("id : " + key);

  //댓글 삭제
  // const deleteComment = () => {};
  //댓글 수정
  // const updateComment = () => {};

  // const handleCommentPut = (e) => {
  //   setCommentPut(e.target.value);
  // };

  // const sendComment = () => {
  //   if (commentPut.length === 0) {
  //     alert("댓글을 입력해주세요");
  //   } else {
  //     fetch("http://", {
  //       method: "POST",
  //       body: JSON.stringify({
  //         nickName: nickName,
  //         content: commentPut,
  //       }),
  //       headers: {
  //         "Content-Type": "application/json;charset=utf-8",
  //       },
  //     })
  //       .then((res) => {
  //         if (res.ok === true) {
  //           return res.json();
  //         }
  //         throw new Error("오류입니다.");
  //       })
  //       .then((result) => {
  //         if (result.message === "") {
  //           alert("댓글이 등록되었습니다.");
  //         }
  //       });
  //   }
  // };

  // useEffect(() => {
  //   fetch("http://10.58.52.59:8000/users/", {
  //     method: "POST",
  //     body: JSON.stringify({

  //       id: key,
  //     }),
  //     headers: {
  //       "Content-Type": "application/json;charset=utf-8",
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setpost({
  //         nickName: data.nickName,
  //         content: data.content,
  //         img: data.img,
  //       });
  //       setCommentList([data.comment]);
  //     });
  // }, []);

  useEffect(() => {
    fetch(`http://10.58.52.185:8000/threads/${key}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        setpost(result.data);
        console.log(result.data);
        setCommentList(result.data.comments);
        console.log(commentList);
      });
  }, []);
  // const [list1, setList1] = useState([]);
  // useEffect(() => {
  //   fetch("/data/contents.json", {
  //     method: "GET",
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setList1(data);
  //     });
  // }, []);

  return (
    <div className="mainDetail">
      <div className="container">
        <header>
          <Link to="/main">
            <img
              src={process.env.PUBLIC_URL + "/images/Back_arrow.png"}
              alt="앞페이지로 넘어갈 수 있는 뒤로가기 버튼이며 왼쪽을 가르키는 화살표 모양의 아이콘이다."
            />
          </Link>
          뒤로
        </header>
        <div className="contentsCompo">
          <div className="nameWrap">
            <img src={post.profileImage} />
            <label>
              {post.nickname}
              <span>{post.createdAt}</span>
            </label>
          </div>
          <div className="textBox">
            <p>{post.content}</p>
          </div>
          <div className="commentGo">
            <p> 댓글{commentList.length}</p>
          </div>
        </div>
        <div className="comment">
          <input className="upload"></input>
          <button className="bordBtn">댓글 작성</button>
        </div>
        <div className="comments">
          {commentList.map((list) => {
            return (
              <div className="post">
                <div className="postLeft">
                  <img src={list.img ? list.img : "/images/testImg.png"} />
                </div>
                <div className="postRight">
                  <div className="content">
                    <div className="postHead">
                      <span>{list.nickname}</span>
                      <div className="frame">
                        <span className="Cgray60">{list.createdAt}</span>
                        {nickName == list.nickname && (
                          <div>
                            <a className="Cred">삭제</a>
                            <a>수정</a>
                          </div>
                        )}
                        <a>수정</a>
                      </div>
                    </div>
                    <p>{list.comment}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default MainDetail;
