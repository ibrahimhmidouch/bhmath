import mongoose from 'mongoose';

const FirstBacScienceDevoirSchema = new mongoose.Schema({
  title: { type: String, required: true },
  pdfUrl: { type: String, required: true },
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

export default mongoose.models.FirstBacScienceDevoir || mongoose.model('FirstBacScienceDevoir', FirstBacScienceDevoirSchema); 