import NoteCard from "../../components/NoteCard/NoteCard"

export default function NotesListPate({ notes }) {

    
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