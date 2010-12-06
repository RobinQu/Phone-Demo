/*global phone, Ext */

phone.views.ContactsList = Ext.extend(Ext.List, {
    initComponent: function() {
        phone.views.ContactsList.superclass.initComponent.apply(this, arguments);
        this.enableBubble('selectionchange');
    },
    cls: "contacts-list",
    grouped: true,
    indexBar: true,
    itemTpl: '<div class="contact"><strong>{name}</strong></div>',
    store: "Contacts"
});

Ext.reg('contactslist', phone.views.ContactsList);