import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { nav, topdropdown } from "../data/Data";
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function TopBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Redirect to the search results page with the search query
      navigate(`/search?query=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row bg-secondary py-1 px-xl-5">
          <div className="col-lg-6 d-none d-lg-block">
            <div className="d-inline-flex align-items-center h-100">
              {nav.slice(6, 11).map((top, index) => (
                <Link to={top.path} className="text-body mr-3" key={index}>
                  {top.text}
                </Link>
              ))}
            </div>
          </div>
          <div className="col-lg-6 text-center text-lg-right">
            <div className="d-inline-flex align-items-center d-block d-lg-none">
              <a href="" className="btn px-0 ml-2">
                <i className="fas fa-heart text-dark"></i>
                <span
                  className="badge text-dark border border-dark rounded-circle"
                  style={{ paddingBottom: "2px" }}
                >
                  0
                </span>
              </a>
              <a href="" className="btn px-0 ml-2">
                <i className="fas fa-shopping-cart text-dark"></i>
                <span
                  className="badge text-dark border border-dark rounded-circle"
                  style={{ paddingBottom: "2px" }}
                >
                  0
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="row align-items-center bg-light py-3 px-xl-5 d-none d-lg-flex">
          <div className="col-lg-4">
            <Link to="/" className="text-decoration-none">
              <span className="h1 text-uppercase text-primary bg-dark px-2">
                Fashion
              </span>
              <span className="h1 text-uppercase text-dark bg-primary px-2 ml-n1">
                Hub
              </span>
            </Link>
          </div>
          <div className="col-lg-4 col-6 text-left">
            <form onSubmit={handleSearch}>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search for products"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <div className="input-group-append">
                  <button
                    className="input-group-text bg-transparent text-primary"
                    type="submit"
                  >
                    <i className="fa fa-search"></i>
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="col-lg-4 col-6 text-right">
            <p className="m-0">Customer Service</p>
            <h5 className="m-0">5555 5555 5222</h5>
          </div>
        </div>
      </div>
    </>
  );
}
