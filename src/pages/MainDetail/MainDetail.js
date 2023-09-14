import React, { useState, useEffect } from "react";
import "./MainDetail.scss";
import { Link, useLocation } from "react-router-dom";

const MainDetail = () => {
  const loc = useLocation();
  //key 값 사용해서 pk로 상세글, 댓글 useeffect로 가져오기
  const [post, setpost] = useState({});
  const [commentList, setCommentList] = useState([]);
  const [commentPut, setCommentPut] = useState("");
  const [commentRe, setCommetRe] = useState(commentList);
  const nickName = localStorage.getItem("nickName");

  console.log(nickName);

  let key = null;
  if (loc.state != null) {
    key = loc.state.key;
  }

  // const commentId =
  //댓글 삭제
  // const deleteComment = () => {};
  //댓글 수정
  // const updateComment = () => {};

  const handleCommentPut = (e) => {
    setCommentPut(e.target.value);
  };

  const sendComment = () => {
    if (commentPut.length === 0) {
      alert("댓글을 입력해주세요");
    } else {
      fetch("http://10.58.52.185:8000/comments", {
        method: "POST",
        body: JSON.stringify({
          comment: commentPut,
          threadId: key,
        }),
        headers: {
          "Content-Type": "application/json;charset=utf-8",
          Authorization: localStorage.getItem("token"),
        },
      })
        .then((res) => {
          if (res.ok === true) {
            return res.json();
          }
          throw new Error("오류입니다.");
        })
        .then(() => {
          alert("댓글이 등록되었습니다.");
        });
    }
  };

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

  const deletComment = () => {
    fetch("http://10.58.52.185:8000/comments", {
      method: "DELETE",
      body: JSON.stringify({
        commentId: key,
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
        console.log(result);
      });
  };

  // useEffect((prev) => {
  //   setCommetRe(prev, { contents });
  // }, commentList);
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
          <input className="upload" onChange={handleCommentPut}></input>
          <button className="bordBtn" onClick={sendComment}>
            댓글 작성
          </button>
        </div>
        <div className="comments">
          {commentList.map((list) => {
            return (
              <div className="post">
                <div className="postLeft">
                  <img src={list.img} />
                  {/* 이미지 db에 있는 로그인한 사용자의 이미지로 안나와요 */}
                </div>
                <div className="postRight">
                  <div className="content">
                    <div className="postHead">
                      <span>{list.nickname}</span>
                      <div className="frame">
                        <span className="Cgray60">{list.createdAt}</span>
                        {nickName == "post45" ? (
                          <div className="btnWrap">
                            <button className="Cred" onClick={deletComment}>
                              삭제
                            </button>
                            <button>수정</button>
                          </div>
                        ) : null}
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
