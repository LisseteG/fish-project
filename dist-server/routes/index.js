"use strict";var express=require("express"),router=express.Router();/* GET home page. */ //las rutas que se definen 
//para los métodos GET a la raíz de la aplicación
router.get("/",function(a,b){b.render("index",{title:"Express",proj:"Fish-project"})}),router.get("/hola",function(a,b){b.send("Respond with a resource")}),module.exports=router;