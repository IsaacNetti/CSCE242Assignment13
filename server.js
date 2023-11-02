const express = require("express");
const app = express();

app.use(express.static("public"));
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.get("/api/snacks", (req, res) => {
    const snacks = [];
    snacks[0] = {
        name: "Oreo",
        flavor: "Sweet",
        price: "$5.99",
        type: "Cookie",
        ingredients: ["Cookie","Cream filling"],
        img: "images/oreo.png"
    };
    snacks[1] = {
        name: "Twix",
        flavor: "Sweet",
        price: "$0.99",
        type: "Candy",
        ingredients: ["Chocolate","Caramel","Nugat"],
        img: "images/twix.jpg"
    };
    snacks[2] = {
        name: "M&M",
        flavor: "Sweet",
        price: "$1.99",
        type: "Candy",
        ingredients: ["Chocolate","peanut","Candy coating"],
        img: "images/m&m.png"
    };
    snacks[3] = {
        name: "Coke",
        flavor: "Sweet",
        price: "$3.99",
        type: "Drink",
        ingredients: ["Water","Coke syrup","CO2"],
        img: "images/coke.jpg"
    };
    snacks[4] = {
        name: "Sprite",
        flavor: "Sweet",
        price: "$1.99",
        type: "Drink",
        ingredients: ["Water","Sprite syrup","CO2"],
        img: "images/sprite.jpg"
    };

    res.json(snacks);
});

app.listen(3000, () => {
    console.log("listening");
});