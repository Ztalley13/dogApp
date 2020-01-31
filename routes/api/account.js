const router = require("express").Router();
const User = require("../../models/user");
const UserSession = require("../../models/userSession");

//Sign Up

router.route("/register").post((req, res) => {
  const { body } = req;
  let { name, username, password, description, dogName, breed } = body;

  console.log("BODY: ", body);

  if (!name) {
    return res.send({
      success: false,
      message: "Error:  Name cannot be blank."
    });
  }
  if (!username) {
    return res.send({
      success: false,
      message: "Error:  Username cannot be blank."
    });
  }
  if (!password) {
    return res.send({
      success: false,
      message: "Error:  Password cannot be blank."
    });
  }
  if (!description) {
    return res.send({
      success: false,
      message: "Error:  Description cannot be blank."
    });
  }

  //verify Username doesn't exist
  User.find(
    {
      username: username
    },
    (err, previousUsers) => {
      if (err) {
        return res.send({
          success: false,
          message: "Error: Server error"
        });
      } else if (previousUsers.length > 0) {
        // alert("Username already exists, please try again.");
        return res.send({
          success: false,
          message: "Error:  Username already exists."
        });
      }

      //Save new User
      const newUser = new User();

      newUser.username = username;
      newUser.name = name;
      newUser.password = password;
      newUser.breed = breed;
      newUser.description = description;
      newUser.dogName = dogName;
      newUser.save((err, user) => {
        if (err) {
          return res.send({
            success: false,
            message: "Error: Server error"
          });
        }
        return res.send({
          success: true,
          message: "Signed Up"
        });
      });
    }
  );
});

//Signin

router.route("/signing").post((req, res) => {
  const { body } = req;
  let { userName, password } = body;

  if (!userName) {
    return res.send({
      success: false,
      message: "Error:  Username cannot be blank."
    });
  }
  if (!password) {
    return res.send({
      success: false,
      message: "Error:  Password cannot be blank."
    });
  }
  User.find(
    {
      userName: userName
    },
    (err, users) => {
      if (err) {
        return res.send({
          success: false,
          message: "Error: server error"
        });
      }
      if (users.length != 1) {
        return res.send({
          success: false,
          message: "Error: Invalid"
        });
      }

      const user = users[0];
      if (!user.validPassword(password)) {
        return res.send({
          success: false,
          message: "Error: Invalid password"
        });
      }

      const userSession = new UserSession();
      userSession.userId = user._id;
      userSession.save((err, doc) => {
        if (err) {
          return res.send({
            success: false,
            message: "Error: server error."
          });
        }
        return res.send({
          success: true,
          message: "Valid sign in",
          token: doc._id
        });
      });
    }
  );
});

router.route("/verify").get((req, res) => {
  //get the token
  const { query } = req;
  const { token } = query;

  //verify the token is one of a kind and it's not deleted.

  UserSession.find(
    {
      _id: token,
      isDeleted: false
    },
    (err, sessions) => {
      if (err) {
        return res.send({
          success: false,
          message: "Error: Server error"
        });
      }
      if (sessions.length != 1) {
        return res.send({
          success: false,
          message: "Error: Invalid"
        });
      } else {
        return res.send({
          sucess: true,
          message: "Good"
        });
      }
    }
  );
});

router.route("/logout").get((req, res) => {
  const { query } = req;
  const { token } = query;

  UserSession.findOneAndUpdate(
    {
      _id: token,
      isDeleted: false
    },
    {
      $set: { isDeleted: true }
    },
    null,
    (err, sessions) => {
      if (err) {
        return res.send({
          success: false,
          message: "Error: server error"
        });
      }

      if (sessions.length != 1) {
        return res.send({
          success: false,
          message: "Error: Invalid"
        });
      } else {
        return res.send({
          success: true,
          message: "Good"
        });
      }
    }
  );
});

module.exports = router;
