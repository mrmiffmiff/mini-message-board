import pool from "./pool.js";

async function getMessages() {
    const { rows } = await pool.query("SELECT * FROM messages;");
    return rows;
}

async function postMessage(text, user, date) {
    await pool.query("INSERT INTO messages (username, text, date) VALUES ($1, $2, $3);", [user, text, date]);
}

async function getMessageById(id) {
    if (!id) {
        throw new Error("No id provided properly");
    }
    console.log("Seem to have right id: ", id);
    const messageData = await pool.query("SELECT * FROM messages WHERE id = $1;", [id]);
    console.log(messageData);
    return messageData.rows[0];
}

export default {
    getMessages,
    postMessage,
    getMessageById
};