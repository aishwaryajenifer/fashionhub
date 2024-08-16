// Header.js
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCartTotal } from "../redux/CartSlice";
import TopBar from './Topbar';
import { logout } from "../redux/AuthSlice";
import Category from "./Category";
import { nav } from "../data/Data";

export default function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { totalItems } = useSelector((state) => state.cart);
  const { isAuthenticated } = useSelector((state) => state.auth);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    dispatch(getCartTotal());
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [dispatch]);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <>
      <TopBar />
      <div className={`container-fluid bg-dark mb-30 ${isSticky ? "sticky-header" : ""}`}>
        <div className="row px-xl-5">
          <Category />
          <div className="col-lg-9">
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3 py-lg-0 px-0">
              <a href="" className="text-decoration-none d-block d-lg-none">
                <span className="h1 text-uppercase text-dark bg-light px-2">Multi</span>
                <span className="h1 text-uppercase text-light bg-primary px-2 ml-n1">Shop</span>
              </a>
              <button type="button" className="navbar-toggler">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                <div className="navbar-nav mr-auto py-0">
                  {nav.slice(0, 6).map((list, key) => (
                    <Link to={list.path} className="nav-item nav-link" key={key}>
                      {list.text}
                    </Link>
                  ))}
                </div>
                <div className="navbar-nav ml-auto py-0 d-none d-lg-block">
                  <Link className="btn px-0">
                    <i className="fas fa-heart text-primary"></i>
                    <span className="badge text-secondary border border-secondary rounded-circle" style={{ paddingBottom: "2px" }}>
                      0
                    </span>
                  </Link>
                  <Link to="/cart" className="btn px-0 ml-3">
                    <i className="fas fa-shopping-cart text-primary"></i>
                    <span className="badge text-secondary border border-secondary rounded-circle" style={{ paddingBottom: "2px" }}>
                      {totalItems}
                    </span>
                  </Link>
                  {isAuthenticated ? (
                    <button className="btn px-0 ml-3" onClick={handleLogout}>
                      <i className="fas fa-user text-primary"></i>
                      <span className="ml-1">Logout</span>
                    </button>
                  ) : (
                    <Link to="/login" className="btn px-0 ml-3">
                      <i className="fas fa-user text-primary"></i>
                      <span className="ml-1">Logout</span>
                    </Link>
                  )}
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
