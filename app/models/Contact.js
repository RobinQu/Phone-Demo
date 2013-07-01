/*global Ext */

/**
 * Contact Model Class
 * @author RobinQu
 * @version 0.1
 * @extends Ext.data.Model
 */

 Ext.regModel('Contact', {
     fields: [
     {
         name: 'name',
         type: 'string'
     },
     {
       name: "sign",
       type: "string"
     },
     {
         name: 'avatar',
         type: 'string',
         defaultValue: "resources/image/avatar.png"
     },
     {
         name: 'cellphone',
         type: 'string'
     },
     {
         name: 'ring',
         type: 'string'
     },
     {
       name: 'birth',
       type: 'date',
       dateFormat: 'Y-m-d'
     },
     {
       name: 'address',
       type: "string"
     },
        "iaccount"
     ]
     // fields
 });