/*global Ext, phone */
phone.stores.InfoIndex = new Ext.data.TreeStore({
    model: "InfoItem",
    root: {
        text: "Info",
        items: [
            {
                text: "即时消息",
                items: [{
                    text: "MSN",
                    attr: "msn",
                    leaf: true
                },
                {
                    text: "WangWang",
                    attr: "wangwang",
                    leaf: true
                },
                {
                    text: "QQ",
                    attr: "qq",
                    leaf: true
                }]
            },
            {
                text: "网络社区",
                items: [{
                    text: "Renren",
                    attr: "renren",
                    leaf: true
                },
                {
                    text: "淘江湖",
                    attr: "tao",
                    leaf: true
                }]
            },
            {
                text: "地址",
                items: [{
                    text: "家庭地址",
                    attr: "address",
                    leaf: true
                },
                {
                    text: "工作地址",
                    attr: "office-add",
                    leaf: true
                }]
            },
            {
                text: "日期",
                items: [{
                    text: "生日",
                    attr: "birth",
                    leaf: true,
                    xtype: "datepickerfield"
                }]
            }
        ]
    },
    proxy: {
        type: 'ajax',
        reader: {
            type: 'tree',
            root: 'items'
        }
    },
    storeId: "InfoIndex"
});