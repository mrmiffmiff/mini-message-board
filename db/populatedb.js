#! /usr/bin/env node

import { Client } from "pg";
import { argv } from "node:process";

const CREATE_SQL = `
CREATE TABLE IF NOT EXISTS messages (
 id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
 username VARCHAR ( 255 ),
 text TEXT,
 date TIMESTAMP WITH TIME ZONE
);
`;

const INSERT_SQL = `
INSERT INTO messages (username, text, date)
VALUES
 ('Amando', 'Hi there!', $1),
 ('Charles', 'Hello World!', $2);
`;
const params = [new Date(), new Date()];

const host = argv[2] || process.env.PGHOST;
const database = argv[3] || process.env.PGDATABASE;
const role = argv[4] || process.env.PGUSER;
const pass = argv[5] || process.env.PGPASSWORD;


async function main() {
    console.log(`seeding to ${host}...`);
    const client = new Client({
        host: host,
        database: database,
        user: role,
        password: pass,
    });
    try {
        await client.connect();
        await client.query(CREATE_SQL);
        await client.query(INSERT_SQL, params);
    } catch (err) {
        console.error(err);
    } finally {
        await client.end();
    }
    console.log("done");
}

await main();