import { sampleMessages } from "../fakeDb.js";

export function getNew(req, res) {
    res.render("form");
}

export function postNew(req, res) {
    const name = req.body.authorName;
    const text = req.body.messageText;
    const date = new Date();
    sampleMessages.push({ text: text, user: name, added: date });
    res.redirect("/");
}