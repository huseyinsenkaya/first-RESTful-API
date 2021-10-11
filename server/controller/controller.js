const ArticleModel = require("../model/schema");

exports.getArticles = (req, res) => {
  ArticleModel.find((err, foundArticles) => {
    if (!err) {
      res.send(foundArticles);
    } else {
      res.send(err);
    }
  });
};

exports.getOneArticle = (req, res) => {
  ArticleModel.findOne({ title: req.params.query }, (err, foundArticle) => {
    if (!err) {
      res.send(foundArticle);
    } else {
      res.send("No article matching that title was found.");
    }
  });
};

exports.replaceArticle = (req, res) => {
  ArticleModel.replaceOne(
    { title: req.params.query },
    {
      title: req.body.title,
      content: req.body.content,
    },
    (err) => {
      if (!err) {
        res.send("Succesfully updated article");
      }
    }
  );
};

exports.updateArticle = (req, res) => {
  ArticleModel.updateOne(
    { title: req.params.query },
    { $set: req.body },
    (err) => {
      if (!err) {
        res.send("Succesfully updated article");
      }
    }
  );
};

exports.postArticle = (req, res) => {
  console.log(req.body.title);
  console.log(req.body.content);

  const newArticle = new ArticleModel({
    title: req.body.title,
    content: req.body.content,
  });

  newArticle.save((err) => {
    if (!err) {
      res.send("Succesfully added a new article");
    } else {
      res.send(err);
    }
  });
};

exports.deleteArticles = (req, res) => {
  ArticleModel.deleteMany((err) => {
    if (!err) {
      console.log("Succesfully deleted all articles");
    } else {
      console.log(err);
    }
  });
};

exports.deleteOneArticle = (req, res) => {
  ArticleModel.findOneAndDelete({ title: req.params.query },(err)=>{
    if(!err) {
      res.send("Succesfully deleted.");
    }
  });
};
