import mongoose from 'mongoose'
import resume from './resume.modal.js'
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.resume = resume;

export default db;