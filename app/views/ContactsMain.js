/*global Ext, phone */
phone.views.ContactsMain = Ext.extend(Ext.Panel, {
    cls: "contacts",
    layout: "fit",
    dockedItems: [{
        xtype: "contactsbar",
        dock: 'top'
    },
    {
        xtype: "searchbar",
        dock: 'top'
    }
    ],
    items: [
        {
            id: "contacts-list",
            xtype: "contactslist"
        }
    ],
    listeners: {
        selectionchange: {
            scope: phone.controllers.contacts,
            fn: phone.controllers.contacts.onSelected
        },
        filter: {
            //scope: phone.controllers.search,
            fn: phone.controllers.search.onFilter
        }
    }
    
});

Ext.reg("contacts", phone.views.ContactsMain);