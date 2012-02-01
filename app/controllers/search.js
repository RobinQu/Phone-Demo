/*global Ext, phone */
Ext.regController("search", {
    onFilter: function(value) {
        var view = Ext.getCmp("contacts-list"),
            store = Ext.getStore("Contacts");
        //
        // Ext.iterate(values, function(field, value) {
        //     filters.push(new Ext.util.Filter({
        //         property: field,
        //         value: value
        //     }));
        // });

        store.clearFilter();
        store.filter("firstName", value);

    }
});

phone.controllers.search = Ext.ControllerManager.get("search");