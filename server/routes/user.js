const router = require("express").Router();
const {verifyToken, verifyTokenAndAuth, verifyTokenAndAdmin} = require("../routes/verifyToken");
const User = require("../models/user");
const userCtrl = require("../controllers/controller.user")

//update
router.put("/:id", verifyTokenAndAuth, userCtrl.updateById);

//delete
router.delete("/:id", verifyTokenAndAuth, userCtrl.deleteById);

//get user
router.get("/:id", verifyTokenAndAdmin, userCtrl.getById);

//get all users
router.get("/", verifyTokenAndAdmin, userCtrl.getAll);

//get user stats
router.get("/stats", verifyTokenAndAdmin, userCtrl.getStats);

module.exports = router;