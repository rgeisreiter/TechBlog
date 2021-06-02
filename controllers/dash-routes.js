const router = require("express").Router();
const { Post } = require("../models/");
const auth = require("./utils/auth");

router.get("./", auth, (req, res) => {
  Post.findAll({
    where: {
      userId: req.session.userId,
    },
  })
    .then((posts) => {
      const posts = dbPosts.map((post) => post.get({ plain: true }));
      res.render("all-posts-admin", {
        layout: "dash",
        posts,
      });
    })
    .catch((err) => {
      console.log(err);
      //my index is my login page
      res.redirect("index");
    });
});

router.get("./new", auth, (req, res) => {
  res.render("new-post", { layout: "dash" });
});

router.get("./edit/:id", auth, (req, res) => {
  Post.findByPk(req.params.id)
    .then((postData) => {
      if (postData) {
        const post = postData.get({ plain: true });
        res.render("edit-post", { layout: "dash", post });
      } else {
        res.end();
      }
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
