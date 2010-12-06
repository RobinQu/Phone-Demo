/*global Ext, phone */

Ext.regController("contacts", {
    addContact: function() {
        var view = this.contactBuilder,
            box = this.box,
            form, fieldset;
        if (!view) {
            this.box = Ext.getCmp("contacts-box");
            this.contactBuilder = Ext.getCmp("contact-builder");
            view = this.contactBuilder;
            box = this.box;
        }
        
        view.down("contactbuilder").reset();
        
        box.setActiveItem(3, {
            type: "slide",
            direction: "left"
        });
    },
    deleteContact: function() {
        Ext.Msg.confirm(
        "Confirm",
        "Are you sure to delete contact?",
        function(status) {
            if (status === "yes") {
                Ext.dispatch({
                    controller: "contact",
                    action: "remove"
                });
            }
        }
        );
    },
    showContact: function(sm, rec) {
        var box = this.box,
        view = this.detailView;
        if (!view) {
            this.box = Ext.getCmp("contacts-box");
            this.detailView = Ext.getCmp("detail-overlay");
            box = this.box;
            view = this.detailView;
        }
        this._selectedModel = sm;
        //view.down("contactform").load(rec);
        view.down("contactdetail").setContact(rec);
        box.setActiveItem(1, {
            type: "slide",
            direction: "left"
        });
    },
    hideOverlay: function() {
        var edit = this.box.down("#detail-overlay button[text='Save']");
        if(edit) {
            edit.setText("Edit");
            this.box.down("contactform").disable();
        }
        if(this._selectedModel) {
            this._selectedModel.deselectAll();
        }
        
        this.box.setActiveItem(0, {
            type: "slide",
            direction: "right"
        });
    },
    onSelected: function(selectionModel, records) {
        var rec = records[0];
        if (rec) {
            this.showContact(selectionModel, rec);
        }
    }
});

phone.controllers.contacts = Ext.ControllerManager.get("contacts");
