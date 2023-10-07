import NoteCard from "../../components/NoteCard/NoteCard"
import * as notesAPI from "../../utilities/notes-api"
import { useEffect } from "react"

export default function NotesListPage({ notes, setNotes }) {

    useEffect(function () {
        (async function() {
            const allNotes = await notesAPI.getNotes()
            setNotes([...allNotes])
        })()
    }, [])

    const notesList = notes.map((note) => <NoteCard note={ note } />)
    
    return (
        <div>
            <h1>Note History</h1>

            {notes.length ? 
                <><NoteCard notes={ notes } /></>
                :
                <p>No Notes Yet!</p>}
        </div>
    )
}