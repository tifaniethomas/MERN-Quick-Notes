import * as notesAPI from "../../utilities/notes-api"
import './NoteCard.css';


export default function NoteCard({ note, notes, setNotes }) {
    const date = new Date(note.createdAt).toLocaleString()

    async function handleDelete(noteId) {
        await notesAPI.deleteNote(noteId);
        setNotes(notes.filter(note => note._id !== noteId));
      }

    return (
        <>
        <div className="NoteCard">{ date }:&nbsp;&nbsp;&nbsp;{ note.text }
        <button type="submit" onClick={() => handleDelete(`${ note._id }`)}>X</button></div>
        </>
    )
}