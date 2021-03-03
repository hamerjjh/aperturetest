const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const robotRoutes = express.Router();
const PORT = 4000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/robots', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

robotRoutes.route('/').get(function(req, res) {
    Robot.find(function(err, robots) {
        if (err) {
            console.log(err);
        } else {
            res.json(robots);
        }
    });
});

robotRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id;
    Robot.findById(id, function(err, robot) {
        res.json(robot);
    });
});

robotRoutes.route('/add').post(function(req, res) {
    let robot = new Robot(req.body);
    robot.save()
        .then(robot => {
            res.status(200).json({'robot': 'robot added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new robot failed');
        });
});

robotRoutes.route('/update/:id').post(function(req, res) {
    Robot.findById(req.params.id, function(err, robot) {
        if (!robot)
            res.status(404).send('data is not found');
        else
            robot.name = req.body.name;
            robot.color = req.body.color;
            robot.attack = req.body.attack;
            robot.defense = req.body.defense;

            robot.save().then(robot => {
                res.json('Robot updated');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});

app.use('/robots', robotRoutes);

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});