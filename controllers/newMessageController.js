import db from "../db/queries.js";

export function getNew(req, res) {
    res.render("form");
}

export async function postNew(req, res) {
    const name = req.body.authorName;
    const text = req.body.messageText;
    const date = new Date();
    await db.postMessage(text, name, date);
    res.redirect("/");
}