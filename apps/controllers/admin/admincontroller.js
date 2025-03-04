var express = require("express");
var router = express.Router();
var User = require("../../model/User")
router.get("/", function(req,res){
   res.json({"message": "this is admin page"});
});
router.get("/user", function(req,res){
     res.render("admin/userManage");                                                                                                           
 });
router.get("/getuserlist", function(req, res) {
    let users = [];

    for (var i = 0; i < 10; i++) {
        users.push({
            "id": i + 1,
            "name": `User ${i + 1}`
        });
    }
    return res.json(users);
});
module.exports = router;