import React from "react";
import { Link } from "react-router-dom";
//import { Rating } from "@material-ui/lab";
import ReactStars from "react-rating-stars-component"
const options = {
    edit:false,
    color:"red",
    activeColor:"tomato",
    value:2.5,
    isHalf:true
  };
const Product = ({ product }) => {
  return (
    <Link className="productCard" to={`/product/${product._id}`}>
    <img src={product.images[0].url} alt={product.name} />
    <p>{product.name}</p>
    <div>
    
        <ReactStars {...options} ></ReactStars>
          <span> ({product.numOfReviews} Reviews)</span>
      </div>
      <span>{`₹${product.price}`}</span>
    </Link>
  );
};

export default Product;