import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as notesAPI from "../../utilities/notes-api"

export default function NoteForm({ setNotes }) {
  const [newNote, setNewNote] = useState("")
  const navigate = useNavigate()

  
  async function handleSubmit(evt) {
        evt.preventDefault();

        try {
          notesAPI.createNote(newNote)
          setNewNote({text: ''});
          navigate('/')
        } catch (err) {
          console.log(err)
        }
    }
    
    function handleChange(evt) {
        const updateNote = { ...newNote, [evt.target.name]: evt.target.value };
        setNewNote(updateNote);
    }
    return (
        <div className="form-container">
          <form autoComplete="off" onSubmit={handleSubmit}>
            <label>Note:</label>
            <textarea type="text" name="text" onChange={handleChange} required value={newNote.text} />
            <button type="submit">Add Note</button>
          </form>
        </div>
    )
}