const {Router} = require("express")
const { register, homePage, getQrCode, qrScaner, showUser } = require("../controllers/worker.controller")
const router = Router()

router.post("/qrcode", register)

router.get("/signup", homePage)
router.get("/qrcodedownload", getQrCode)
router.get("/qrscaner", qrScaner)
router.post("/saveuser", showUser)
module.exports = router