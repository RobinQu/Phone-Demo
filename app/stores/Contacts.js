/*global Ext, phone, TreeStore */
Ext.regStore("Contacts",{
    model: "Contact",
    sorters: 'firstName',
    getGroupString : function(record) {
        return record.get('firstName')[0];
    },
    data: [{
        "id": "1",
        "firstName": "Chai",
        "lastName": "Yuan",
        "mobileNum": "18658812316",
        "telNum": "028-135123453",
        "eMail": "gbluefox617@gmial.com",
        "leaf": true,
        "cls": "contact"
    },
    {
        "id": "2",
        "firstName": "YueYue",
        "lastName": "Bird",
        "mobileNum": "1354314421",
        "telNum": "028-135123453",
        "eMail": "birdYue@gmial.com",
        "leaf": true,
        "cls": "contact"
    },
    {
        "id": "3",
        "firstName": "Tania",
        "lastName": "Rico",
        "mobileNum": "13114523234",
        "telNum": "028-135123453",
        "eMail": "Rico22@gmial.com",
        "leaf": true,
        "cls": "contact"
    },
    {
        "id": "4",
        "firstName": "Odessa",
        "lastName": "Steuck",
        "mobileNum": "18853542354",
        "telNum": "028-135123453",
        "eMail": "Odessa231@gmial.com",
        "cls": "contact",
        "leaf" : true
    },
    {
        "id": "5",
        "firstName": "Alana",
        "lastName": "Liu",
        "mobileNum": "13221423542",
        "telNum": "028-135123453",
        "eMail": "LiuAlana@gmial.com",
        "leaf": true,
        "cls": "contact"
    },
    {
        "id": "6",
        "firstName": "Duke",
        "lastName": "Koo",
        "mobileNum": "13221423542",
        "telNum": "028-222",
        "eMail": "LiuAlana@gmial.com",
        "leaf": true,
        "cls": "contact"
    },
    {
        "id": "7",
        "firstName": "Babo",
        "lastName": "LOOO",
        "mobileNum": "13221423542",
        "telNum": "028-222",
        "eMail": "LiuAlana@gmial.com",
        "leaf": true,
        "cls": "contact"
    },
    {
        "id": "8",
        "firstName": "Weick",
        "lastName": "Koo",
        "mobileNum": "13221423542",
        "telNum": "028-222",
        "eMail": "LiuAlana@gmial.com",
        "leaf": true,
        "cls": "contact"
    }
    ]
});