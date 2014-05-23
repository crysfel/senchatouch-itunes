/**
 * @class Itunes.view.Header
 * @extends Ext.Container
 * The application header
 */
Ext.define('Itunes.view.Header', {
    extend  : 'Ext.Container',
    xtype   : 'header', 
    requires: [
        
    ],

    config: {
        height  : 120,
        layout  : 'hbox',
        items   : [{
            xtype   : 'container',
            flex    : 1,
            style   : 'background:#e67e22', //we will remove this later
            html    : 'Controls'
        },{
            xtype : 'container',
            flex    : 1,
            style   : 'background:#d35400', //we will remove this later
            html    : 'Player'
        },{
            xtype : 'container',
            flex    : 1,
            style   : 'background:#e74c3c', //we will remove this later
            html    : 'Search'
        }]
    }
});