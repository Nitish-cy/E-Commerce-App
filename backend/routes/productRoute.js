const express = require("express");
const {getAllProducts,createProduct,updateProduct,deleteProduct,getProductDetails,getAdminProducts,createProductReview,getProductReviews,deleteReview} =require("../controllers/productController");
const {isAuthenticatedUser,authorizeRoles}=require("../middleware/auth");
const router = express.Router();

router.route("/products").get(getAllProducts);

// router.route("/product/new").post(createProduct);

// router.route("/product/:id").put(updateProduct).delete(deleteProduct).get(getProductDetails);

// router.route("/product/:id").get(getProductDetails);

//const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");





router
  .route("/admin/products")
  .get(isAuthenticatedUser, authorizeRoles("admin"), getAdminProducts);

router
  .route("/admin/product/new")
  .post(isAuthenticatedUser,createProduct);

router
  .route("/admin/product/:id")
  .put(isAuthenticatedUser, updateProduct)
  .delete(isAuthenticatedUser, deleteProduct);

router.route("/product/:id").get(getProductDetails);

router.route("/review").put(isAuthenticatedUser, createProductReview);

router
  .route("/reviews")
  .get(getProductReviews)
  .delete(isAuthenticatedUser, deleteReview);
module.exports = router;
