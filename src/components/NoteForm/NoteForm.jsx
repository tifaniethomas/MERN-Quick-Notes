import { useState } from "react";

export default function NoteForm({ setNotes }) {

    const [newNote, setNewNote] = useState("")
    
    async function handleSubmit(evt) {
        evt.preventDefault();
        setNotes(newNote)
        setNotes("");
    }
    
    function handleChange(evt) {
        const updateNote = { ...newNote, [evt.target.name]: evt.target.value };
        setNewNote(updateNote);
    }
    return (
    <div>
        <div className="form-container">
          <form autoComplete="off" onSubmit={handleSubmit}>
            <label>Note:</label>
            <input type="text" name="note" onChange={handleChange} required />
            <button type="submit">Save Note</button>
          </form>
        </div>
      </div>
    )
}