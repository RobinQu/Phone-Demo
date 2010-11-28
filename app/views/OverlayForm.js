/*global Ext, phone */

phone.views.OverlayForm = Ext.extend(Ext.Sheet, {
    modal: true,
    fullscreen: true,
    cls: 'overlay-form',
    enter: 'left',
    exit: 'right',
    stretchX: true,
    stretchY: true,
    initComponent: function() {
        var items = {
            items: {
                xtype: "contactform",
                actionsBar: {
                    margin: 10,
                    defaults: {
                      margin: 5,
                      flex: 1  
                    },
                    layout: {
                        type: "hbox",
                        pack: 'center',
                        align: 'stretch'
                    },
                    items: this.actionsBar
                }
                    
            }
        };
        Ext.apply(this, {
            dockedItems: {
                xtype: "toolbar",
                dock: "top",
                title: this.title,
                items: [
                {
                    ui: 'back',
                    text: "Back",
                    scope: this,
                    handler: function(btn, e) {
                        this.hide();
                    }
                }
                ]
            },
            items: items
        });
        phone.views.OverlayForm.superclass.initComponent.apply(this, arguments);


    }
});

Ext.reg('overlayform', phone.views.OverlayForm);