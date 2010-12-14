/*global phone, Ext */

phone.views.ContactsList = Ext.extend(Ext.List, {
    initComponent: function() {
        phone.views.ContactsList.superclass.initComponent.apply(this, arguments);
        this.enableBubble('selectionchange');
    },
    cls: "contacts-list",
    grouped: true,
    indexBar: true,
    itemTpl: '<figure class="contact"><img src="{avatar}" /><figcaption><strong>{name}</strong><p>手机 {cellphone}</p></figcaption></figure>',
    store: "Contacts"
});

Ext.reg('contactslist', phone.views.ContactsList);