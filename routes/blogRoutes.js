var db = require("../controllers/blogController");
module.exports = function(app){
    app.post("/api/blog", function(req, res){
        db.createBlog(req,res);
    });

    app.get("/api/blog", function(req, res){
        db.getBlog(req,res);
    });
    
}
