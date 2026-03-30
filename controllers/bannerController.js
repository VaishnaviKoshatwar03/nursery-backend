const Banner = require("../models/Banner");

exports.getBanners = async(req,res)=>{

const banners = await Banner.find();

res.json(banners);
};

exports.createBanner = async(req,res)=>{

const banner = new Banner(req.body);

await banner.save();

res.json(banner);
};