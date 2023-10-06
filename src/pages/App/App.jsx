import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NewNotePage from '../NewNotePage/NewNotePage';
import NotesListPage from '../NotesListPage/NotesListPage'
import NavBar from '../../components/NavBar/NavBar';

export default function App() {
  const [user, setUser] = useState(getUser())
  const [notes, setNotes] = useState([])
  
  return (
    <main className="App">
      
      {user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/orders/new" element={ <NewNotePage setNotes={ setNotes }/>}/>
            <Route path="/orders" element={ <NotesListPage notes={ notes } /> }/>
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }

      

    </main>
  );
}