import { postMessage } from "../fakeDb.js";

export function getNew(req, res) {
    res.render("form");
}

export function postNew(req, res) {
    const name = req.body.authorName;
    const text = req.body.messageText;
    const date = new Date();
    postMessage(text, name, date);
    res.redirect("/");
}