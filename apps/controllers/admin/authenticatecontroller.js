var express = require("express");
var router = express.Router();
var User = require("../../model/User")
router.get("/", function(req,res){
    res.json({"message": "this is register page"});  
 });
router.get("/register", function(req,res){
    res.render("admin/register.ejs");
});
router.get("/login", function(req,res){
    res.json({"message": "this is login page"});  
});

module.exports = router;