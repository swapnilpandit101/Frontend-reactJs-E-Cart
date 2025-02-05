import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { items } from '../Mock-Data/Data';
import { IoIosCart } from "react-icons/io";

function Navbar({ setData, cart }) {
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  // Filter By category
  const filterByCategory = (category) => {
    if (category === "All") {
      setData(items);
    } else {
      const element = items.filter((product) => product.category === category);
      setData(element);
    }
  };

  // Filter By price
  const filterByPrice = (price) => {
    if (price === "All") {
      setData(items);
    } else {
      const element = items.filter((product) => product.price >= parseFloat(price));
      setData(element);
    }
  };

  // Filter By Rating
  const filterByRating = (order) => {
    if (order === "All") {
      setData(items);
    } else {
      const sortedItems = [...items].sort((a, b) =>
        order === "Low to High" ? a.rating.rate - b.rating.rate : b.rating.rate - a.rating.rate
      );
      setData(sortedItems);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim() !== "") {
      navigate(`/search/${searchTerm}`);
    }
    setSearchTerm("");
  };

  const categories = ["All", "men's clothing", "jewelery", "electronics", "women's clothing"];
  const prices = ["All", "7.85", "29.95", "50", "100", "150", "200"];
  const ratings = ["All", "Low to High", "High to Low"];

  return (
    <>
      <header className="sticky-top">
        <div className="nav-bar">
          <Link to={'/'} className="brand"> <img src="../../public/App.png"  alt="icon" style={{ width: '40px', marginRight: '5px' }} /> AgetWare</Link>
          <form onSubmit={handleSubmit} className="search-bar d-flex align-items-center">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button type="submit" className="btn btn-primary">
                🔍
              </button>
            </div>
          </form>

          <Link to={'cart'} className="cart">
            <button type="button" className="btn btn-primary position-relative">
              <IoIosCart />
              <span className="badge badge-light rounded-pill translate-middle bg-danger position-absolute top-0 start-100">
                {cart.length}
              </span>
            </button>
          </Link>
        </div>

        {location.pathname === '/' && (
          <>
            <div className="nav-bar-wrapper d-flex justify-content-center gap-3">
              <div className="item" style={{ marginTop: '2px', fontSize: '120%' }}>Filter By:</div>

              {/* Filter by Categories Dropdown */}
              <select className="form-select w-auto" onChange={(e) => filterByCategory(e.target.value)}>
                {categories.map((category) => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>

              {/* Filter by Price Dropdown */}
              <select className="form-select w-auto" onChange={(e) => filterByPrice(e.target.value)}>
                {prices.map((price) => (
                  <option key={price} value={price}>{price !== "All" ? `≥ $${price}` : "All Prices"}</option>
                ))}
              </select>

              {/* Filter by Rating Dropdown */}
              <select className="form-select w-auto" onChange={(e) => filterByRating(e.target.value)}>
                {ratings.map((rating) => (
                  <option key={rating} value={rating}>{rating !== "All" ? `Rating: ${rating}` : "All Ratings"}</option>
                ))}
              </select>
            </div>
          </>
        )}
      </header>
    </>
  );
}

export default Navbar;
