const path = require('path');

module.exports = function(app) {

    app.get("/projects", (req, res) => {
        res.sendFile(path.join(__dirname, "..", "public", "pages", "projects.html"))
    });

    app.get("/contact", (req, res) => {
        res.sendFile(path.join(__dirname, "..", "public", "pages", "contact.html"))
    });

    app.get("/resume", (req, res) => {
        res.sendFile(path.join(__dirname, "..", "public", "pages", "resume.html"))
    });

    app.get("/skills", (req, res) => {
        res.sendFile(path.join(__dirname, "..", "public", "pages", "skills.html"))
    });

    app.get("/social", (req, res) => {
        res.sendFile(path.join(__dirname, "..", "public", "pages", "social.html"))
    });

    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "..", "public", "pages", "about.html"))
    });

};
