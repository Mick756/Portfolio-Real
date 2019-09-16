const path = require('path');

module.exports = function(app) {

    app.get("/projects", (req, res) => {
        res.sendFile(path.join(__dirname, "..", "public", "pages", "projects.html"))
    });

    app.get("/contact", (req, res) => {
        res.sendFile(path.join(__dirname, "..", "public", "pages", "contact.html"))
    });

    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "..", "public", "pages", "about.html"))
    });

};
