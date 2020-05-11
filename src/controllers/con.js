const express = require("express");
const config = require("config");
const router = express.Router();

//Resources
router.get("/status", async (req, res, next) => {
    console.log("App1 service status request.");
    console.log("Config json: ", config);
    let response = { status: true, message: "App1 service is running!!" };
    return res.json(response);
});

//Make sure to export the router otherwise below error would be thrown 
//TypeError: Router.use() requires a middleware function but got a Object
module.exports = router;