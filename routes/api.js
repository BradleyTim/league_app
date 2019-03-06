const express = require('express');
const router = express.Router();
const uuid = require('uuid');

const teams = require('../Teams');


router.get('/', (req, res) => {
	res.json(teams);
});

router.get('/:id', (req, res) => {
	const available = teams.some(member => member.id === parseInt(req.params.id));
	if(available) {
		res.json(teams.filter(member => member.id === parseInt(req.params.id)));
	} else {
		res.status(400).json({message: 'Team not AVALIBALE at the moment'});
	}
});

router.post('/', (req, res) => {
	const newTeam = {
		id: uuid.v4(),
		name: req.body.name
	};

	if(!newTeam.id || !newTeam.name) {
		return res.status(400).json({message: 'Please enter the name'})
	}

	teams.push(newTeam);

	res.json(teams);
});

module.exports = router;
