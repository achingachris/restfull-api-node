import mongoose from 'mongoose'

const Schema = mongoose.Schema

export const ContactSchema = new Schema({
  fisrtName: { type: String, required: 'First Name' },
  lastName: { type: String, required: 'Last Name' },
  email: { type: String },
  company: { type: String },
  phone: { type: Number },
  created_date: { type: Date, default: Date.now },
})
