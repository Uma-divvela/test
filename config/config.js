let mongoose = require('mongoose')
let db = require('./default.json')
let config = async () =>{
	try{
		await mongoose.connect(db.mongoURI, {
			useNewUrlParser: true,
			useCreateIndex: true,
			useFindAndModify: false,
			useUnifiedTopology: true
		});
		console.log("Database Connected !")

	}catch(err){
		console.error(err.message)
		process.exit(1)
	}
}

module.exports = config