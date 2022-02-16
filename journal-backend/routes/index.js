const path = require('path');
const express = require('express');
const { JournalModel } = require('../lib/models.js');

const router = express.Router();


function cors(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
	res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, token");
  next();
}

router.get('/journal', cors, (req, res, next) => {
	JournalModel.find({}, (err, entries) => {
		if (err) return res.status(200).json({status:"error", data:err});
		console.log("found entries:", entries.length);
		return res.status(200).json({status:"success", data:entries});
	})
});


router.get('/moments', cors, (req, res, next) => {
	JournalModel.find({highlight:true}, (err, entries) => {
		if (err) return res.status(200).json({status:"error", data:err});
		console.log("found entries:", entries.length);
		return res.status(200).json({status:"success", data:entries});
	})
});


router.get('/tags/:tag', cors, (req, res, next) => {
	let tag = req.params.tag || null;
	let query = (tag) ? {tags:tag} : {}

	JournalModel.find(query, (err, entries) => {
		if (err) return res.status(200).json({status:"error", data:err});
		console.log("found entries:", entries.length);
		// TODO: TAG LIST
		// let tagList = [];
		// entries.forEach(e => {
		// 	tagList.push(new Set((e.tags)));
		// });
		return res.status(200).json({status:"success", data:entries}); // , tags:tagList
	})
});


router.post('/entry/create', cors, (req, res, next) => {

	let entry = req.body.entry;	
  let newEntry = new JournalModel(entry);
  
  let err = newEntry.validateSync();
  // console.log('Passed validation during new entry creation', err == null);
  if (err) return res.status(200).json({status:"error", data:err});

  newEntry.save(err => {
    if (err) return res.status(200).json({status:"error", data:err});
		return res.status(200).json({status:"success"});
  });
});


router.post('/entry/update/:id', cors, (req, res, next) => {

	const entryId = req.params.id;
	let entry = req.body.entry;	
  
	JournalModel.findOneAndUpdate(
		{_id:entryId}, 
		{"$set": { "highlight":highlight }},
		{ new:true, useFindAndModify:false },
	(err, output) => {
		if (err) return res.status(200).json({status:"error", data:err});
	return res.status(200).json({status:"success"});
	})
});


router.post('/highlight/:id', cors, (req, res, next) => {
	const entryId = req.params.id;
	const highlight = req.body.highlight;
	console.log("entryId = ", entryId);
	console.log("highlight = ", highlight);

	// JournalModel.findOneAndUpdate(
	// 	{_id:entryId}, 
	// 	{"$set": { "highlight":highlight }},
	// 	{ new:true, useFindAndModify:false },
	// (err, output) => {
	// 	if (err) return res.status(200).json({status:"error", data:err});
		return res.status(200).json({status:"success"});
	// })
});


module.exports = router;
