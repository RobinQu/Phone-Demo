/*global Ext, phone */
Ext.regController("contact", {
    model: "Contact",
    onAction: function(btn) {
        var form = Ext.getCmp("detail-overlay").down('contactform'),
            list = Ext.getCmp("contacts-list");
        if (btn.hasDisabled) {
            form.enable();
            btn.hasDisabled = false;
            btn.setText('Save');
        } else {
            form.updateRecord(list.getSelectedRecords()[0], false);
            form.disable();
            btn.hasDisabled = true;
            btn.setText('Edit');
        }
    },
    save: function(btn) {
        var contact = new this.model({}),
            store = Ext.getStore("Contacts"),
            overlay = Ext.getCmp("compose-overlay"),
            form = overlay.down('contactform');
        form.updateRecord(contact, false);
        store.insert(store.data.length, contact);
        overlay.hide();
    },
    remove: function() {
        var list = Ext.getCmp("contacts-list"),
            store = Ext.getStore("Contacts"),
            rec = list.getSelectedRecords()[0],
            overlay = Ext.getCmp("detail-overlay");
        store.remove(rec);
        overlay.hide();
    }
});

phone.controllers.contact = Ext.ControllerManager.get("contact");
