import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { items } from "../Mock-Data/Data";
import Product from "./Product";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductDetail = ({ cart, setCart }) => {
  const { id } = useParams();

  const [product, setProduct] = useState({});
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    const filterProduct = items.filter((prodcut) => prodcut.id == id);
    setProduct(filterProduct[0]);
    console.log(filterProduct);

    const relatedProducts = items.filter(
      (c) => c.category === product.category
    );
    setRelatedProducts(relatedProducts);
  }, [id, product.category]);

  const addToCart = (id, price, title, description, imgSrc) => {
    const obj = {
      id,
      price,
      title,
      description,
      imgSrc,
    };
    setCart([...cart, obj]);
    console.log("Cart element = ", cart);
    toast.success("Item added on cart", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className="container con">
        <div className="img mt-5">
          <img src={product.image} alt="" />
        </div>
        <div className="text-center mt-5">
          <h1 className="card-title">{product.title}</h1>
          <p className="card-text">{product.description}</p>
          <h2 className="card-title">{product.category}</h2>
          <p className="card-text">
            <strong>Rating:</strong> ⭐ {product.rating?.rate} (
            {product.rating?.count} reviews)
          </p>

          <button className="btn btn-primary mx-3">{product.price} ₹</button>
          <button
            onClick={() =>
              addToCart(
                product.id,
                product.price,
                product.title,
                product.description,
                product.category,
                product.image
              )
            }
            className="btn btn-warning"
          >
            Add To Cart
          </button>
        </div>
      </div>{" "}
      <hr />
      <h1 className="text-center">Related Products</h1>
      <Product cart={cart} setCart={setCart} items={relatedProducts} />
    </>
  );
};

export default ProductDetail;