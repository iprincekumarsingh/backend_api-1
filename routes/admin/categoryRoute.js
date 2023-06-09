const express = require("express");

const router = express.Router();
const auth = require("../../middlewares/auth");
const roleChecker = require("../../middlewares/roleChecker");

const {
  demoCategory,
  createCategory,
  deleteCategory,
} = require("../../controllers/categoryController");

router.route("/create-category").post(auth, roleChecker, createCategory);
router.route("/delete-category/:id").delete(auth, roleChecker, deleteCategory);

// demo data route
router.route("/demo").get(demoCategory);

module.exports = router;
