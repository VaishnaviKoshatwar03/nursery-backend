const mongoose = require("mongoose");

const bannerSchema = new mongoose.Schema(
{
title:String,
subtitle:String,
image:String
},
{timestamps:true}
);

module.exports = mongoose.model("Banner",bannerSchema);