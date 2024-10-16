const mongoose = require('mongoose');
const User = require('../models/User');
const Address = require('../models/Address');
const EnergyData = require('../models/EnergyData');
const Maintenance = require('../models/Maintenance');
const FutureMaintenance = require('../models/FutureMaintenance');
const Category = require('../models/Category');
const Product = require('../models/Product');
const Vendor = require('../models/Vendor');
const InstalledUnit = require('../models/InstalledUnit');
const Blog = require('../models/Blog');
require('dotenv').config();

const connectDB = async () => {    
    // Connect to MongoDB
    mongoose.connect(process.env.MONGO_URI)
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
    
        Maintenance.createCollection()
          .then(() => console.log('Maintenance collection created'))
          .catch(err => console.log(err));
    
        FutureMaintenance.createCollection()
          .then(() => console.log('FutureMaintenance collection created'))
          .catch(err => console.log(err));

        Product.createCollection()
          .then(() => console.log('Product collection created'))
          .catch(err => console.log(err));

        Category.createCollection()
          .then(() => console.log('Category collection created'))
          .catch(err => console.log(err));  

        Vendor.createCollection()
          .then(() => console.log('Vendor collection created'))
          .catch(err => console.log(err));

        InstalledUnit.createCollection()
          .then(() => console.log('InstalledUnit collection created'))
          .catch(err => console.log(err));

        Blog.createCollection()
          .then(() => console.log('Blog collection created'))
          .catch(err => console.log(err));
      })
      .catch(err => console.log('MongoDB connection error:', err));
    
};

module.exports = connectDB;