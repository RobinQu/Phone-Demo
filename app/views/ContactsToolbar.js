/*global Ext, phone */
phone.views.ContactsToolbar = Ext.extend(Ext.Toolbar, {
    dock: 'top',
    title: 'Contacts List',
    cls: "contacts-toolbar",
    ui: "aliyun",
    items: [{xtype: "spacer"},
        {
          xtype: "searchbar"
        },
        {
        xtype: "button",
        text: "Add",
        scope: phone.controllers.contacts,
        handler: phone.controllers.contacts.addContact
    }]
});

Ext.reg("contactsbar", phone.views.ContactsToolbar);