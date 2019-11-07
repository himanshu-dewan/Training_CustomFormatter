sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"formatter/formatter/formatter/format"
], function (Controller,format) {
	"use strict";
	
	return Controller.extend("formatter.formatter.controller.View1",{
		
		formatter:format
		
		
	});
	
});