import { useState, useEffect } from 'react';

import * as workoutAPI from '../../src/utilities/workout-api';

function WorkoutHistoryPage() {
  const [workoutLogs, setWorkoutLogs] = useState([]);

  //* useEffect to display all workouts in DB
  useEffect(function () {
    async function fetchWorkoutLogs() {
      const workoutLogs = await workoutAPI.view();
      setWorkoutLogs(workoutLogs);
    }
    fetchWorkoutLogs();
  }, [])

  // try {
  //   const workoutLogs = await workoutAPI.view();
  //   setWorkoutLogs(workoutLogs);
  // } catch (error) {
  //   console.log("error")
  // }
// };

//* handle delete function

const handleDelete = async (e, workoutLog) => {
  console.log(workoutLog);
  e.preventDefault();

  // try {
  //   const deletedWorkout = await workoutAPI.deleteWorkout(workoutLog);
  //   console.log(deletedWorkout);
  //   const workoutLogs = await workoutAPI.view();
  //   console.log(workoutLogs);
  //   setWorkoutLogs(workoutLogs);
  // } catch (error) {
  //   console.log("Delete Failed");
  // }
};

  return (
    <div>
      <h1>Workout History</h1>
      {workoutLogs.map((workoutLog)  => {
        console.log(workoutLog)
        return (
          <div key={workoutLog._id}>
          Workout Details: 
          <nav>
          <a href={`/workouts/${workoutLog._id}`}>{' '}{workoutLog.muscleGroup}</a>
          </nav> 
          {workoutLog.createdAt}
          <br />

          <button type="submit" value="PUT">
          <a href={`/workouts/${workoutLog._id}/edit`}>Edit</a>
          </button>
          {" "} | {" "}
          <button 
          type="submit" 
          value="DELETE"
          onClick={(e) => handleDelete(e, workoutLog._id)}>
          Delete
          </button>
          
          </div>
        )
      })}

    </div>
  ) 
}




export default WorkoutHistoryPage;








// import { checkToken } from "../utilities/users-service";

// function WorkoutHistoryPage() {

//   const handleCheckToken = async () => {
//     const expDate = await checkToken();
//     console.log(expDate);
//   };

//   return (
//     <div>
//       <h1>WorkoutHistoryPage</h1>
//       <button onClick={handleCheckToken}>
//         Check When My Login Token Expires
//       </button>
//     </div>
//   );
// }

// export default WorkoutHistoryPage;
