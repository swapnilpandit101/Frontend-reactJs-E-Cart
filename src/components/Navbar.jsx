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
    const element = items.filter((product) => product.category === category);
    setData(element);
  };

  // Filter By price
  const filterByPrice = (price) => {
    const element = items.filter((product) => product.price >= parseFloat(price));
    setData(element);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim() !== "") {
      navigate(`/search/${searchTerm}`);
    }
    setSearchTerm("");
  };

  const categories = ["men's clothing", "jewelery", "electronics", "women's clothing"];
  const prices = ['7.85', '29.95', '50', '100', '150', '200'];

  return (
    <>
      <header className='sticky-top'>
        <div className="nav-bar">
          <Link to={'/'} className="brand">E-Cart</Link>
          <form onSubmit={handleSubmit} className="search-bar">
            <input
              type="text"
              placeholder='Search products'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
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
            <div className="nav-bar-wrapper">
              <div className="item">Filter By{" -> "}</div>
              
              <div className="item" onClick={() => setData(items)}>No Filter</div> &nbsp;

              {/* Filter by Categories */}
              {categories.map((category) => (
                <div key={category} className="item" onClick={() => filterByCategory(category)}>
                  {category}
                </div> 
              ))}

              {/* Filter by Price */}
              {prices.map((price) => (
                <div key={price} className="item" onClick={() => filterByPrice(price)}>
                  {">="} ${price}
                </div> 
              ))}
            </div>
          </>
        )}
      </header>
    </>
  );
}

export default Navbar;
