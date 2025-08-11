import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send("Hello Viktor at Recart");
});

app.get("/api/subscribe", (req, res) => {
    res.send("Subscribed");
});

app.listen(3001, () => {
    console.log("Mini Recart Backend is running on port 3001");
});