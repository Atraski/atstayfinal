import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { MdOutlineClose } from "react-icons/md";

const PopUp = ({
  onclick,
  img,
  isCoverVisible,
  searchQuery,
  setSearchQuery,
  setIsCoverVisible,
  showPopUp,
  setShowPopUp,
}) => {
  const thisbtn = () => {
    console.log("this btn", isCoverVisible);
  };
  return (
    <Wrapper>
      <div
        className={showPopUp ? "show pop-container" : "hide pop-container"}
        onclick={(e) => e.stopPropagation()}
      >
        <div className="close-btn" onClick={() => setShowPopUp(false)}>
          <MdOutlineClose style={{ color: "white" }} />
        </div>
        <div className="links-container">
          <div>
            <div className="img-container">
              <Link to="/">
                <img src={img} alt="" srcset="" />
              </Link>
            </div>
          </div>
          <div className="search-container" onclick={(e)=>e.stopPropagation()}>
            <input
              type="text"
              // className="desti"
              placeholder="Destination"
              value={searchQuery}
              onChange={(e) => {
                setIsCoverVisible(false);
                setSearchQuery(e.target.value);
              }}
              style={{
                maxWidth: "200px",
                height: "50%",
                marginTop: "13px",
                padding: "15px",
                border: "1px solid #000",
                borderRadius: "20px",
              }}
            />
          </div>
          <nav>
            <ul>
              <li>
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/attours" className="nav-link">
                  Tour
                </Link>
              </li>
              <li>
                <Link to="/atstays" className="nav-link">
                  Stays
                </Link>
              </li>
              <li>
                <Link to="/bloggerpage" className="nav-link">
                  Blogs
                </Link>
              </li>
            </ul>
          </nav>

          <button onClick={thisbtn}>this btn</button>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  z-index: 15;
  .pop-container {
    background-color: gray;
    opacity: 0.9;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 20;
    height: 100%;
    width: 100%;

    .close-btn {
      position: fixed;
      top: 1rem;
      right: 1rem;
      font-size: 2rem;
    }
  }
  .show.pop-container {
    display: flex;
  }
  .hide.pop-container {
    display: none !important;
  }

  /* .img-container {
    height: 5rem;
    width: 5rem;
    img {
      height: 100%;
      width: 100%;
      object-fit: fill;
    }
  } */
  div {
    div {
      span {
        font-size: large;
      }
      p {
        color: aquamarine;
      }
    }
  }

  .links-container {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    div {
      width: 100%;
      justify-content: center;
      display: flex;
      .img-container {
        margin-top: 5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 5rem;
        width: 5rem;
        a {
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
    nav {
      display: flex;
      width: 100%;
      justify-content: center;
      ul {
        display: flex;
        flex-direction: column;
        height: 100%;
        justify-content: space-around;
        padding-left: 0;
        li {
          list-style: none;
          color: white;
          font-weight: bolder;
          font-size: 1.2rem;
        }
      }
    }
  }
  @media (min-width: 768px) {
    .pop-container {
      display: none !important;
    }
  }
`;

export default PopUp;
