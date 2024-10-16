const mongoose = require('mongoose');
const User = require('../models/User');
const Address = require('../models/Address');
const EnergyData = require('../models/EnergyData');
const Equipment = require('../models/Equipment');
const Maintenance = require('../models/Maintenance');
const FutureMaintenance = require('../models/FutureMaintenance');
require('dotenv').config();

const connectDB = async () => {    
    // Connect to MongoDB
    mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
      .then(() => {
        console.log('MongoDB connected');
    
        // Create collections without inserting data
        User.createCollection()
          .then(() => console.log('User collection created'))
          .catch(err => console.log(err));
    
        Address.createCollection()
          .then(() => console.log('Address collection created'))
          .catch(err => console.log(err));
    
        EnergyData.createCollection()
          .then(() => console.log('EnergyData collection created'))
          .catch(err => console.log(err));
    
        Equipment.createCollection()
          .then(() => console.log('Equipment collection created'))
          .catch(err => console.log(err));
    
        Maintenance.createCollection()
          .then(() => console.log('Maintenance collection created'))
          .catch(err => console.log(err));
    
        FutureMaintenance.createCollection()
          .then(() => console.log('FutureMaintenance collection created'))
          .catch(err => console.log(err));
      })
      .catch(err => console.log('MongoDB connection error:', err));
    
};

module.exports = connectDB;