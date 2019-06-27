// routes/index.js
import express from "express";
let router = express.Router();

/* GET home page. */
router.get("/", (req, res, next) => {
    res.send("Express ES6 Template");
});

export default router;
