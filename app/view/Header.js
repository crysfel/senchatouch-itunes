/**
 * @class Itunes.view.Header
 * @extends Ext.Container
 * The application header
 */
Ext.define('Itunes.view.Header', {
    extend  : 'Ext.Container',
    xtype   : 'header', 
    requires: [
        'Itunes.view.Player'
    ],

    config: {
        height  : 120,
        layout  : 'hbox',
        items   : [{
            xtype   : 'container',
            flex    : 1,
            layout  : {
                type    : 'hbox',
                align   : 'center'
            },
            defaults: {
                xtype : 'button',
                width : 40,
                height: 40,
                margin: 5
            },
            items   : [{
                text  : '<<'
            },{
                text  : '>'
            },{
                text  : '>>'
            },{
                xtype       : 'sliderfield',
                width       : null,
                height      : null,
                flex        : 1,
                value       : 60,
                minValue    : 0,
                maxValue    : 100
            }]
        },{
            xtype : 'player',
            flex    : 1
        },{
            xtype   : 'container',
            flex    : 1,
            layout  : {
                type    : 'hbox',
                align   : 'center'
            },
            items   : [{
                xtype   : 'textfield',
                name    : 'query',
                flex    : 1,
                margin  : 20
            }]
        }]
    }
});