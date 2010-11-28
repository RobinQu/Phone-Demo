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
         name: 'firstName',
         type: 'string'
     },
     {
         name: 'lastName',
         type: 'string'
     },
     {
         name: 'mobileNum',
         type: 'string'
     },
     {
         name: 'telNum',
         type: 'string'
     },
     {
         name: 'eMail',
         type: 'string'
     }]
     // fields
 });