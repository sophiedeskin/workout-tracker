var express = require("express");
var router = express.Router();
const Workout = require("../models/workout.js");

router.get("/api/workouts/range", (req, res) => {
    Workout.find({})
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

router.get("/api/workouts", (req, res) => {
  Workout.aggregate([
    { 
      $addFields: {
        totalDuration: {
          $sum: "$exercises.duration"
        }
      }
     }
  ])
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

// router.post("/api/workouts", ({ body }, res) => {
//     Workout.create(body)
//       .then(dbWorkout => {
//         res.json(dbWorkout);
//       })
//       .catch(err => {
//         res.status(400).json(err);
//       });
//   });
router.post('/api/workouts', (req, res) => {
  Workout.create({})
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});


  router.put("/api/workouts/:id", ({ body, params }, res) => {
    Workout.findByIdAndUpdate(
      params.id,
      { $push: { exercises: body } },
  
      { new: true
      }
    )
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
  });
  
  
  
  
  module.exports = router;
  