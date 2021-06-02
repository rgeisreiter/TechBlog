const router = require("express").Router();
const { User, Post, Comment } = require("../models/");

// read all posts
router.get("/", (req, res) => {
  Post.findAll({
    include: [User],
  })
    .then((posts) => {
      const dbPosts = posts.map((post) => post.get({ plain: true }));
      // use posts to get each posts inside of handlebars
      res.render("all-posts", { posts });
    })
    .catch((err) => {
      res.json(err);
    });
});

// read a single post

router.get("/post/:id", (req, res) => {
  Post.findByPk(req.params.id, {
    include: [
      User,
      {
        model: Comment,
        include: [User],
      },
    ],
  }).then((post) => {
    if (post) {
      const dbPost = post.get({ plain: true });
      res.render("one-post", { post });
    }
  });
});

router.get("/signup", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("signup");
});

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("login");
});

module.exports = router;
