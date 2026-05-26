const sampleMessages = [
    {
        text: "Hi there!",
        user: "Amando",
        added: new Date(),
        id: 0,
    },
    {
        text: "Hello World!",
        user: "Charles",
        added: new Date(),
        id: 1,
    },
];

let nextId = 2;

export function getMessages() {
    return sampleMessages;
}

export function postMessage(text, user, added) {
    sampleMessages.push({ text: text, user: user, added: added, id: nextId++ });
}

export function getMessageById(id) {
    return sampleMessages.find((message) => message.id === id);
}