import db from "../db/queries.js";

export async function getDetails(req, res, next) {
    try {
        const message = await db.getMessageById(Number.parseInt(req.params.id));
        if (message === undefined) {
            throw new Error("Undefined message");
        }
        else {
            res.render("details", {
                date: message.date,
                username: message.username,
                text: message.text
            });
        }
    } catch (err) {
        next(err);
    }
}