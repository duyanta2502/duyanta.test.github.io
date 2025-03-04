var express = require("express");
var app = express();
var controller = require(__dirname +"/apps/controllers");

const PORT = process.env.PORT || 3000; 

app.use(controller);


app.set("views",__dirname + "/apps/views");
app.set("view engine","ejs");
app.use("/static", express.static(__dirname + "/public"));
app.use("/partical", express.static(__dirname + "/views/partical"));

// Khởi động server
app.listen(PORT, function () {
    console.log(`🚀 Server is running on port ${PORT}`);
});