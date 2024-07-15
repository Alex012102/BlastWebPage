import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs", (err, html) => {
    if (err) {
      console.error("Rendering error:", err);
      res.status(500).send("Internal Server Error");
    } else {
      res.send(html);
    }
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});
