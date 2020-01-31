var db = require("../controllers/blogController");

module.exports = function(app){
    app.post("/blog", function(req, res){
        db.createBlog(req,res);
    });

    app.get("/blog", function(req, res){
        db.getBlog(req,res);
    });

    app.delete("/blog", function(req, res){
        db.deleteBlog(req, res);
    })

}
