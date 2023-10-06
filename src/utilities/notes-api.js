import sendRequest from "./send-request";
const BASE_URL = "/api/notes"

export function getNotes() {
    return sendRequest(BASE_URL)
}

export function createNotes(note) {
    return sendRequest(`${BASE_URL}`/create, "POST", note)
}