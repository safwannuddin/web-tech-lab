var express =require("express")
var app = express();

app.get("/",function(req,res){
res.send("Welcome to home page of express server");

} 
);
app.get("/data",function(req,res){
res.send("here u can find the list of student data ");

} 
);
app.get("/login",function(req,res){
res.send("Welcome to login page ");

} 
);
app.get("/display/:name/:pwd",function(req,res){
res.send(
          "Username : " +req.params.name+
           "<br>Password: " +req.params.pwd
);

} 
);

app.listen(8080,function(req,res){
console.log("Express server has started");
console.log("Server running at http://localhost:8080");
});