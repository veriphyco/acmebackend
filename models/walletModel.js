
import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
orgId: { type: String, required: true, unique: true },
walletBalance: { type: Number, required: true, unique: false,default: null },
weekReports: { type: Number, required: true, unique: false,default: null },
dailyReports: { type: Number, required: true, unique: false,default: null },
TotalVerification: { type: Number, required: true, unique: false,default: null },
});

const walletModel = mongoose.model(             
  "Wallet Model",
  userSchema
);
export default walletModel;
