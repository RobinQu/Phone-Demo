/*global Ext, phone */

phone.views.OverlayForm = Ext.extend(Ext.Panel, {
    fullscreen: true,
    cls: 'overlay-form',
    scroll: "vertical",
    initComponent: function() {
        var cfg = {
            items: {
                xtype: this.mainView
            },
            dockedItems: {
                xtype: "toolbar",
                dock: "top",
                title: this.title,
                items: [
                {
                    ui: 'back',
                    text: "Back",
                    scope: phone.controllers.contacts,
                    handler: phone.controllers.contacts.hideOverlay
                },{ xtype: "spacer"},
                this.actionBtn
                ]
            }
        };
        Ext.apply(this, cfg);
        phone.views.OverlayForm.superclass.initComponent.apply(this, arguments);


    }
});

Ext.reg('overlayform', phone.views.OverlayForm);