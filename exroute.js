




app.post('/new', function(req, res){


	new user({
		_id    : req.body.email,
		name: req.body.name,
		age   : req.body.age				
	}).save(function(err, doc){
		if(err) res.json(err);
		else    res.send('Successfully inserted!');
	});
});