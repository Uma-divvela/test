let mongoose = require('mongoose')

let vechileSchema = new mongoose.Schema({
	VEHICLE_CODE : Number,
	VEHICLE_TYPE_CODE:Number,
	VEHICLE_TYPE:String,
	VEHICLE_MODEL:String,
	VEHICLE_SUBTYPE:String,
	CC:Number,
	VEHICLE_MAKE:String
})

module.exports = vechileDataCol = mongoose.model('vechileDataCol',vechileSchema,'vechileDataCol')