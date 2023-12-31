import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  productId: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  condition: { type: String, required: true },
  images: [String],
  seller: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  buyer: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  status: { type: String, default: 'available' },
  
} ,
    { timestamps: true}
);

export default mongoose.model('Product', productSchema);