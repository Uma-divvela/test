let express = require('express')
let router = express.Router()
let vechileDataCol = require('../models/vechile')



router.get('/get_vechile_makers/',async(req,res)=>{
	await vechileDataCol.find().distinct('VEHICLE_MAKE',(err,data)=>{
		if (err) return console.error(err);
		res.json(data)
	})
})


router.post('/get_vechile_models',async(req,res)=>{
	console.log(req.body)
	let inputData = req.body.VECHILE_MAKE
	console.log(inputData)
	await vechileDataCol.find({'VEHICLE_MAKE':inputData}).distinct("VEHICLE_MODEL",(err,data)=>{
		if (err) return console.error(err);
		res.json(data)	
	})
})

module.exports = router