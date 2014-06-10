/**
 * @class Itunes.view.Main
 * @extends Ext.Container
 * The main container for the entire application
 */

Ext.define('Itunes.view.Main', {
    extend: 'Ext.Container',
    xtype : 'main',
    requires : [
        'Itunes.view.Header',
        'Itunes.view.Filters'
    ],
    config : {
        layout  : 'vbox',
        items   : [{
            xtype   : 'header'
        },{
            xtype   : 'filters'
        },{
            //we are going to move this container to a class
            xtype   : 'component',
            flex    : 1,
            style   : 'background:#ecf0f1', //we will remove this later
            html    : 'The Results'
        }]
    }
});