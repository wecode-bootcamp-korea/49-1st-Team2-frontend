import React, { useState, useEffect } from "react";
import "./MainDetail.scss";
import { Link } from "react-router-dom";

const MainDetail = () => {
  // const loc = useLocation();
  //key 값 사용해서 pk로 상세글, 댓글 useeffect로 가져오기
  // const [post, setpost] = useState({});
  // const [commentList, setCommentList] = useState([[]]);
  const nickName = localStorage.getItem("nickName");

  //댓글 삭제
  // const deleteComment = () => {};
  //댓글 수정
  // const updateComment = () => {};

  // useEffect(() => {
  //   fetch("/data/comment.json", {
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

  // const key = loc.state.key;
  // console.log("id : " + key);

  const [list, setList] = useState([]);
  useEffect(() => {
    fetch("/data/comment.json", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setList(data);
      });
  }, []);
  const [list1, setList1] = useState([]);
  useEffect(() => {
    fetch("/data/contents.json", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setList1(data);
      });
  }, []);

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
          {/* <div className="nameWrap">
            <img src={post.img} />
            <label>
              {post.nickName}
              <span>{post.date}</span>
            </label>
          </div>
          <div className="textBox">
            <p>{post.content}</p>
          </div>
          <div className="commentGo">
            <p> 댓글{commentList.length}</p>
          </div> */}
        </div>
        <div className="comment">
          <input className="upload"></input>
          <button className="bordBtn">댓글 작성</button>
        </div>
        <div className="comments">
          {list.map((list) => {
            return (
              <div className="post">
                <div className="postLeft">
                  <img src={list.img ? list.img : "/images/testImg.png"} />
                </div>
                <div className="postRight">
                  <div className="content">
                    <div className="postHead">
                      <span>{list.nickName}</span>
                      <div className="frame">
                        <span className="Cgray60">{list.date}</span>
                        {"홍길동" == list.nickName && (
                          <div>
                            <a className="Cred">삭제</a>
                            <a>수정</a>
                          </div>
                        )}
                      </div>
                    </div>
                    <p>{list.content}</p>
                  </div>
                </div>
              </div>
            );
          })}
          {/* {commentList.map((list) => {
            return (
              <div className="post">
                <div className="postLeft">
                  <img src={list.img ? list.img : "/images/testImg.png"} />
                </div>
                <div className="postRight">
                  <div className="content">
                    <div className="postHead">
                      <span>{list.nickName}</span>
                      <div className="frame">
                        <span className="Cgray60">{list.date}</span>
                        {nickName == list.nickName && (
                          <div>
                            <a className="Cred">삭제</a>
                            <a>수정</a>
                          </div>
                        )}
                        <a onClick={updateComment}>수정</a>
                      </div>
                    </div>
                    <p>{list.comment}</p>
                  </div>
                </div>
              </div>
            );
          })} */}
        </div>
      </div>
    </div>
  );
};
export default MainDetail;
