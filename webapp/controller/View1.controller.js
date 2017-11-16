sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function(Controller, JSONModel) {
	"use strict";

	return Controller.extend("flexso.behackthefuturetest.controller.View1", {
		onInit: function() {

			var oModel = this.getOwnerComponent().getModel("htf");
//testpush
			//set data to our model
			this.getView().setModel(new JSONModel({
				model: oModel
			}));
		},

		initTodoModel: function() {
			/*
        var oModel = new sap.ui.model.json.JSONModel();
        var aData = jQuery.ajax({
            type : "GET",
            url : "https://s0016561586trial-trial.apim1.hanatrial.ondemand.com/s0016561586trial/rest/0.1/search/setlists/rest/0.1/search/setlists.json?artistName=Metallica",
            dataType : "json",
            async: false, 
            success : function(data,textStatus, jqXHR) {
                oModel.setData({modelData : data}); 
                alert("success to post");
                console.log(oModel);
                console.log(data);
            }

        });
*/
		
		}

	});
});