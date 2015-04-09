"use strict";

var co = require('co');

module.exports = function(app, option){
	app.use(function *(next){
		var path = this.request.url;
		var ext = path.split('.');
		if(ext[1]){
			this.apiType = ext[1];
		}
		this.appResponse = co.wrap(function *(data){
			if(this.apiType == 'json'){
				this.body =  data.json;
			}else if(this.apiType == 'html'){
				var html = data.html;
				yield this.render(html.path, html.data);
			}else{
				var html = data.html;
				var t=yield this.render(html.path, html.data);
			}
		})

		yield next;
	});
};