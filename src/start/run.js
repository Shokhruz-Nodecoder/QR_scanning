// const config = require('config');

// const Port = config.get("port")

const Config = require("../config")
const Port = Config.port

const {connect} = require("mongoose")

const bootstrapt = async(app) =>{
 
    await connect("mongodb://127.0.0.1:27017/QrCodeAuth")
    app.listen(Port, ()=>{
        console.log(`listening on ${Port}`);
    })
}


module.exports = bootstrapt