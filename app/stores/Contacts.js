/*global Ext, phone, TreeStore */
Ext.regStore("Contacts",{
    model: "Contact",
    sorters: 'firstName',
    getGroupString : function(record) {
        return record.get('name')[0];
    },
    data: [{
        "id": "1",
        "avatar": "resources/images/avatar.png",
        "sign" : "hello world",
        "name": "Xiao Ming",
        "cellphone": "18658812316",
        "ring": "2",
        "email": "gbluefox617@gmial.com",
        "wangwang" : "rfjdasf@ak.com",
        "msn" : "fdjas@msn.com",
        "renren" : "fuck",
        "birth": "1988-08-06",
        "address" : "杭州西湖 "
    }
    ]
});