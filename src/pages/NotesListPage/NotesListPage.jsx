import NoteCard from "../../components/NoteCard/NoteCard"
import NoteForm from "../../components/NoteForm/NoteForm";
import * as notesAPI from "../../utilities/notes-api"
import { useEffect, useState } from "react"

export default function NotesListPage() {

    const [ notes, setNotes ] = useState([])

    useEffect(function () {
        async function getNotes() {
            const allNotes = await notesAPI.getAll()
            setNotes(allNotes)
        }
        getNotes()
    }, [])

    const notesList = notes.map((note, idx) => <NoteCard note={ note } key={ idx } notes={ notes } setNotes={ setNotes }/>)

    return (
        <>
        <NoteForm />
        <br/>
        {!notes.length ? "No Notes Yet!" : notesList}
        </>
    )
}