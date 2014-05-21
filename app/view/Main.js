/**
 * @class Itunes.view.Main
 * @extends Ext.Container
 * The main container for the entire application
 */

Ext.define('Itunes.view.Main', {
    extend: 'Ext.Container',
    xtype : 'main',
    requires : [
        
    ],
    config : {
        layout  : 'vbox',
        items   : [{
            //we are going to move this container to a class
            xtype   : 'container',
            height  : 120,
            style   : 'background:#bdc3c7', //we will remove this later
            html    : 'The Header'
        },{
            //we are going to move this container to a class
            xtype   : 'component',
            flex    : 1,
            style   : 'background:#ecf0f1', //we will remove this later
            html    : 'The Results'
        }]
    }
});