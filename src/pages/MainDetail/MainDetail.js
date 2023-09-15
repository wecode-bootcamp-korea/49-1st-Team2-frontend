import React, { useState, useEffect } from "react";
import "./MainDetail.scss";
import { Link, useLocation } from "react-router-dom";

const MainDetail = () => {
  const loc = useLocation();
  const [post, setpost] = useState({});
  const [commentList, setCommentList] = useState([]);
  const [commentPut, setCommentPut] = useState("");
  const [commentRe, setCommetRe] = useState({
    state: false,
    comment: "",
    id: "",
  });

  let key = null;
  if (loc.state != null) {
    key = loc.state.key;
  }

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

  useEffect(() => {
    fetch(`http://10.58.52.104:8000/threads/${key}`, {
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

  const handleCommentPut = (e) => {
    setCommentPut(e.target.value);
  };

  const sendComment = () => {
    if (commentPut.length === 0) {
      alert("댓글을 입력해주세요");
    } else {
      fetch("http://10.58.52.104:8000/comments", {
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
          location.reload();
        });
    }
  };

  const deletComment = (commentId) => {
    fetch("http://10.58.52.104:8000/comments", {
      method: "DELETE",
      body: JSON.stringify({
        commentId,
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
        alert("댓글이 삭제되었습니다.");
        setCommentList((pre) => pre.filter((item) => item.id !== commentId));
      });
  };

  //댓글 수정
  const handleComment = (comment, id) => {
    setCommetRe((pre) => {
      return { state: true, comment, id };
    });
  };

  const updateComment = () => {
    if (commentPut.length === 0) {
      alert("댓글을 수정해주세요");
    } else {
      fetch("http://10.58.52.104:8000/comments", {
        method: "PATCH",
        body: JSON.stringify({
          comment: commentPut,
          commentId: commentRe.id,
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
          alert("댓글이 수정되었습니다.");
          location.reload();
        });
    }
  };

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
          <input
            className="upload"
            onChange={handleCommentPut}
            defaultValue={commentRe.state ? commentRe.comment : ""}
          ></input>
          <button
            className="bordBtn"
            onClick={commentRe.state ? updateComment : sendComment}
          >
            {commentRe.state ? "수정" : "댓글 작성"}
          </button>
        </div>
        <div className="comments">
          {commentList.map((list) => {
            return (
              <div className="post">
                <div className="postLeft">
                  <img src={list.img} />
                </div>
                <div className="postRight">
                  <div className="content">
                    <div className="postHead">
                      <span>{list.nickname}</span>
                      <div className="frame">
                        <span className="Cgray60">{list.createdAt}</span>
                        {list.isMyReply ? (
                          <div className="btnWrap">
                            <button
                              className="Cred"
                              onClick={() => deletComment(list.id)}
                            >
                              삭제
                            </button>
                            <button
                              onClick={() =>
                                handleComment(list.comment, list.id)
                              }
                            >
                              수정
                            </button>
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
