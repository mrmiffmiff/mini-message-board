import { getMessageById } from "../fakeDb.js";

export function getDetails(req, res, next) {
    const message = getMessageById(Number.parseInt(req.params.id));
    if (message === undefined) {
        next();
    }
    else {
        res.render("details", {
            date: message.added,
            author: message.user,
            text: message.text
        });
    }
}