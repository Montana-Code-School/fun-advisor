var Game = require('./models/Game');

module.exports = function(app, passport) {

	app.post('/api/game', function (req, res) {
		new Game({
		gameName: req.body.gameName,
		numPlayers: req.body.numPlayers,
		type: req.body.type, //needs to be array
		time: req.body.time,
		description: req.body.description,
		itemsNeeded: req.body.itemsNeeded, //needs to be array
		tutorial: req.body.tutorial, //needs to be array
		rating: req.body.rating, 
		difficulty: req.body.difficulty
		})
		.save(function(err, data) {
			if (err) {
			console.error("Savage burn: ", err)
			} else {
			res.json(data)
			}
		})
	})
    
    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect : '/api/user', // redirect to the secure profile section
        failureRedirect : '/api/user', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));

    app.post('/login', passport.authenticate('local-login', {
        successRedirect : '/api/user', // redirect to the secure profile section
        failureRedirect : '/api/user', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));

    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/api/user');
    });

    app.get('/api/user', function(req, res){
        if(req.user){
            res.json({ loggedIn: true, user: req.user, flash: req.flash()})
        } else {
            res.json({loggedIn: false, flash: req.flash()})
        }
    })



  

}


// gameName:"Count to 20",
// numPlayers:8,
// type:["Road Trip","Improv"],
// time:10,
// description:"Count to 20 without repeating self",
// itemsNeeded:["none"],
// tutorial:["1. ablas", "2. asdofijasdfijo"],
// rating:5,
// difficulty:"Hard"