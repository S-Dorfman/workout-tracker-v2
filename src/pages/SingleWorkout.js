import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


import * as workoutAPI from '../utilities/workout-api';


function SingleWorkoutPage() {
  // Grab workoutId from params
  const { workoutId } = useParams();

  // UseEffect -> calls get list function -> pass id
  // -> data comes back and puts into state, form reads from state
  const [workoutLogs, setWorkoutLogs] = useState({});

  useEffect(function () {
    async function fetchWorkout() {
      const workoutData = await workoutAPI.singleWorkout(workoutId);
      setWorkoutLogs(workoutData);
    }

    fetchWorkout(workoutId);
  }, []);

  return (
    <div>
      <h2>Workout</h2><p>Date: {workoutLogs.workoutDate}</p>
      <h2>{workoutLogs.muscleGroup}</h2>
      <p>Exercise 1: {workoutLogs.exerciseName1}</p>
      <p>Exercise 2: {workoutLogs.exerciseName2}</p>
      <p>Exercise 3: {workoutLogs.exerciseName3}</p>
      
      
      <a href="/workouts">Back to Workout History</a>
    </div>
  );
}

export default SingleWorkoutPage;