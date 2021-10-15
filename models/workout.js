const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
 date: {
        type: Date,
        default: Date.now
  },
  exercises: [
      {
    type: {
        type: String,
        required: "Enter a type"
        },
    name: {
        type: String,
        trim: true,
        required: "Enter a name for your exercise"
  },
    duration: {
        type: Number,
  },
    weight: {
        type: Number,
    },
    reps: {
        type: Number,
            },
    sets: {
        type: Number,
            },        
        },
            ]
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;