import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../images/atstaylogo.webp";

import Carousel from "react-bootstrap/Carousel";
import carousel1 from "../images/carouselimg1.webp";
import carousel2 from "../images/carouselimg2.webp";
import carousel3 from "../images/carouselimg3.webp";
import safe1 from "../images/atraskisafe1.webp";
import safe2 from "../images/atraskisafe2.webp";
import safe3 from "../images/atraskisafe3.webp";
import safe4 from "../images/atraskisafe4.webp";
import rooms from "../images/rooms.jpg";
import beach from "../images/beach.jpg";
import lake from "../images/lake.jpg";
import camping from "../images/camping.jpg";
import trending from "../images/trending.jpg";
import mansion from "../images/Mansion.jpg";
import tea from "../images/tea.jpg";
import less from "../images/less.png";
import Beach from "../images/Beach.png";
import CityView from "../images/CityView.png";
import Heritage from "../images/Heritage.png";
import TreeHouse from "../images/TreeHouse.png";
import SunView from "../images/SunView.png";
import NationalPark from "../images/NationalPark.png";
import BedBreakFast from "../images/Bed&Breakfast.png";
import Tropical from "../images/Tropical.png";
import Luxe from "../images/Luxe.png";
// import './HomeComponents.css';
import Footer from "./Footer";
import "./HomeComponents.css";
import { useSwipeable } from "react-swipeable";
import Dropdown from "./dropdown";

import { productData } from "./Atstaysdata";
import PopUp from "../pages/home/components/PopUp";

export default function HomeComponents() {
  const [imgs, setImg] = useState(productData);
  const [searchQuery, setSearchQuery] = useState("");
  const [showPopUp, setShowPopUp] = useState(false);
  const [isCoverVisible, setIsCoverVisible] = useState(false);

  const btnpressprev = () => {
    // const box = document.getElementById('box'); // Get the element by its id
    let box = document.querySelector(".product-container");

    if (box) {
      const width = box.clientWidth;
      box.scrollLeft -= width; // Use -= to scroll to the left
      console.log(width);
    } else {
      console.error('Element with id "box" not found.');
    }
  };

  const btnpressnext = () => {
    // const box = document.getElementById('box'); // Get the element by its id
    let box = document.querySelector(".product-container");

    if (box) {
      const width = box.clientWidth;
      box.scrollLeft += width; // Use += to scroll to the right
      console.log(width);
    } else {
      console.error('Element with id "box" not found.');
    }
  };

  // window.location.reload();

  const handleProductClick = (productId) => {
    // Filter product cards based on the clicked image's id

    const filteredImgs = imgs.filter((img) => img.ids === productId);
    // const filteredImgs1 = imgs.filter((img) => img.ids1 === productId2);
    console.log(filteredImgs);
    setImg(filteredImgs);
    // setImg(filteredImgs1);

    // Update the search query with the selected destination
    setSearchQuery(filteredImgs[0].place);
  };

  const handleProductClick1 = (productId) => {
    // Filter product cards based on the clicked image's id

    const filteredImgs = imgs.filter((img) => img.ids1 === productId);
    // const filteredImgs1 = imgs.filter((img) => img.ids1 === productId2);
    console.log(filteredImgs);
    setImg(filteredImgs);
    // setImg(filteredImgs1);

    // Update the search query with the selected destination
    setSearchQuery(filteredImgs[0].place);
  };

  const handleProductClick2 = (productId) => {
    // Filter product cards based on the clicked image's id

    const filteredImgs = imgs.filter((img) => img.ids2 === productId);
    // const filteredImgs1 = imgs.filter((img) => img.ids1 === productId2);
    console.log(filteredImgs);
    setImg(filteredImgs);
    // setImg(filteredImgs1);

    // Update the search query with the selected destination
    setSearchQuery(filteredImgs[0].place);
  };

  const handleProductClick3 = (productId) => {
    // Filter product cards based on the clicked image's id

    const filteredImgs = imgs.filter((img) => img.ids3 === productId);
    // const filteredImgs1 = imgs.filter((img) => img.ids1 === productId2);
    console.log(filteredImgs);
    setImg(filteredImgs);
    // setImg(filteredImgs1);

    // Update the search query with the selected destination
    setSearchQuery(filteredImgs[0].place);
  };

  const handleProductClick4 = (productId) => {
    // Filter product cards based on the clicked image's id

    const filteredImgs = imgs.filter((img) => img.ids4 === productId);
    // const filteredImgs1 = imgs.filter((img) => img.ids1 === productId2);
    console.log(filteredImgs);
    setImg(filteredImgs);
    // setImg(filteredImgs1);

    // Update the search query with the selected destination
    setSearchQuery(filteredImgs[0].place);
  };

  const handleProductClick5 = (productId) => {
    // Filter product cards based on the clicked image's id

    const filteredImgs = imgs.filter((img) => img.ids5 === productId);
    // const filteredImgs1 = imgs.filter((img) => img.ids1 === productId2);
    console.log(filteredImgs);
    setImg(filteredImgs);
    // setImg(filteredImgs1);

    // Update the search query with the selected destination
    setSearchQuery(filteredImgs[0].place);
  };

  const handleProductClick6 = (productId) => {
    // Filter product cards based on the clicked image's id

    const filteredImgs = imgs.filter((img) => img.ids6 === productId);
    // const filteredImgs1 = imgs.filter((img) => img.ids1 === productId2);
    console.log(filteredImgs);
    setImg(filteredImgs);
    // setImg(filteredImgs1);

    // Update the search query with the selected destination
    setSearchQuery(filteredImgs[0].place);
  };

  const handleProductClick7 = (productId) => {
    // Filter product cards based on the clicked image's id

    const filteredImgs = imgs.filter((img) => img.ids7 === productId);
    // const filteredImgs1 = imgs.filter((img) => img.ids1 === productId2);
    console.log(filteredImgs);
    setImg(filteredImgs);
    // setImg(filteredImgs1);

    // Update the search query with the selected destination
    setSearchQuery(filteredImgs[0].place);
  };

  const handleSwipe = (direction) => {
    console.log(`Swiped ${direction}`);
    if (direction === "left") {
      btnpressnext();
    } else if (direction === "right") {
      btnpressprev();
    }
  };

  // Use the useSwipeable hook to add swipe functionality
  const handlers = useSwipeable({
    onSwipedLeft: () => handleSwipe("left"),
    onSwipedRight: () => handleSwipe("right"),
  });

  const coverRef = useRef(null);
  const anywhereRef = useRef(null);

  const openbox = () => {
    setIsCoverVisible(!isCoverVisible);
    console.log("open box clicked", isCoverVisible);
  };

  const handleOutsideClick = (event) => {
    if (
      coverRef.current &&
      !coverRef.current.contains(event.target) &&
      !anywhereRef.current.contains(event.target)
    ) {
      setIsCoverVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);
  const filteredProducts = imgs.filter((img) =>
    img.place.toLowerCase().includes(searchQuery.toLowerCase())
  );
  //

  const closeBtn = () => {
    setIsCoverVisible(false);
    console.log("open box clicked", isCoverVisible);
  };
  return (
    <>
      <div style={{ margin: "auto" }}>
        <div className="boxrad my-3">
          <div className="subbox">
            <div
              className="any"
              ref={anywhereRef}
              onClick={(e) => {
                e.stopPropagation();
                setShowPopUp(true);
                openbox();
              }}
            >
              AnyWhere
            </div>
          </div>
        </div>

        <div className="coverss">
          <div
            id="pc"
            className={`cover ${isCoverVisible ? "visible" : ""}`}
            ref={coverRef}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <nav
              className="navbar navbar-expand-xl navbar-light"
              style={{ width: "668px" }}
            >
              <div
                className="imap"
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  width: "100%",
                  alignItems: "center",
                }}
              >
                <Link to="/" className="navbar-brand">
                  <img src={logo} alt="Logo" className="logoimg" />
                </Link>

                <div className="smtp" id="" style={{ width: "300px" }}>
                  <ul className="navbar-nav falja">
                    <li className="nav-item">
                      <Link to="/" className="nav-link">
                        Home
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/attours" className="nav-link">
                        Tour
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/atstays" className="nav-link">
                        Stays
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/bloggerpage" className="nav-link">
                        Blogs
                      </Link>
                    </li>
                  </ul>
                </div>

                <div>
                  <input
                    type="text"
                    className="desti"
                    placeholder="Destination"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    style={{
                      maxWidth: "150px",
                      height: "0px",
                      marginTop: "13px",
                      padding: "15px",
                      border: "1px solid #000",
                      borderRadius: "20px",
                    }}
                  />
                  {/* <i class="fa-solid fa-magnifying-glass mx-"></i> */}
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
      <div id="mobile">
        <PopUp
          onclick={closeBtn}
          img={logo}
          isCoverVisible={isCoverVisible}
          setSearchQuery={setSearchQuery}
          searchQuery={searchQuery}
          setIsCoverVisible={setIsCoverVisible}
          showPopUp={showPopUp}
          setShowPopUp={setShowPopUp}
        />
      </div>

      <div
        className="product-carousel"
        {...handlers}
        style={{ maxWidth: "95vw" }}
      >
        <button className="pre-btn" onClick={btnpressprev}>
          <p>
            <img src={less} style={{ width: "22px" }} />
          </p>
        </button>
        <button className="next-btn" onClick={btnpressnext}>
          <p>
            <img
              src={less}
              style={{ width: "22px", transform: "scaleX(-1)" }}
            />
          </p>
        </button>

        <div className="product-container">
          <div className="carousel">
            <img
              className="d-block mycard"
              src={rooms}
              alt="First slide"
              onClick={() => handleProductClick(1)}
            />
            <p>Rooms</p>
          </div>

          <div className="carousel">
            <img
              className="d-block mycard"
              src={beach}
              alt="First slide"
              onClick={() => handleProductClick1(2)}
            />
            <p>River</p>
          </div>

          <div className="carousel">
            <img
              className="d-block mycard"
              src={NationalPark}
              alt="First slide"
              onClick={() => handleProductClick1(2)}
            />
            <p>National Park</p>
          </div>

          <div className="carousel">
            <img
              className="d-block mycard"
              src={lake}
              alt="First slide"
              onClick={() => handleProductClick2(3)}
            />
            <p>Amazing View</p>
          </div>

          <div className="carousel">
            <img
              className="d-block mycard"
              src={trending}
              alt="First slide"
              onClick={() => handleProductClick3(4)}
            />
            <p>Trek</p>
          </div>

          <div className="carousel">
            <img
              className="d-block mycard"
              src={camping}
              alt="First slide"
              onClick={() => handleProductClick4(5)}
            />
            <p>Camping</p>
          </div>

          <div className="carousel">
            <img
              className="d-block mycard"
              src={mansion}
              alt="First slide"
              onClick={() => handleProductClick5(6)}
            />
            <p>SnowFall</p>
          </div>

          <div className="carousel">
            <img
              className="d-block mycard"
              src={tea}
              alt="First slide"
              onClick={() => handleProductClick6(7)}
            />
            <p> Mountains</p>
          </div>

          <div className="carousel">
            <img
              className="d-block mycard"
              src={rooms}
              alt="First slide"
              onClick={() => handleProductClick7(8)}
            />
            <p>Amazing View</p>
          </div>

          <div className="carousel">
            <img
              className="d-block mycard"
              src={Beach}
              alt="First slide"
              onClick={() => handleProductClick7(8)}
            />
            <p>Beach</p>
          </div>
          <div className="carousel">
            <img
              className="d-block mycard"
              src={CityView}
              alt="First slide"
              onClick={() => handleProductClick7(8)}
            />
            <p>City View</p>
          </div>

          <div className="carousel">
            <img
              className="d-block mycard"
              src={Heritage}
              alt="First slide"
              onClick={() => handleProductClick7(8)}
            />
            <p>Heritage</p>
          </div>

          <div className="carousel">
            <img
              className="d-block mycard"
              src={TreeHouse}
              alt="First slide"
              onClick={() => handleProductClick7(8)}
            />
            <p>Tree House</p>
          </div>

          <div className="carousel">
            <img
              className="d-block mycard"
              src={SunView}
              alt="First slide"
              onClick={() => handleProductClick7(8)}
            />
            <p>Sun View</p>
          </div>

          <div className="carousel">
            <img
              className="d-block mycard"
              src={Luxe}
              alt="First slide"
              onClick={() => handleProductClick7(8)}
            />
            <p>Luxe</p>
          </div>

          <div className="carousel">
            <img
              className="d-block mycard"
              src={BedBreakFast}
              alt="First slide"
              onClick={() => handleProductClick7(8)}
            />
            <p>Bed & Breakfast</p>
          </div>

          <div className="carousel">
            <img
              className="d-block mycard"
              src={Tropical}
              alt="First slide"
              onClick={() => handleProductClick7(8)}
            />
            <p>Tropical</p>
          </div>
        </div>
      </div>

      <div
        className="container-fluid"
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "50px",
          justifyContent: "center",
        }}
      >
        {imgs.map((elm) => {
          return (
            <>
              <div className="" style={{ display: "flex" }}>
                <Link to={`/atstay/${elm.id}`}>
                  <div
                    className="card mt-5 cds mb-5"
                    style={{
                      borderRadius: "15px",
                      width: "300px",
                      height: "320px",
                      border: "none",
                    }}
                  >
                    <div className="images">
                      <img
                        src={elm.imges}
                        className="img-fluid"
                        style={{
                          height: "262px",
                          width: "300px",
                          borderRadius: "15px",
                        }}
                      ></img>
                    </div>

                    <div className="tourinfo">
                      <p
                        className="my-2 mx-2 d-flex"
                        style={{
                          textTransform: "uppercase",
                          fontSize: "13px",
                          fontWeight: "700",
                        }}
                      >
                        <i className="fa-solid fa-location-dot mx-1"></i>
                        {elm.place}
                      </p>
                      <h6 className="mx-3 ">{elm.trip}</h6>
                      <span className="">{elm.days}</span>
                      <span
                        className="mx-3"
                        style={{ fontWeight: "700", fontSize: "18px" }}
                      >
                        ₹ {elm.price}
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
