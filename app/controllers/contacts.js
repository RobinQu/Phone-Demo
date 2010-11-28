/*global Ext, phone */

Ext.regController("contacts", {
    addContact: function() {
        var view = this.composeView,
        form;
        if (!view) {
            this.composeView = this.render({
                xtype: "overlayform",
                id: "compose-overlay",
                title: "Add Contact",
                actionsBar: {
                    xtype: "button",
                    text: "Save",
                    scope: phone.controllers.contact,
                    handler: phone.controllers.contact.save
                }
            },
            false);
            view = this.composeView;
        }

        form = view.form;
        if (!form) {
            form = view.down("contactform");
            view.form = form;
        }
        form.reset();
        form.enable();
        view.show();
    },
    deleteContact: function() {
        Ext.Msg.confirm(
            "Confirm",
            "Are you sure to delete contact?",
            function(status) {
                if(status==="yes") {
                    Ext.dispatch({
                       controller: "contact",
                       action: "remove" 
                    });
                }
            }
        );
    },
    showContact: function(sm, rec) {
        var view = this.detailView;
        if (!view) {
            this.detailView = this.render({
                xtype: "overlayform",
                id: "detail-overlay",
                title: "Contact Info",
                actionsBar: [{
                    xtype: "button",
                    text: "Edit",
                    ui: "round",
                    hasDisabled: true,
                    scope: phone.controllers.contact,
                    handler: phone.controllers.contact.onAction
                },
                {
                    xtype: "button",
                    text: "Delete",
                    ui: "decline-round",
                    scope: phone.controllers.contacts,
                    handler: phone.controllers.contacts.deleteContact
                }],
                listeners: {
                    scope: this,
                    hide: function() {
                        view.down("button").setText("Edit");
                        view.down("contactform").disable();
                        sm.deselectAll();
                    }
                }
            },
            false);
            view = this.detailView;
        }

        view.down("contactform").load(rec);
        view.show();
    },
    onSelected: function(selectionModel, records) {
        var rec = records[0];

        if (rec) {
            this.showContact(selectionModel, rec);
        }
    }
});

phone.controllers.contacts = Ext.ControllerManager.get("contacts");
