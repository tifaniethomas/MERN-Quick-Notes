import { Link } from "react-router-dom"
import * as userService from '../../utilities/users-service'

export default function NavBar({user, setUser}) {
    function handleLogOut() {
        userService.logOut()

        setUser(null)
    }
    return (
        <nav>
            <Link to="/orders">Note History</Link>
            &nbsp; | &nbsp;
            <Link to="/orders/new">New Note</Link>
            &nbsp; &nbsp;
            <span>Welome, {user.name} </span>
            &nbsp; &nbsp;
            <button onClick={ handleLogOut }>Log Out</button>
        </nav>
    )
}