


const express = require("express");
const router = express.Router();
const Category = require("../models/category");
const Article = require("../models/article");
const { model } = require("mongoose");

/* GET home page with categories list. */
router.get("/", async function (req, res, next) {
  const categories = await Category.find();
  console.log(categories);
  res.render("index", { categories });
});

router.get('/articles/:id', async (req, res) => {
  const {id} = req.params;
  const articles = await Article.find({categ: id})
  console.log(articles);
  res.render('show-articles', {articles})
})

router.delete('/articles/:id', async (req, res) => {
  const {id} = req.params;
  try {
   await Article.findByIdAndDelete(id);
    console.log("---->", art);
    res.send(500)
  } catch (e) {
    return res.sendStatus(400);
  }
});


module.exports = router