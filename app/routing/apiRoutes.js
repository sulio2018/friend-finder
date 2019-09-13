var friends = require("../data/friends");

module.exports = function(app) {

    //Get data from friends
    app.get("/api/friends", function(req, res){
        res.json(friends);
    });

    //Post user data to friends array
    app.post("/api/friends", function(req, res) {

        //Capture user input
        var userInput = req.body;
        var userScores = userInput.scores;


    })
}