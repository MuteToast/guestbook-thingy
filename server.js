const express = require("express");
const app = express();
const expressLayouts = require("express-ejs-layouts");

const PORT = 3000;

//app.use(expressLayouts.urlencoded({ extended: true }));
app.use(express.static("public"));

app.set("view engine", "ejs");

app.use(expressLayouts);

app.get("/", (req, res) => {
    res.render("index", { title: "Startsida" });
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);	
});