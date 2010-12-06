/*global phone, Ext */

phone.Viewport = Ext.extend(Ext.TabPanel, {
    id: 'viewport',
    layout: 'card',
    fullscreen: true,
    ui: 'dark',
    sortable: true,
    tabBar: {
        height: '60',
        dock: 'bottom',
        layout: {
            align: 'center',
            pack: 'center'
        }
    },
    cardSwitchAnimation: {
        type: 'fade',
        cover: true
    },
    initComponent: function() {
        Ext.apply(this, {
            items: [{
                title: "Contacts List",
                xtype: "contacts",
                iconCls: 'user'
            },
            {
                title: "DialPad",
                html: "this is dialpad",
                iconCls: 'info'
            },{
                title: "Favorites",
                html: "fav",
                iconCls: "favorites"
            },{
                title: "Log",
                html: "log",
                iconCls: "bookmarks"
            }]
        });
        phone.Viewport.superclass.initComponent.apply(this, arguments);
    }
});

