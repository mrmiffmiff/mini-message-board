import db from "../db/queries.js";
import { body, validationResult, matchedData } from "express-validator";

/**
 * 
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 */
export function getNew(req, res) {
    res.render("form");
}

const nameFormatError = "Name must contain only letters, numbers, and spaces.";
const nameLengthError = "Name must be between 5 and 30 characters, inclusive.";
const textLengthError = "Message must contain at least 1 non-whitespace character.";

const validateInput = [
    body("authorName").trim()
        .isAlphanumeric('en-US', {
            ignore: ' ',
        }).withMessage(nameFormatError)
        .isLength({
            min: 5,
            max: 30,
        }).withMessage(nameLengthError),
    body("messageText").trim()
        .isLength({ min: 1 }).withMessage(textLengthError),
];

export const postNew = [
    validateInput,
    /**
     * 
     * @param {import('express').Request} req 
     * @param {import('express').Response} res 
     */
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).render("form", {
                name: req.body.authorName,
                message: req.body.messageText,
                errors: errors.array(),
            });
        }
        const { authorName, messageText } = matchedData(req);
        const date = new Date();
        await db.postMessage(messageText, authorName, date);
        res.redirect("/");
    }
];