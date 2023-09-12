import React from "react";
import "./MainDetail.scss";
import { Link, useNavigate, useLocation } from "react-router-dom";

const MainDetail = () => {
  const loc = useLocation();
  //key 값 사용해서 pk로 상세글, 댓글 useeffect로 가져오기
  const key = loc.state.key;
  console.log("id : " + key);

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
            <img src="/images/testImg.png" />
            <label>
              Name<span>00:00:00</span>
            </label>
          </div>
          <div className="textBox">
            <p>
              일라이자 효과는 인간의 사고 과정과 감정을 AI 시스템에 잘못 돌리는
              사람들의 경향을 말하며, 따라서 시스템이 실제보다 더 지능적이라고
              믿는다. 이 현상은 1966년 MIT 교수 조셉 웨이젠바움이 만든 챗봇인
              ELIZA의 이름을 따서 명명되었다.
            </p>
          </div>
          <div className="commentGo">
            <p> 댓글00</p>
          </div>
        </div>
        <div className="comment">
          <input className="upload"></input>
          <button className="bordBtn">댓글 작성</button>
        </div>
        <div className="comments">
          {/* map으로 반복 */}
          <div className="post">
            <div className="postLeft">
              <img src="/images/testImg.png" />
            </div>
            <div className="postRight">
              <div className="content">
                <div className="postHead">
                  <span>Username</span>
                  <div className="frame">
                    <span className="Cgray60">00:00:00</span>
                    <a className="Cred">삭제</a>
                    <a>수정</a>
                  </div>
                </div>
                <p>답글 내용</p>
              </div>
            </div>
          </div>
          <div className="post">
            <div className="postLeft">
              <img src="/images/testImg.png" />
            </div>
            <div className="postRight">
              <div className="content">
                <div className="postHead">
                  <span>userName</span>
                  <div className="frame">
                    <span className="Cgray60">00:00:00</span>
                    <a className="Cred">삭제</a>
                    <a>수정</a>
                  </div>
                </div>
                <p>답글 내용</p>
              </div>
            </div>
          </div>
          <div className="post">
            <div className="postLeft">
              <img src="/images/testImg.png" />
            </div>
            <div className="postRight">
              <div className="content">
                <div className="postHead">
                  <span>userName</span>
                  <div className="frame">
                    <span className="Cgray60">00:00:00</span>
                    <a className="Cred">삭제</a>
                    <a>수정</a>
                  </div>
                </div>
                <p>답글 내용</p>
              </div>
            </div>
          </div>
          <div className="post">
            <div className="postLeft">
              <img src="/images/testImg.png" />
            </div>
            <div className="postRight">
              <div className="content">
                <div className="postHead">
                  <span>userName</span>
                  <div className="frame">
                    <span className="Cgray60">00:00:00</span>
                    <a className="Cred">삭제</a>
                    <a>수정</a>
                  </div>
                </div>
                <p>답글 내용</p>
              </div>
            </div>
          </div>
          <div className="post">
            <div className="postLeft">
              <img src="/images/testImg.png" />
            </div>
            <div className="postRight">
              <div className="content">
                <div className="postHead">
                  <span>userName</span>
                  <div className="frame">
                    <span className="Cgray60">00:00:00</span>
                    <a className="Cred">삭제</a>
                    <a>수정</a>
                  </div>
                </div>
                <p>답글 내용</p>
              </div>
            </div>
          </div>
          <div className="post">
            <div className="postLeft">
              <img src="/images/testImg.png" />
            </div>
            <div className="postRight">
              <div className="content">
                <div className="postHead">
                  <span>userName</span>
                  <div className="frame">
                    <span className="Cgray60">00:00:00</span>
                    <a className="Cred">삭제</a>
                    <a>수정</a>
                  </div>
                </div>
                <p>답글 내용</p>
              </div>
            </div>
          </div>
          <div className="post">
            <div className="postLeft">
              <img src="/images/testImg.png" />
            </div>
            <div className="postRight">
              <div className="content">
                <div className="postHead">
                  <span>userName</span>
                  <div className="frame">
                    <span className="Cgray60">00:00:00</span>
                    <a className="Cred">삭제</a>
                    <a>수정</a>
                  </div>
                </div>
                <p>답글 내용</p>
              </div>
            </div>
          </div>
          <div className="post">
            <div className="postLeft">
              <img src="/images/testImg.png" />
            </div>
            <div className="postRight">
              <div className="content">
                <div className="postHead">
                  <span>userName</span>
                  <div className="frame">
                    <span className="Cgray60">00:00:00</span>
                    <a className="Cred">삭제</a>
                    <a>수정</a>
                  </div>
                </div>
                <p>답글 내용</p>
              </div>
            </div>
          </div>
          <div className="post">
            <div className="postLeft">
              <img src="/images/testImg.png" />
            </div>
            <div className="postRight">
              <div className="content">
                <div className="postHead">
                  <span>userName</span>
                  <div className="frame">
                    <span className="Cgray60">00:00:00</span>
                    <a className="Cred">삭제</a>
                    <a>수정</a>
                  </div>
                </div>
                <p>답글 내용</p>
              </div>
            </div>
          </div>
          <div className="post">
            <div className="postLeft">
              <img src="/images/testImg.png" />
            </div>
            <div className="postRight">
              <div className="content">
                <div className="postHead">
                  <span>userName</span>
                  <div className="frame">
                    <span className="Cgray60">00:00:00</span>
                    <a className="Cred">삭제</a>
                    <a>수정</a>
                  </div>
                </div>
                <p>답글 내용</p>
              </div>
            </div>
          </div>
          <div className="post">
            <div className="postLeft">
              <img src="/images/testImg.png" />
            </div>
            <div className="postRight">
              <div className="content">
                <div className="postHead">
                  <span>userName</span>
                  <div className="frame">
                    <span className="Cgray60">00:00:00</span>
                    <a className="Cred">삭제</a>
                    <a>수정</a>
                  </div>
                </div>
                <p>답글 내용</p>
              </div>
            </div>
          </div>
          <div className="post">
            <div className="postLeft">
              <img src="/images/testImg.png" />
            </div>
            <div className="postRight">
              <div className="content">
                <div className="postHead">
                  <span>userName</span>
                  <div className="frame">
                    <span className="Cgray60">00:00:00</span>
                    <a className="Cred">삭제</a>
                    <a>수정</a>
                  </div>
                </div>
                <p>답글 내용</p>
              </div>
            </div>
          </div>
          <div className="post">
            <div className="postLeft">
              <img src="/images/testImg.png" />
            </div>
            <div className="postRight">
              <div className="content">
                <div className="postHead">
                  <span>userName</span>
                  <div className="frame">
                    <span className="Cgray60">00:00:00</span>
                    <a className="Cred">삭제</a>
                    <a>수정</a>
                  </div>
                </div>
                <p>답글 내용</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MainDetail;
