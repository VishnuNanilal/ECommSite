const router = require("express").Router();
const User = require("../models/user");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

//register
router.post("/register", async (req, res) => {
     const newUser = new User({
          username: req.body.username,
          email: req.body.email,
          password: CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC).toString()
     });
     try {
          const savedUser = await newUser.save()
          res.status(200).send(savedUser);
     }
     catch (err) {
          res.status(500).send(err);
     }  
});

//login
router.post("/login", async (req, res) => {
     try {
          const user = await User.findOne({ username: req.body.username });
          if (!user)
               return res.status(404).send("User not found");
          
          const hashedPwd = CryptoJS.AES.decrypt(user.password, process.env.PASS_SEC).toString(CryptoJS.enc.Utf8);
          if (hashedPwd !== req.body.password)
               return res.status(401).send("Wrong credentials");
          
          const token = jwt.sign({ _id: user._id, isAdmin: user.isAdmin }, process.env.TOKEN_SEC,{ expiresIn: "1y" });
          
          const { password, ...userWithoutPwd } = user.toObject();
          res.status(200).send({userWithoutPwd, token});
     } catch (err) {
          res.status(500).send(err);
     }
})

module.exports = router;
