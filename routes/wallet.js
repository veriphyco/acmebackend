import express from "express";
import walletModel from "../models/walletModel.js";


const router = express.Router();

router.post("/", async (req, res) => {
    const newWallet = new walletModel({
        orgId:req.body.orgId,
        walletBalance: req.body.walletBalance,
        weekReports: req.body.weekReports,
        dailyReports: req.body.dailyReports,
        TotalVerification: req.body.TotalVerification,
       
      });
      try {
        const newWalletCo = await newWallet.save();
        // res.send("Registration Success");
        res.json(newWalletCo);
      } catch (err) {
        res.json({ message: err });
      //  res.send("not uploaded");
      }
  });   
  router.patch("/updatewallet/:id", async(req, res)=>{
    try {
        const updateRegister = await walletModel.updateOne({
          _id: req.params.id}, {$set: {walletBalance:req.body.walletBalance}});
          res.json(updateRegister)
      } catch (err) {
        res.json({ message: err });
        console.log('not updated')
      //  res.send("not uploaded");
      }
  })

  router.get("/loadwallet", async(req,res)=>{
    try {
        //quering the data in aphetical order
        const walleet = await walletModel.find().sort({ walletBalance: 1 });
        res.json(walleet);
      } catch (err) {
        res.json({ message: err });
      }
  })




  export default router;