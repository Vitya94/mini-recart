import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send("Hello Viktor at Recart");
});

app.listen(3000, () => {
    console.log("Mini Recart Backend is running on port 3000");
});