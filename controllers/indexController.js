import { sampleMessages } from "../fakeDb.js";

export function getIndex(req, res) {
    res.render("index", { title: "Mini Messageboard", messages: sampleMessages });
}