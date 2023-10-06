import { useState } from "react";
import NoteForm from "../../components/NoteForm/NoteForm";

export default function NewNotePage({setNotes}) {


    return (
        <> 
            <h1>NewNotePage</h1>
            <NoteForm setNotes={ setNotes }/>
        </>
    )
}