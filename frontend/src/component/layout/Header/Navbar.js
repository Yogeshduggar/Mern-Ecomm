import React, { Fragment, useContext, useEffect, useState } from "react";
import logo from "../../../images/logo.png";
import ButtonContext from "../../../context/ButtonContext";
import {  FaSearch, FaRegWindowClose, FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { RiCoupon2Fill } from "react-icons/ri";
import Search from "./Search";
import { useSelector } from "react-redux";
import ShoppingCartTwoToneIcon from "@mui/icons-material/ShoppingCartTwoTone";
import LoginTwoToneIcon from "@mui/icons-material/LoginTwoTone";
const Navbar = (props) => {
  const { isAuthenticated } = useSelector((state) => state.user);
  // State and Context
  const { org } = useSelector((state) => state.controller);
  const navigate = useNavigate();
  const {
    burger,
    search,
    setSearch,
    setBurger,
    setSort,
    setAllproducts,
    account,
    setAccount,
  } = useContext(ButtonContext);

  // Theme State and Effect
  const [theme, setTheme] = useState({
    color: "black",
    backgroundColor: 'white',
  });

  useEffect(() => {
    // Update theme based on scroll position
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setTheme({
          color: "black",
          backgroundColor: 'white',
        });
      } else {
        setTheme({
          color: "black",
          backgroundColor: 'white',
        });
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      // Clean up event listener on component unmount
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Fragment>
      {/* Render the navigation bar only when 'burger' state is true */}
      {burger && (
        <>
          <div id="navbar" style={theme} className="slide-in">
            <div className="left-navbar">
              <div className="items">
                <img src={logo} alt="LOGO" style={{width:"10vw"}}></img>
              </div>
              <div
                className="items"
                style={{ letterSpacing: "4px", fontSize: "2vmax"}}
              >
                {props.BrandName}
                <p style={{ letterSpacing: "0px", fontSize: "1.5vmax" }}>
                  {org.lName}
                </p>
              </div>
            </div>
            <div className="mid-navbar">
              {/* Navigation links with icons */}
              <Link style={{ textDecoration: "none", color: "black" }} to="/">
                <div
                  className="items"
                  onClick={() => window.innerWidth <= 800 && setBurger(false)}
                >
                  Home
                  <p style={{ display: "block" }}>
                  
                  </p>
                </div>
              </Link>
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to="/products"
              >
                <div
                  className="items"
                  onClick={() => window.innerWidth <= 800 && setBurger(false)}
                >
                  Products
                  <p style={{ display: "block" }}>
                    
                  </p>
                </div>
              </Link>
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to="/coupons"
              >
                <div
                  className="items"
                  onClick={() => window.innerWidth <= 800 && setBurger(false)}
                >
                  Coupons
                  <p style={{ display: "block" }}>
                   
                  </p>
                </div>
              </Link>
              <Link style={{ textDecoration: "none", color: "black" }} to="/">
                <div
                  className="items"
                  onClick={() => window.innerWidth <= 800 && setBurger(false)}
                >
                  About
                  <p style={{ display: "block" }}>
                    
                  </p>
                </div>
              </Link>
            </div>
            <div className="right-navbar" style={{ textAlign: "center" }}>
              {isAuthenticated ? (
                <div
                  className=""
                  style={{
                    alignContent: "center",
                    justifyContent: "center",
                    alignSelf: "center",
                    width: "80%",
                    textAlign: "center",
                  }}
                >
                  <button
                    className="btn"
                    style={{ padding: "8px 28px",
                            backgroundColor:"black",  
                            color:"white"      
                  }}
                    onClick={() => navigate("/cart")}
                  >
                    <span
                      style={{
                        fontSize: "1.2rem",
                        display: "inline-block",
                      }}
                    >
                      {" "}
                      <ShoppingCartTwoToneIcon
                        style={{ transform: "translateY(4px)" }}
                      />
                      &nbsp; Cart
                    </span>
                  </button>
                </div>
              ) : (
                <div
                  className=""
                  style={{
                    alignContent: "center",
                    justifyContent: "center",
                    alignSelf: "center",
                    width: "70%",
                    textAlign: "center",
                  }}
                >
                  <button
                    className="btn"
                    style={{ padding: "8px 28px",color:"white" }}
                    onClick={() => navigate("/login")}
                  >
                    <span
                      style={{
                        fontSize: "1.2rem",
                        display: "inline-block",
                      }}
                    >
                      {" "}
                      <LoginTwoToneIcon
                        style={{ transform: "translateY(4px)" }}
                      />
                      &nbsp;Login
                    </span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </>
      )}

      {/* Render the search component when 'search' state is true */}
      {search && (
        <div className="search">
          <Search />
        </div>
      )}

      {/* Render the account component when 'account' state is true */}
      {account && <div className="account">i am account</div>}

      {/* Search icon for desktop view */}
      {
        <div
          className="searchopen"
          style={!search ? { top: "6vmax" } : { top: "11vmax" }}
          onClick={() => {
            if (account) setAccount();
            setSearch();
            if (!search) setSort({ val: false });
            if (!search) setAllproducts([]);
            if (!search) navigate("/products");
          }}
        >
          {!search ? <FaSearch /> : <FaRegWindowClose />}
        </div>
      }

      {/* Account icon for desktop view */}
      {
        <div
          className="accountopen"
          style={!account ? { top: "6vmax" } : { top: "11vmax" }}
          onClick={() => {
            if (search) setSearch();
            setAccount();
          }}
        >
          {!account ? <FaUser /> : <FaRegWindowClose />}
        </div>
      }
    </Fragment>
  );
};

export default Navbar;
