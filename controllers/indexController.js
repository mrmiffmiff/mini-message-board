import { getMessages } from "../fakeDb.js";

export function getIndex(req, res) {
    const messages = getMessages()
    res.render("index", { title: "Mini Messageboard", messages: messages });
}