import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
function Navbar() {
  const [active, setActive] = useState(false);
  const [userOption, setUserOption] = useState(false);
  const { pathname } = useLocation();
  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);
  const currentUser = {
    id: 1,
    name: "sachin",
    isSeller: true,
  };
  return (
    <Nav>
      <nav className={active || pathname !== "/" ? "navbar active" : "navbar"}>
        <div className="container">
          <div className="logo">
            <Link to="/" className="link">
              <span className="text">Fiverr</span>
              <span className="dot">.</span>
            </Link>
          </div>
          <div className="links">
            <ul>
              <li>
                <Link className="link">Fiverr Business</Link>
              </li>
              <li>
                <Link className="link">Explore</Link>
              </li>
              <li>
                <Link className="link">English</Link>
              </li>
              {!currentUser?.isSeller && (
                <li>
                  <Link className="link">Become a Seller</Link>
                </li>
              )}
              {!currentUser && (
                <li>
                  <button className="sign-in">Sign In</button>
                </li>
              )}
              {currentUser && (
                <li>
                  <div className="user">
                    <div
                      className="userImg"
                      onClick={() => setUserOption(!userOption)}
                    >
                      <img src="" alt="" />
                    </div>
                    {userOption && (
                      <div
                        className="options"
                        id="options"
                        onClick={() => setUserOption(false)}
                      >
                        {currentUser?.isSeller && (
                          <>
                            <Link className="link" to={"mygigs"}>
                              Gigs
                            </Link>
                            <Link className="link" to={"add"}>
                              Add New Gig
                            </Link>
                          </>
                        )}
                        <Link className="link" to={"orders"}>
                          Orders
                        </Link>
                        <Link className="link" to={"messages"}>
                          Messages
                        </Link>
                        <Link className="link">Logout</Link>
                      </div>
                    )}
                  </div>
                </li>
              )}
            </ul>
          </div>
        </div>

        {(active || pathname !== "/") && (
          <>
            <hr />
            <div className="menu">
              <Link className="link menuLink" to="/">
                Graphics & Design
              </Link>
              <Link className="link menuLink" to="/">
                Video & Animation
              </Link>
              <Link className="link menuLink" to="/">
                Writing & Translation
              </Link>
              <Link className="link menuLink" to="/">
                AI Services
              </Link>
              <Link className="link menuLink" to="/">
                Digital Marketing
              </Link>
              <Link className="link menuLink" to="/">
                Music & Audio
              </Link>
              <Link className="link menuLink" to="/">
                Programming & Tech
              </Link>
              <Link className="link menuLink" to="/">
                Business
              </Link>
              <Link className="link menuLink" to="/">
                Lifestyle
              </Link>
            </div>
          </>
        )}
      </nav>
    </Nav>
  );
}

const Nav = styled.section`
  width: 100%;
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  z-index: 999;
  .navbar {
    width: 100%;
    background-color: #013914;
    color: #fff;
    display: flex;
    flex-direction: column;
    transition: 0.3s all ease;
    .container {
      width: calc(100% - 200px);
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 15px 0;
      .logo {
        font-size: 34px;
        font-weight: bold;
        .text {
        }
        .dot {
          color: #1dbf73;
        }
      }
      .links {
        ul {
          display: flex;
          gap: 20px;
          align-items: center;
          li {
            list-style: none;
            a {
              text-decoration: none;
              color: #fff;
            }
            .nav-link {
            }
            .sign-in {
              color: #fff;
              padding: 10px 15px;
              background: transparent;
              border: 1px solid #fff;
              border-radius: 3px;
              cursor: pointer;

              &:hover {
                border-color: lightgreen;
                background-color: lightgreen;
                transition: 0.3s;
                color: black;
              }
            }
            .user {
              .userImg {
                width: 45px;
                height: 45px;
                background-image: url("https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D");
                background-position: center;
                background-size: cover;
                background-repeat: no-repeat;
                border-radius: 50%;
                cursor: pointer;
              }
              .options {
                background: #fff;
                color: black;
                padding: 20px 30px;
                display: flex;
                flex-direction: column;
                gap: 15px;
                border-radius: 10px;
                position: absolute;
                box-shadow: 1px 1px 6px 0px rgba(81, 70, 73, 0.54);
                width: 200px;
                top: 65px;
                right: 25px;

                .link {
                  cursor: pointer;
                  color: gray;
                }
              }
            }
          }
        }
      }
    }
    hr {
      width: 100%;
      height: 0;
      border: 0.5px solid #ededed;
    }
    .menu {
      width: calc(100% - 200px);
      margin: 0 auto;
      padding: 10px 0;
      display: flex;
        gap: 20px;
        justify-content: space-between;
        color: gray;
            font-weight: 300;
    }
  }
  .active {
    box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.18);
    background-color: #fff;
    color: black;
    .container {
      .links {
        ul {
          li {
            a {
              color: black;
            }
            .sign-in {
              color: black;
              border: 1px solid black;
              &:hover {
                border: 1px solid black;
              }
            }
          }
        }
      }
    }
  }
`;
export default Navbar;
