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
        var userAnswers = userInput.scores;

        ///Find a match
        var matchingName = "";
        var matchingPhoto = "";
        var totalDifference = 1000;

        //Loop through friends
        for (var i = 0; i < friends.length; i++) {

            var differentScores = 0;

            //Loop through user answers
            for (var j = 0; j < userAnswers.length; j++) {
                differentScores += Math.abs(friends[i].scores[j] - userAnswers[j]); 
            }

            if (differentScores < totalDifference) {

                totalDifference = differentScores;
                matchingName = friends[i].name;
                matchingPhoto = frinds[i].photo;
            }
        }

        friends.push(userInput);

        res.json({status: "OK", matchingName: matchingName, matchingPhoto: matchingPhoto});
    });
};