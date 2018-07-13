const express = require('express')
const appRouter = express.Router()
const apiData = require('../db.json')

appRouter.get('/:name',function(req,res){
	if(apiData[req.params.name]){
		res.json(apiData[req.params.name])
	}else{
		res.send("no such name")
	}
})

appRouter.post('/:name',function(req,res){
	if(apiData[req.params.name]){
		res.json(apiData[req.params.name])
	}else{
		res.send("no such name")
	}
})

module.exports=appRouter;