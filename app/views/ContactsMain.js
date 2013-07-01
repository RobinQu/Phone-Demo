/*global Ext, phone */
phone.views.ContactsMain = Ext.extend(Ext.Carousel, {
    cls: "contacts",
    indicator: false,
    cls: "contacts-box",
    id: "contacts-box",
    afterRender: function() {
         Ext.Carousel.superclass.afterRender.call(this);
         this.el.addCls(this.baseCls + '-' + this.direction);
    },
    items: [{
        dockedItems: [{
            xtype: "contactsbar",
            dock: 'top'
        }],
        layout: "fit",
        items: {
            id: "contacts-list",
            xtype: "contactslist"
        }
    },
    {
        xtype: "overlayform",
        id: "detail-overlay",
        title: "Contact Info",
        mainView: "contactdetail",
        actionBtn: {
            xtype: "button",
            text: "Edit",
            cls: "actionBtn",
            scope: phone.controllers.contact,
            handler: phone.controllers.contact.beginEdit
        }
    },
    {
        xtype: "overlayform",
        mainView: "contactform",
        id: "compose-overlay",
        title: "Edit Contact",
        actionBtn: {
            xtype: "button",
            text: "Save",
            cls: "actionBtn",
            scope: phone.controllers.contact,
            handler: phone.controllers.contact.save
        }
    },{
        xtype: "overlayform",
        id: "contact-builder",
        mainView: "contactbuilder",
        title: "Add Contact",
        actionBtn: {
            xtype: "button",
            text: "Save",
            cls: "actionBtn",
            scope: phone.controllers.contact,
            handler: phone.controllers.contact.save
        }

    }],
    listeners: {
        selectionchange: {
            scope: phone.controllers.contacts,
            fn: phone.controllers.contacts.onSelected
        },
        filter: {
            scope: phone.controllers.search,
            fn: phone.controllers.search.onFilter
        }
    }

});

Ext.reg("contacts", phone.views.ContactsMain);