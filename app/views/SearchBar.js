/*global phone, Ext */
phone.views.SearchBar = Ext.extend(Ext.Panel, {
    cls: "searchbar",
    initComponent: function() {
        this.addEvents(
        /**
             * @event filter
             * Fires whenever the user changes any of the form fields
             * @param {Object} values The current value of each field
             * @param {Ext.form.FormPanel} form The form instance
             */
        'filter'
        );
        this.enableBubble('filter');

        Ext.apply(this, {
            width: 130,
            layout: {
                type: 'vbox',
                align: 'stretch',
                pack: "center"
            },
            items: {
                xtype: "searchfield",
                placeHolder: "Search...",
                name: "query",
                listeners: {
                    keyup: this.onFieldChange,
                    scope: this
                }

            }
        });

        phone.views.SearchBar.superclass.initComponent.apply(this, arguments);

    },
    onFieldChange: function(field, e) {
        var key = e.browserEvent.keyCode;
        if (key === 13) {
            field.blur();
        }
        this.fireEvent('filter', this.down("searchfield").getValue(), this);
    }
});

Ext.reg("searchbar", phone.views.SearchBar);