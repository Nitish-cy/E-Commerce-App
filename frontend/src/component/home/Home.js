import React, { Fragment,useEffect } from "react";
//import { CgMouse } from "react-icons/all";
import "./Home.css";
import Product from "./ProductCard.js";
import MetaData from "../layout/MetaData";
 import { clearErrors, getProduct } from "../../actions/productAction";
import {useSelector,useDispatch } from "react-redux";
import Loader  from "../layout/Loader/Loader";
import { useAlert } from "react-alert";

const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error, alert]);
// const product={
//     name:'Mobile',
//     images:[{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxEC5BqiDdX_xw-GoaY-CUHLTCmU1zX2lBhXhnRp-R&s'}],
//     price:'2000',
//     _id:'mishra',
// };
  return (
    <Fragment>
      <MetaData title={'ECOMMERCE'}></MetaData>
       {loading ? (
        <Loader />
      ) :
      
      <Fragment>
        {/* <MetaData title="ECOMMERCE" /> */}

        <div className="banner">
          <p>Welcome to Ecommerce</p>
          <h1>FIND AMAZING PRODUCTS BELOW</h1>

          <a href="#container">
            <button>
              Scroll 
            </button>
          </a>
        </div>

        <h2 className="homeHeading">Featured Products</h2>

        <div className="container" id="container">
          {products &&
            products.map((product) => (
              <Product key={product._id} product={product} />
            ))}
        </div>
      </Fragment>
};
      </Fragment>
  );
};

export default Home;