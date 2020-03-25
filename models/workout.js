const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema(
    {
        day: {
            type: Date,
            default: Date.now
        },
        exercises: [
            {
                type: {
                    type: String,
                    trim: true,
                    required: "Please enter exercise type"
                },
                name: {
                    type: String,
                    trim: true,
                    required: "Please enter exercise name"
                },
                duration: {
                    type: Number,
                    required: "Please enter exercise length"
                },
                weight: {
                    type: Number
                },
                reps: {
                    type: Number
                },
                sets: {
                    type: Number
                },
                distance: {
                    type: Number
                }
            }
        ]
    },
    {
        toJSON: {
            virtuals: true
        }
    }
);

workoutSchema.virtual("totalDuration").get(function (){
    return this.exercises.reduce((total, exercise)=>{
        return total + exercise.duration
    }, 0)
});

const Workout = mongoose.model("workout", workoutSchema)

module.exports = Workout;