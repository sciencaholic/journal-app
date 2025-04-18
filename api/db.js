const { getMongoose } = require('./models');

let isConnected = false;

module.exports = async () => {
  if (isConnected) return;
  
  const mongoose = getMongoose();
  
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    
    isConnected = mongoose.connections[0].readyState;
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error);
  }
};