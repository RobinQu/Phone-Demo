/*global phone, Ext */
phone.views.ContactForm = Ext.extend(Ext.form.FormPanel, {
    cls: "contact-form",

    initComponent: function() {
        var config = {
            defaults: {
              xtype: "fieldset"
            },
            items: [
                    {
                      items: {
                          xtype: 'textfield',
                          name: 'name',
                          label: '姓名'
                      }
                    },{
                      title: "电话",
                      items: {
                          xtype: 'textfield',
                          name: 'cellphone',
                          label: '手机'
                      }
                    },{
                        title: "铃声",
                        items: {
                            xtype: "selectfield",
                            name: "ring",
                            store: "Rings"
                        }
                    },{
                        title: "电子邮件",
                        items: {
                            xtype: 'emailfield',
                            name: 'email',
                            label: '电子邮件'
                        }
                    },{
                        title: "即时消息",
                        items: [{
                            xtype: 'textfield',
                            name: 'wangwang',
                            label: "阿里旺旺"
                        },
                        {
                            xtype: 'textfield',
                            name: 'msn',
                            label: "MSN"
                        }]
                    },{
                        title: "社交网络",
                        items: {
                            xtype: 'textfield',
                            name: 'renren',
                            label: '人人网'
                        }
                    },{
                      title: "地址",
                      items: {
                          xtype: 'textfield',
                          name: "address",
                          label: "家庭住址"
                      }
                    },{
                        title: "日期",
                        items: {
                            xtype: 'datepickerfield',
                            name: 'birth',
                            label: '生日'
                        }
                    }
                ]
        };

        Ext.apply(this, config);

        phone.views.ContactForm.superclass.initComponent.apply(this, arguments);
    }

});

Ext.reg('contactform', phone.views.ContactForm);