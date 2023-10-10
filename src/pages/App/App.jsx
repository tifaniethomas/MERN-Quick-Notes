import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
// import { getNotes } from '../../utilities/notes-api'
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NewNotePage from '../NewNotePage/NewNotePage';
import NotesListPage from '../NotesListPage/NotesListPage'
import NavBar from '../../components/NavBar/NavBar';

export default function App() {
  const [user, setUser] = useState(getUser())
  
  return (
    <main className="App">
      
      {user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/notes/new" element={ <NewNotePage />}/>
            <Route path="/notes" element={ <NotesListPage /> }/>
            <Route path="/" Navigate to="/notes" />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
      

    </main>
  );
}