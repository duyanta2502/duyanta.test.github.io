var express = require("express");
var router = express.Router();

router.use("/index",require(__dirname + "/indexcontroller"));
router.use("/services",require(__dirname + "/servicescontroller"));
router.use("/product",require(__dirname + "/productcontroller"));
router.use("/contact",require(__dirname +  "/contactcontroller"));
router.use("/about",require(__dirname + "/aboutcontroller"));

router.use("/admin",require(__dirname + "/admin/admincontroller"));
router.use("/auth",require(__dirname + "/admin/authenticatecontroller"));
module.exports = router;
