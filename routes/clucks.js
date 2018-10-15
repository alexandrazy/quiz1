const express = require("express");
const router = express.Router()
const knex = require("../db/client")



router.get("/", (req, res) => {
  console.log("Getting Something !!")

  
  res.render("clucks/index");
  
//   knex("clucks")
//   .orderBy("createdAt", "desc")
//   .then(clucks => {
//     res.redirect("clucks/index", {clucks:clucks})
//   })
})

router.get("/cluckr", (req, res) => {
  // knex("clucks")
  // .orderBy("createdAt", "desc")
  // .then(clucks => {
    res.render("clucks/index")
  // })
})


router.get("/cluckr/new", (req, res) => {
  res.render("clucks/new");
});

// router.post("/", (req, res) => {
//   res.send("SOS");
// });

router.post("/cluckr/index", (req, res) => {  //directing to the link 
  //console.log("is anything happening at all??")
  knex("clucks") 
  .insert({
    content: req.body.content,
    image_url: req.body.image_url   
  })
  .returning("*")
  .then(clucks => {

    res.render("clucks/index", {clucks:clucks})
  })
})

router.get("/cluckr/sign_in", (req, res) => {
  res.render("clucks/sign_in");
  console.log(username)
});

router.post("/new", (req, res) => {
  res.render("clucks/new");
});


module.exports = router;