/*global Ext, phone */
phone.views.ContactsToolbar = Ext.extend(Ext.Toolbar, {
    dock: 'top',
    title: 'Contacts List',
    cls: "contacts-toolbar",
    items: [{xtype: "spacer"}, {
        xtype: "button",
        text: "Add",
        scope: phone.controllers.contacts,
        handler: phone.controllers.contacts.addContact
    }]
});

Ext.reg("contactsbar", phone.views.ContactsToolbar);