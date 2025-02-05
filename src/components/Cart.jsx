import React, { useState } from "react";
import { Link } from "react-router-dom";

const Cart = ({ cart, setCart }) => {
  const [message, setMessage] = useState("");

  const handleCheckout = () => {
    setMessage("Processing checkout...");
    setTimeout(() => {
      setMessage("Checkout successful! Thank you for your purchase.");
    }, 2000);
  };

  return (
    <div className="container my-5">
      {cart.length === 0 ? (
        <div className="text-center">
          <h1>Your Cart is Empty</h1>
          <Link to="/" className="btn btn-warning mt-3">
            Continue Shopping...
          </Link>
        </div>
      ) : (
        <>
          {cart.map((product, index) => (
            <div key={index} className="card mb-3">
              <div className="row g-0 align-items-center">
                
                <div className="col-12 col-md-4 d-flex justify-content-center">
                  <img
                    src={product.image}
                    className="img-fluid rounded-start"
                    alt="Product"
                    style={{
                      maxHeight: "200px",
                      width: "100%",
                      objectFit: "contain",
                    }}
                  />
                </div>

                
                <div className="col-12 col-md-8">
                  <div className="card-body text-center text-md-start">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">{product.description}</p>
                    <p className="fw-bold">{product.price} ₹</p>
                    <button className="btn btn-warning">Buy Now</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </>
      )}

      {/* Checkout and Clear Cart Buttons */}
      {cart.length > 0 && (
        <div className="text-center my-4">
          <button onClick={handleCheckout} className="btn btn-info mx-2">
            Checkout
          </button>
          <button onClick={() => setCart([])} className="btn btn-danger mx-2">
            Clear Cart
          </button>
          {message && <p className="mt-3 text-success fw-bold">{message}</p>}
        </div>
      )}
    </div>
  );
};

export default Cart;
