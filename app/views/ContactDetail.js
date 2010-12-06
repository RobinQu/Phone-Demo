/*global Ext, phone */
phone.views.ContactDetail = Ext.extend(Ext.Panel, {
    fullscreen: true,
    cls: "contact-detail",
    
    initComponent: function() {
        Ext.apply(this, {
            items: [
                this.getDetailsCard(),
                this.getActionsBar()
            ]
        });
        
        phone.views.ContactDetail.superclass.initComponent.apply(this, arguments);
    },
    
    setContact: function(cotnact) {
        this.instance = cotnact;
        
        if(this.rendered) {
            this.updateCard();
        } else {
            this.on("show", this.updateCard, this);
        }
        
    },
    
    updateCard: function() {
        var detailCard = this.down("#detailCard"),
            contact = this.instance;
            
        detailCard.update(contact.data);
        
    },
    
    getActionsBar: function() {
        return {
            layout: {
              type: "hbox",
              align: "center"  
            },
            defaults: {
              xtype: "button",
              ui: "round"
            },
            items: [{
                text: "Delete",
                scope: phone.controllers.contacts,
                handler: phone.controllers.contacts.deleteContact
            }]
        };
    },
    
    getDetailsCard: function() {
        return new Ext.Component({
            tpl: new Ext.XTemplate(
                "<form class='contact-detail-form'>",
                "<figure>",
                    "<img src='{avatar}' />",
                    "<span class='contact-name'>{name}</span>",
                    "<span class='contact-sign'>{sign}</span>",
                "</figure>",
                "<fieldset>",
                    "<legend>电话</legend>",
                    "<p class='contact-phone contact-cell'><span class='contact-cell-title'>手机</span><span class='contact-cell-content'>{cellphone}</span></p>",
                "</fieldset>",
                "<fieldset>",
                    "<legend>铃声</legend>",
                    "<p class='contact-text contact-ring'>{ring}</p>",                
                "</fieldset>",
                "<fieldset>",
                    "<legend>电子邮件</legend>",
                    "<p class='contact-cell contact-mail'><span class='contact-cell-title'>阿里邮箱</span><span class='contact-cell-content'>{email}</span></p>",
                "</fieldset>",
                "<fieldset>",
                    "<legend>即时聊天</legend>",
                    "<p class='contact-iaccount-wangwang contct-cell><span class='contact-cell-title'>阿里旺旺</span><span class='contact-cell-content'>{wangwang}</span></p>",
                    "<p class='contact-iaccount-msn contct-cell><span class='contact-cell-title'>MSN</span><span class='contact-cell-content'>{msn}</span></p>",
                "</fieldset>",
                 "<fieldset>",
                        "<legend>社交网络</legend>",
                        "<p class='contact-social-renren contct-cell><span class='contact-cell-title'>人人网</span><span class='contact-cell-content'>{renren}</span></p>",
                "</fieldset>",
                "<fieldset>",
                    "<legend>地址</legend>",
                    "<p class='contact-cell contact-address'><span class='contact-cell-title'>家庭地址</span><span class='contact-cell-content'>{address}</span></p>",
                "</fieldset>",
                "<fieldset>",
                    "<legend>日期</legend>",
                    "<p class='contact-text contact-birth'>{[this.formatBirthday(values.birth)]}</p>",
                "</fieldset>",                    
                "</form>",
            {
                compiled: true,
                formatBirthday: function(date) {
                    return Ext.util.Format.date(date, "Y-m-d");
                }
            }),
            itemId: "detailCard",
            styleHtmlContent: true,
            html: "",
            listeners : {
                activate : function() {
                    if (this.scroller) {
                        this.scroller.scrollTo({x:0, y:0});
                    }
                }
            }
        });
        
        
    }
});

Ext.reg("contactdetail", phone.views.ContactDetail);