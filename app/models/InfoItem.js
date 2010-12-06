/*global Ext */
Ext.regModel('InfoItem', {
    fields: [
        {name: 'text', type: 'string'},
        {name: 'attr', type: 'string'},
        {name: 'xtype', type: 'string', defaultValue: "textfield"}
    ]
});