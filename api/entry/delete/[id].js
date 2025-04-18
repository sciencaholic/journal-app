const connectDB = require('../../db');
const { JournalModel } = require('../../models');

module.exports = async (req, res) => {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, token');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  
  if (req.method === 'POST') {
    await connectDB();
    
    const entryId = req.query.id;
    
    try {
      await JournalModel.deleteOne({_id:entryId});
      return res.status(200).json({status:"success"});
    } catch (err) {
      console.log("Mongo Error: ", err);
      return res.status(200).json({status:"error", data:err});
    }
  }
  
  return res.status(405).json({ error: 'Method not allowed' });
};