/*global Ext, phone */

Ext.regApplication({
	name: "phone",
	defaultTarget: "viewport",
	ui: "aliyun",
	launch: function() {

		this.viewport = new phone.Viewport({
		    application: this
		});


	}
});