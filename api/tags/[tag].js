const connectDB = require('../db');
const { JournalModel } = require('../models');

module.exports = async (req, res) => {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, token');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  
  if (req.method === 'GET') {
    await connectDB();
    
    let tag = req.query.tag || '';
    
    try {
      const entries = await JournalModel.find({tags:{ $exists: true, $ne: [] }}).exec();
      console.log(`found tagged entries`, entries.length);
      
      // make a list of all tags - sorted
      let tagsList = [...new Set([].concat.apply([], entries.map(e => e.tags)))].sort();
      
      // if tag is null then return values of first tag from that list
      if (!tag && tagsList.length > 0) tag = tagsList[0];
      
      const filteredEntries = tag ? entries.filter(e => e.tags.includes(tag)) : [];
      
      return res.status(200).json({
        status: "success", 
        data: filteredEntries, 
        currentTag: tag, 
        tagsList: tagsList
      });
    } catch (err) {
      console.log("Mongo Error: ", err);
      return res.status(200).json({status:"error", data:err});
    }
  }
  
  return res.status(405).json({ error: 'Method not allowed' });
};