/*global Ext, phone */
Ext.regController("contact", {
    model: "Contact",
    beginEdit: function() {
        var box = Ext.getCmp("contacts-box"),
        form = box.down("contactform"),
        detail = box.down("contactdetail");
        form.load(detail.instance);
        box.next();
        //asumming edit view is next to detail view
    },
    appendInfo: function() {
        if(!this.infoList) {
            this.infoList = new Ext.NestedList({
                floating: true,
                modal: true,
                centered: true,
                width: 300,
                height: 400,
                scroll: "vertical",
                title: "选择标签",
                store: "InfoIndex",
                allowDeselect: true,
                plugins: [new Ext.LeafSelectedPlugin()],
                listeners: {
                    scope: this,
                    leafitemtap: this.addItem
                }
            });
        }
        this.infoList.show("pop");
    },
    addItem: function(list, id, el) {
        var rec = list.getRecord(el).data,
        builder = Ext.getCmp("contact-builder"),
        form = builder.down("fieldset");
        console.log(form);
        form.add({
            xtype: rec.xtype,
            name: rec.attr,
            label: rec.text
        });
        form.doComponentLayout();
        //list.deselect(id, true);
        //this.infoList.setActiveItem(0);
        this.infoList.hide();

    },
    save: function(btn) {
        var contact,
            box = Ext.getCmp("contacts-box"),
        store = Ext.getStore("Contacts"),
        overlay = Ext.getCmp("contact-builder"),
        form = overlay.down('form'),
        list = Ext.getCmp("contacts-list");
        console.log(box.getActiveItem().getId());
        if(box.getActiveItem().getId() === "contact-builder") {
            console.log("saving");
            contact = new this.model({});
            form.updateRecord(contact, false);
            store.insert(store.data.length, contact);
        } else {
            console.log("updating");
            //update action is called in a editing mode
            form.updateRecord(list.getSelectedRecords()[0], false);
        }

        Ext.dispatch({
            controller: "contacts",
            action: "hideOverlay"
        });

    },
    remove: function() {
        var list = Ext.getCmp("contacts-list"),
        store = Ext.getStore("Contacts"),
        rec = list.getSelectedRecords()[0],
        overlay = Ext.getCmp("detail-overlay");
        store.remove(rec);
        Ext.dispatch({
            controller: "contacts",
            action: "hideOverlay"
        });
    }
});

phone.controllers.contact = Ext.ControllerManager.get("contact");
