import mongoose from 'mongoose';

const ThirdCollegeDevoirSchema = new mongoose.Schema({
  title: { type: String, required: true },
  pdfUrl: { type: String, required: true },
  content: { type: String, required: true },
  semester: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

export default mongoose.models.ThirdCollegeDevoir || mongoose.model('ThirdCollegeDevoir', ThirdCollegeDevoirSchema); 