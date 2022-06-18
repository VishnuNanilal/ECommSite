const router = require("express").Router();
const {verifyToken, verifyTokenAndAuth, verifyTokenAndAdmin} = require("../routes/verifyToken");
const User = require("../models/user");

//update
router.put("/:id", verifyTokenAndAuth, async (req, res) => {
     if (req.body.password) {
          req.body.password= CryptoJS.AES.encrypt(
			req.body.password,
			process.env.PASS_SEC
		).toString();
     }
     try {
          const updatedUser = await User.findByIdAndUpdate(req.params.id,{$set: req.body}, { new: true });
          res.status(200).send(updatedUser);
     } catch (err) {
          res.status(500).send(err);
     }
})

//delete
router.delete("/:id", verifyTokenAndAuth, async (req, res) => {
     try {
          await User.findByIdAndDelete(req.params.id);
          res.status(200).send("User deleted");
     }catch(err){
          res.status(500).send(err);
     }
})

//get user
router.get("/:id", verifyTokenAndAdmin, async (req, res) => {
     try {
          const user = await User.findById(req.params.id);
          if (!user)
               return res.status(404).send("User not found");
          const { password, ...userWithoutPwd } = user.toObject();
          res.status(200).send(userWithoutPwd);
     } catch (err) {
          res.status(500).send(err);
     }
})

//get all users
router.get("/", verifyTokenAndAdmin, async (req, res) => {
     const query = req.query.new;
     try {
          const users = query ? await User.find().sort({_id:-1}).limit(5) : await User.find();
          res.status(200).send(users);
     } catch (err) {
          res.status(500).send(err);
     }
})

//get user stats
router.get("/stats", verifyTokenAndAdmin, async (req, res) => {
     const date = new Date();
     const lastYr = new Date(date.setFullYear(date.getFullYear() -1));
     
     try { 
          const data = await User.aggregate([
               { $match: { createdAt: { $gte: lastYr } } },
               {
                    $project: {
                         month:{$month:"$createdAt"},
                    }
               },
               {
                    $group: {
                         _id: month,
                         total:{$sum:1}
                    }
               }
          ])
          res.status(200).send(data);
     } catch (err) {
          res.status(500).send(err);
     }
})

module.exports = router;