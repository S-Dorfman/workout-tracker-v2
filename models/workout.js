//* workout schema


const mongoose = require('mongoose');

// const exercise = require('./exercise');


// Mongoose schema - structure/blueprint - defining the properties 
const workoutSchema = new mongoose.Schema({
    muscleGroup: {
        type: String,
        required: true
    },
    workoutDate: {
        type: Date,
        default: Date.now
    },
    exerciseName1: {
        type: String,
    },
    exerciseName2: {
        type: String,
    },
    exerciseName3: {
        type: String,
    },
    },
    {timestamps: true}
)
    

//Create the model
const workout = mongoose.model('workout', workoutSchema)

//export
module.exports = workout; 