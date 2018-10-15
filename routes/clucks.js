const express = require("express");
const router = express.Router()
const knex = require("../db/client")



router.get("/", (req, res) => {
  knex("clucks")
  .orderBy("createdAt", "desc")
  .then(clucks => {
    res.render("clucks/index", {clucks:clucks})
  })
})

router.get("/cluckr", (req, res) => {
  knex("clucks")
  .orderBy("createdAt", "desc")
  .then(clucks => {
    res.render("clucks/index", {clucks:clucks})
  })
})


router.get("/cluckr/new", (req, res) => {
  res.render("clucks/new");
});

router.post("/", (req, res) => {
  res.send("SOS");
});

router.post("clucks/index", (req, res) => {  //directing to the link 
  console.log("is anything happening at all??")
  console.log(req.body.content);

  knex("clucks") 
  .insert({
   //username: cookie,
    content: req.body.content,
    image_url: req.body.image_url,
   //created at: cookie,
   //updated at: cookie   
  })
  .returning("*")
  .then(clucks => {
    res.render("clucks/index", {clucks:clucks})
  })
})

router.get("/cluckr/sign_in", (req, res) => {
  res.render("clucks/sign_in");
});

router.post("/new", (req, res) => {
  res.render("clucks/new");
});


module.exports = router;