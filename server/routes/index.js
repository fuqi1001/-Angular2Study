const bookRoutes = require("./books");
const postRoutes = require("./posts");
const path = require("path");

const constructorMethod = (app) => {
    app.use("/books", bookRoutes);
    app.use("/posts", postRoutes);

    app.use("*", (req, res) => {
        res.sendFile(path.resolve("server", "public", "html", "index.html"));
    });
};

module.exports = constructorMethod;
