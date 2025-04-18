const moment = require("moment");
var mongooseObject = null;

function getMongoose() {
  if (null != mongooseObject) return mongooseObject;
  mongooseObject = require("mongoose");
  return mongooseObject;
}
const Schema = getMongoose().Schema;

const journalSchema = new Schema({
	highlight: Boolean,
	date: Date,
	text: String,
	tags: [String]
});
const JournalModel = getMongoose().model('Journal', journalSchema);


exports.JournalModel = JournalModel;
exports.getMongoose = getMongoose;
