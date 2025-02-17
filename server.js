const express = require("express");
const fs = require("fs");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/markers", (req, res) => {
    fs.readFile("markers.json", "utf8", (err, data) => {
        if (err) {
            res.status(500).json({ error: "Error reading markers.json" });
        } else {
            res.json(JSON.parse(data));
        }
    });
});


app.post("/addMarker", (req, res) => {
    fs.readFile("markers.json", "utf8", (err, data) => {
        if (err) {
            res.status(500).json({ error: "Error reading markers.json" });
            return;
        }

        let markers = JSON.parse(data);
        markers.push(req.body);

        fs.writeFile("markers.json", JSON.stringify(markers, null, 2), (err) => {
            if (err) {
                res.status(500).json({ error: "Error saving marker" });
            } else {
                res.json({ success: true });
            }
        });
    });
});

app.listen(3000, () => console.log(" Server running on http://localhost:3000"));
