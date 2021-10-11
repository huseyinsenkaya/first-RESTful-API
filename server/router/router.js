const route = require("express").Router();
const controller = require("../controller/controller");

//routes

// get
route.get("/articles", controller.getArticles);

route.get("/articles/:query", controller.getOneArticle);

//put
route.put("/articles/:query", controller.replaceArticle);

//patch
route.patch("/articles/:query", controller.updateArticle)

//post
route.post("/articles", controller.postArticle);

//delete
route.delete("/articles", controller.deleteArticles);

route.delete("/articles/:query", controller.deleteOneArticle);


module.exports = route;
