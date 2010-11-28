/*global Ext, phone */

Ext.regApplication({
	name: "phone",
	defaultTarget: "viewport",
	launch: function() {
	    
		this.viewport = new phone.Viewport({
		    application: this
		});
		
		
	}
});