import React from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Product = ({ items, cart, setCart }) => {
   
  const addToCart = (id, price, title, description, image) => {
    const obj = {
      id, price, title, description, image
    }
    setCart([...cart, obj]);
    console.log("Cart element = ", cart);
    toast.success('Item added to cart', {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  }

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className="container my-5">
        <div className="row">
          {items.map((product) => {
            return (
              <div
                key={product.id}
                className="col-lg-3 col-md-6 col-sm-12 my-3 text-center"
              >
                <div className="card" style={{ width: "18rem" }}>
                  <Link
                    to={`/product/${product.id}`}
                    className="img"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img
                      className="card-img-top"
                      src={product.image}
                      alt="Card image cap"
                    />
                  </Link>
                  <div className="card-body">
                    <h2 className="card-title">{product.title.substring(0, 20)}</h2>
                    <h2 className="card-title">{product.category}</h2>
                    <p className="card-text">
                      {product.description.substring(0, 20)}
                    </p>
                    <p className="card-text">
                      <strong>Rating:</strong> ⭐ {product.rating.rate} (
                      {product.rating.count} reviews)
                    </p>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <button className="btn btn-primary btn-sm">
                        <strong>Price:</strong> ${product.price}
                      </button>{" "}
                      &nbsp;
                      <button
                        className="btn btn-warning btn-sm"
                        onClick={() =>
                          addToCart(product.id, product.price, product.title, product.description, product.image)
                        }
                      >
                        Add To Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Product;
