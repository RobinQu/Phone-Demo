/*global Ext, phone */
phone.views.ContactBuilder = Ext.extend(Ext.Panel, {
    fullscreen: true,
    reset: function() {
        console.log("reset");
        
        this.removeAll();
        
        this.add([{
            xtype: "form",
            defaults: {
              xtype: "fieldset"  
            },
            items: [{                
              items: {
                  xtype: 'textfield',
                  name: 'name',
                  label: '姓名'
              }
            },{
              title: "电话",
              items: {
                  xtype: 'textfield',
                  name: 'cellphone',
                  label: '手机'
              }
            },{
                xtype: "button",
                text: "添加更多信息",
                scope: phone.controllers.contact,
                handler: phone.controllers.contact.appendInfo
            }]
        }]);
        
        this.doLayout();
    }
});

Ext.reg("contactbuilder", phone.views.ContactBuilder);