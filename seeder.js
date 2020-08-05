const fs = require('fs');
const mongoose = require('mongoose');
const colors = require('colors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// Load env vars
dotenv.config({ path: './config/config.env' });

// Load models
const Board = require('./models/Board');

//Connect to DB
connectDB();

// Read JSON files
const boards = JSON.parse(fs.readFileSync(`${__dirname}/_test_data/boards.json`, 'utf-8'));

//Import into DB
const importData = async () => {
  try {
    await Board.create(boards);
    console.log('Data Imported...'.green.underline);
    process.exit();
  } catch (error) {
    console.log(error);
  }
}

const deleteData = async () => {
  try {
    await Board.deleteMany();
    console.log('Data Destroyed...'.red.underline);
    process.exit();
  } catch (error) {
    console.log(error);
  }
}

if (process.argv[2] === '-i') {
  importData();
} else if (process.argv[2] === '-d') {
  deleteData();
};