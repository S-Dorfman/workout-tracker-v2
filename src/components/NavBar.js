import { Link } from "react-router-dom";
import { logOut } from "../utilities/users-service";

function NavBar({ user, setUser }) {
  const handleLogOut = () => {
    logOut();
    setUser(null);
  };
  return (
    <nav>
      <Link to="/workouts">Workout History</Link>
      {" "} | {" "}
      <Link to="/workouts/new">New Workout</Link> 
      {/* {" "} | {" "} */}
      {/* <Link to="/workouts/edit">Edit Workout</Link>  */}
      {" "}
      <span>Welcome, {user.name}</span>
      {" "}
      <Link to="" onClick={handleLogOut}>Logout</Link>
    </nav>
  );
}

export default NavBar;
