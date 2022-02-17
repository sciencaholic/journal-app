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
		if (err) {
			console.log("Mongo Error: ", err);
			return res.status(200).json({status:"error", data:err});
		}
		console.log("found entries:", entries.length);
		return res.status(200).json({status:"success", data:entries});
	})
});


router.get('/moments', cors, (req, res, next) => {
	JournalModel.find({highlight:true}, (err, entries) => {
		if (err) {
			console.log("Mongo Error: ", err);
			return res.status(200).json({status:"error", data:err});
		}
		console.log("found moments:", entries.length);
		return res.status(200).json({status:"success", data:entries});
	})
});


router.get('/tags/:tag?', cors, (req, res, next) => {
	let tag = req.params.tag;

	JournalModel.find({tags:{ $exists: true, $ne: [] } }, (err, entries) => {
		if (err) {
			console.log("Mongo Error: ", err);
			return res.status(200).json({status:"error", data:err});
		}
		console.log(`found tagged entries`, entries.length);
		
		// make a list of all tags - sorted
		let tagsList = [...new Set([].concat.apply([], entries.map(e => e.tags)))].sort();
		// if :tag is null then return values of first tag from that list
		if (!tag) tag = tagsList[0];
		entries = entries.filter(e => e.tags.includes(tag));
		return res.status(200).json({status:"success", data:entries, currentTag:tag, tagsList:tagsList});
	})
});


router.post('/entry/create', cors, (req, res, next) => {

	let entry = req.body.entry;	
  let newEntry = new JournalModel(entry);
  
  let err = newEntry.validateSync();
  // console.log('Passed validation during new entry creation', err == null);
  if (err) return res.status(200).json({status:"error", data:err});

  newEntry.save(err => {
    if (err) {
			console.log("Mongo Error: ", err);
			return res.status(200).json({status:"error", data:err});
		}
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
		if (err) {
			console.log("Mongo Error: ", err);
			return res.status(200).json({status:"error", data:err});
		}
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
	// 	if (err) {
	// 	console.log("Mongo Error: ", err);
	// 	return res.status(200).json({status:"error", data:err});
	// }
		return res.status(200).json({status:"success"});
	// })
});


module.exports = router;
