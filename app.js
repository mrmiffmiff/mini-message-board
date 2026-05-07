import path from "node:path";
import express from "express";
const __dirname = import.meta.dirname;
import indexRouter from "./routes/indexRouter.js";

const app = express();
const PORT = 3000;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

app.use("/", indexRouter);

app.listen(PORT, (error) => {
    if (error) throw error;
    console.log("Listening on port 3000");
});