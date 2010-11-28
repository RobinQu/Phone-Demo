/*global phone, Ext */
phone.views.ContactForm = Ext.extend(Ext.form.FormPanel, {
    cls: "contact-form",
    scroll: "vertical",
    initComponent: function() {
        var config = {
            items: [{
                xtype: "fieldset",
                items: [{
                    xtype: 'textfield',
                    name: 'firstName',
                    placeHolder: 'First Name',
                    disabled: true,
                    required: true,
                    useClearIcon: true
                },
                {
                    xtype: 'textfield',
                    name: 'lastName',
                    placeHolder: 'Last Name',
                    disabled: true,
                    required: true,
                    useClearIcon: true
                },
                {
                    xtype: 'textfield',
                    name: 'mobileNum',
                    placeHolder: 'Mobile',
                    disabled: true,
                    useClearIcon: true
                },
                {
                    xtype: 'textfield',
                    name: 'telNum',
                    placeHolder: 'Tel',
                    disabled: true,
                    useClearIcon: true
                },
                {
                    xtype: 'emailfield',
                    name: 'eMail',
                    placeHolder: 'Email',
                    disabled: true,
                    useClearIcon: true
                }
                ]
            },
            this.actionsBar]  
            
        };
        
        
        Ext.apply(this, config);
        
        phone.views.ContactForm.superclass.initComponent.apply(this, arguments);
    }
    
});

Ext.reg('contactform', phone.views.ContactForm);