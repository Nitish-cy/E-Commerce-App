import React, { Fragment, useEffect, useState } from "react";
import Carousel from "react-material-ui-carousel";
import "./ProductDetails.css";
import ReviewCard from "./ReviewCard.js";
import { useSelector, useDispatch } from "react-redux";
import {clearErrors,getProductDetails} from "../../actions/productAction";
import { useParams } from 'react-router-dom';
import Loader  from "../layout/Loader/Loader";
import { useAlert } from "react-alert";
import MetaData from "../layout/MetaData";
import { addItemsToCart } from "../../actions/cartAction";

function ProductDetails() {
  const [quantity, setQuantity] = useState(1);
  //const match = useMatch(); 
  const dispatch = useDispatch();
  const alert = useAlert();
  const { id } = useParams(); // Access the route parameter 'id'
  const { product, loading, error } = useSelector((state) => state.productDetails);
  
  const increaseQuantity = () => {
    if (product.Stock <= quantity) return;

    const qty = quantity + 1;
    setQuantity(qty);
  };

  const decreaseQuantity = () => {
    if (1 >= quantity) return;

    const qty = quantity - 1;
    setQuantity(qty);
  };
  const addToCartHandler = () => {
    dispatch(addItemsToCart(id, quantity));
    alert.success("Item Added To Cart");
  };


  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProductDetails(id));
  }, [dispatch, id,error, alert]);
  return (
    <Fragment>
    {loading ? (
      <Loader />
    ) : (
      <Fragment>
        <MetaData title={`${product.name} -- ECOMMERCE`} />
        <div className="ProductDetails">
          <div>
            <Carousel>
              {product.images &&
                product.images.map((item, i) => (
                  <img
                    className="CarouselImage"
                    key={i}
                    src={item.url}
                    alt={`${i} Slide`}
                  />
                ))}
            </Carousel>
          </div>

          <div>
            <div className="detailsBlock-1">
              <h2>{product.name}</h2>
              <p>Product # {product._id}</p>
            </div>
            <div className="detailsBlock-2">
              {/* <Rating {...options} /> */}
              <span className="detailsBlock-2-span">
                {" "}
                ({product.numOfReviews} Reviews)
              </span>
            </div>
            <div className="detailsBlock-3">
              <h1>{`₹${product.price}`}</h1>
              <div className="detailsBlock-3-1">
              <div className="detailsBlock-3-1-1">
                    <button onClick={decreaseQuantity}>-</button>
                    <input readOnly type="number" value={quantity} />
                    <button onClick={increaseQuantity}>+</button>
                  </div>
                <button
                  disabled={product.Stock < 1 ? true : false}
                  onClick={addToCartHandler}
                >
                  Add to Cart
                </button>
              </div>

              <p>
                Status:
                <b className={product.Stock < 1 ? "redColor" : "greenColor"}>
                  {product.Stock < 1 ? "OutOfStock" : "InStock"}
                </b>
              </p>
            </div>

            <div className="detailsBlock-4">
              Description : <p>{product.description}</p>
            </div>

            <button className="submitReview">
              Submit Review
            </button>
          </div>
        </div>

        <h3 className="reviewsHeading">REVIEWS</h3>

        {/* <Dialog
          aria-labelledby="simple-dialog-title"
          open={open}
          onClose={submitReviewToggle}
        >
          <DialogTitle>Submit Review</DialogTitle>
          <DialogContent className="submitDialog">
            <Rating
              onChange={(e) => setRating(e.target.value)}
              value={rating}
              size="large"
            />

            <textarea
              className="submitDialogTextArea"
              cols="30"
              rows="5"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            ></textarea>
          </DialogContent>
          <DialogActions>
            <Button  color="secondary">
              Cancel
            </Button>
            <Button  color="primary">
              Submit
            </Button>
          </DialogActions>
        </Dialog> */}

{product.reviews && product.reviews[0] ? (
            <div className="reviews">
              {product.reviews &&
                product.reviews.map((review) => (
                  <ReviewCard key={review._id} review={review} />
                ))}
            </div>
          ) : (
            <p className="noReviews">No Reviews Yet</p>
          )}
      </Fragment>
    )};
  </Fragment>
  );
};

export default ProductDetails
