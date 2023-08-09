const Worker = require("../../models/workers.schema");
const QrCode = require("qrcode")
const {v4:uuid} = require("uuid")
const register = async (req, res) => {
  try {
    const { firstName, lastName } = req.body;
    
    
    const imagename = `${uuid()}.png`;
    console.log(imagename);
    const pathimages = process.cwd() + "/uploads/" + imagename;
     const newWorker = (await Worker.create({ firstName, lastName,imagename }));
    
    await QrCode.toFile(`${pathimages}`, newWorker.id, {
      color: {
        dark: "#3735a2",
        light: "#f8f9fa",
      },
    });
  
    // res.redirect("/qrcodedownload")
    res.status(200).json({ msg: "Successfully created" });
  } catch (error) {
     res.json({ msg: error.message });
  }
};

const getQrCode = async (req,res) =>{
     
    
    return res.render("qrcode")
}
const homePage = async (req, res) => {
  res.render("index");
};

const qrScaner = async (req, res) => {
  res.render("scanner");
};

const showUser = async (req,res) =>{
  const {worker_id} = req.body
  console.log(worker_id)
  const findWorker = await Worker.findById(worker_id)
  res.json({message : findWorker})
}
module.exports = { register, homePage,getQrCode,qrScaner, showUser };
