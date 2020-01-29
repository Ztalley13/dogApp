var db = require("../models");
var passport = require("../config/passport");

module.exports = function(app) {
  
  app.post("/api/login", passport.authenticate("local"), function(req, res) {
    res.json(req.user);
  });

  app.post("/api/signup", function(req, res) {
    console.log(req.body.email)
    db.user.create({
      email: req.body.email,
      password: req.body.password
    })
      .then(function() {
        res.redirect(307, "/api/login");
      })
      .catch(function(err) {
        res.status(401).json(err);
      });
  });

  app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });
  app.get("/api/user_data", function(req, res) {
    if (!req.user) {
      res.json({});
    } else {
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });
  app.post("/api/pet", function(req, res){
    db.pet.create(req.body).then(() => {
      res.sendStatus(200);
    })
  })
  // POST route for getting all of the pets
  app.get("/api/pets/:user_id", function(req, res) {
    var query = {};
    if (req.params.user_id) {
      query.userId = req.params.user_id;
    }
    db.pet.findAll({
      where: query,
      include: [db.user]
    }).then(function(dbpet) {
      res.json(dbpet);
    });
  });
  // get route for getting pets that a user has requested
  app.get("/api/pets/:user_id/:status", function(req, res) {
    console.log(req.params)
    var query = {
      last_request_id : req.params.user_id,
      status: req.params.status
    };
    db.pet.findAll({
      where: query,
      include: [db.user]
    }).then(function(dbpet) {
      res.json(dbpet);
    });
  });
  // post route for getting pets by city
  app.post("/api/pets/city", function(req, res) {
    var query = {
      city : req.body.city,
      state : req.body.state
    }
    db.pet.findAll({
      where: query,
      include: [db.user]
    }).then(function(dbpet) {
      if (dbpet){
        res.json(dbpet);
      } else {
        var data = {message:"failed to find city"};
        res.json(data)
      }
    });
   
  });

  // post route for posting all of the users
  app.post("/api/users", function(req, res) {
    var query = { 
      id: req.body.id
    };
    console.log(query)
    db.user.findAll({
      where: query,
      include: [db.pet]
    }).then(function(dbuser) {
      res.json(dbuser);
    });
  });
  // PUT route for updating pets
  app.put("/api/pet/open", function(req, res) {
    console.log(req.body)
    var query = { 
      id: req.body.id
    };
    console.log(query)
    db.pet.update({
      status: req.body.status,
    },{
      where: query,
    },{
      include: [db.user]
    }).then(function(result) {
      res.sendStatus(200);
    })
  });

  //placeholder
  app.put("/api/pet/request", function(req, res) {
    console.log(req.body)
    var query = { 
      id: req.body.id
    };
    console.log(query)
    db.pet.update({
      status: req.body.status,
      last_request_id: req.body.myId
    },{
      where: query,
    },{
      include: [db.user]
    }).then(function(result) {
      res.sendStatus(200);
    });
  });
  
  app.put("/api/pet/approve", function(req, res) {
    var query = { 
      id: req.body.id
    };
    console.log(query)
    db.pet.update({
      status: "on a playdate",
      last_occupied_id: req.body.myId
    },{
      where: query,
    },{
      include: [db.user]
    }).then(function(result) {
      res.sendStatus(200);
    });
  }); 

  app.delete("/api/pet/delete", function(req, res) {
    var query = { 
      id: req.body.id
    };
    console.log(query)
    db.pet.destroy({
      where: query,
    },{
      include: [db.user]
    }).then(function(result) {
      res.sendStatus(200);
    });
  }); 
  
  //store image url
  app.put('/api/image/upload', function(req,res){
    console.log(req.body);
    var query = {
      id : req.body.id
    };
    db.pet.update({
      image: req.body.imgUrl
    },{
      where: query
    }).then(function(result) {
      console.log(result);
      res.sendStatus(200);
    });
  })
};