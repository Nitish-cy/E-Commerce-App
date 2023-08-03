import React, { Fragment, useEffect, useState } from "react";
import "./Products.css";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, getProduct } from "../../actions/productAction";
import { useParams } from 'react-router-dom';

import Loader from "../layout/Loader/Loader";
import ProductCard from "../home/ProductCard";
const Products = () => {
  const dispatch = useDispatch();
  const { keyword } = useParams();
  const {
    products,
    loading
  } = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(getProduct())
  }, [dispatch,keyword]);
  return (
    <Fragment>
    {loading ? (
      <Loader />
    ) : (
      <Fragment>
        {/* <MetaData title="PRODUCTS -- ECOMMERCE" /> */}
        <h2 className="productsHeading">Products</h2>

        <div className="products">
          {products &&
            products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
        </div>

        {/* <div className="filterBox">
          <Typography>Price</Typography>
          <Slider
            value={price}
            onChange={priceHandler}
            valueLabelDisplay="auto"
            aria-labelledby="range-slider"
            min={0}
            max={25000}
          />

          <Typography>Categories</Typography>
          <ul className="categoryBox">
            {categories.map((category) => (
              <li
                className="category-link"
                key={category}
                onClick={() => setCategory(category)}
              >
                {category}
              </li>
            ))}
          </ul>

          <fieldset>
            <Typography component="legend">Ratings Above</Typography>
            <Slider
              value={ratings}
              onChange={(e, newRating) => {
                setRatings(newRating);
              }}
              aria-labelledby="continuous-slider"
              valueLabelDisplay="auto"
              min={0}
              max={5}
            />
          </fieldset>
        </div>
        {resultPerPage < count && (
          <div className="paginationBox">
            <Pagination
              activePage={currentPage}
              itemsCountPerPage={resultPerPage}
              totalItemsCount={productsCount}
              onChange={setCurrentPageNo}
              nextPageText="Next"
              prevPageText="Prev"
              firstPageText="1st"
              lastPageText="Last"
              itemClass="page-item"
              linkClass="page-link"
              activeClass="pageItemActive"
              activeLinkClass="pageLinkActive"
            />
          </div> */}
        {/* )} */}
      </Fragment>
    )}
  </Fragment>
  )
}

export default Products
