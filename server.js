const express = require("express");
const admin = require("firebase-admin");
const bcrypt = require("bcrypt");
const path = require("path");
const { dirname } = require("path");

let staticPath = path.join(__dirname, "public");
const app = express();

let serviceAccount = require("./misto-webapp-firebase-adminsdk-o93mx-68e56efd12.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

let db = admin.firestore();

app.use(express.static(staticPath));
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(path.join(staticPath, "index.html"));
});

app.get("/signup", (req, res) => {
  res.sendFile(path.join(staticPath, "signup.html"));
});

app.post("/signup", (req, res) => {
  // console.log(req.body);
  let { fname, username, email, password, confirmPassword, tac, notification } =
    req.body;

  if (fname.length < 3) {
    return res.json({ alert: "name must be at least 3 characters long" });
  } else if (username.length < 3) {
    return res.json({ alert: "username must be 3 characters long" });
  } else if (!email.length) {
    return res.json({ alert: "Provide a valid email address" });
  } else if (password.length < 8) {
    return res.json({ alert: "Password should be at least 8 characters long" });
  } else if (confirmPassword !== password) {
    return res.json({ alert: "Password do not match" });
  } else if (!tac) {
    return res.json({ alert: "You must agree to our terms and condition" });
  }
  db.collection("users")
    .doc(email)
    .get()
    .then((user) => {
      if (user.exists) {
        return res.json({ alert: "email already exists" });
      } else {
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(password, salt, (err, hash) => {
            req.body.password = hash;
            db.collection("users")
              .doc(email)
              .set(req.body)
              .then((data) => {
                res.json({
                  fname: req.body.fname,
                  username: req.body.username,
                  email: req.body.email,
                });
              });
          });
        });
      }
    });
});

app.get("/login", (req, res) => {
  res.sendFile(path.join(staticPath, "login.html"));
});

app.post("/login", (req, res) => {
  let { email, password } = req.body;
  if (!email.length || !password.length) {
    return res.json({ alert: "Enter e-mail and password" });
  }
  db.collection("users")
    .doc(email)
    .get()
    .then((user) => {
      if (!user.exists) {
        return res.json({ alert: "Email does not exist" });
      } else {
        bcrypt.compare(password, user.data().password, (err, result) => {
          if (result) {
            let data = user.data();
            return res.json({
              fname: data.fname,
              email: data.email,
            });
          } else {
            return res.json({ alert: "Incorrect password" });
          }
        });
      }
    });
});

app.get("/404", (req, res) => {
  res.sendFile(path.join(staticPath, "404.html"));
});

app.use((req, res) => {
  res.redirect("/404");
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
