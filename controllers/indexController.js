import db from "../db/queries.js";

export async function getIndex(req, res) {
    const messages = await db.getMessages();
    res.render("index", { title: "Mini Messageboard", messages: messages });
}