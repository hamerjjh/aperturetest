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


app.use('/robots', robotRoutes);

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});