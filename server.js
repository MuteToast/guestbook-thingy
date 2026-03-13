const express = require("express");
const app = express();
const expressLayouts = require("express-ejs-layouts");

const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.set("view engine", "ejs");

app.use(expressLayouts);

let entries = [];

app.get("/", (req, res) => {
    res.render("index", { title: "Guestbook" });
});

app.get("/write", (req, res) => {
    res.render("form", { error: null });
});

app.post("/write", (req, res) => {

    const name = req.query.name;
    const message = req.body.message;

    const entry = {
        name: name,
        message: message,
        date: new Date().toLocaleString()
    };

    entries.push(entry);

    res.redirect("/entries");
})

app.get("/entries", (req, res) => {
    res.render("entries", { entries });
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);	
});