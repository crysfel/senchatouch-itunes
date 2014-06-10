/**
 * @class Itunes.view.Filters
 * @extends Ext.Container
 *
 * The filters bar
 */
Ext.define('Itunes.view.Filters', {
    extend: 'Ext.Container',
    xtype : 'filters',

    config: {
        layout: {
            type    : 'hbox',
            pack    : 'center'
        },
        defaults    : {
            xtype   :'button',
            margin  : 3
        },
        items : [
            {text:'Music',itemId:'music'},
            {text:'Movies',itemId:'movies'},
            {text:'Short Films',itemId:'films'},
            {text:'Shows',itemId:'shows'},
            {text:'Books',itemId:'books'},
            {text:'Software',itemId:'software'}
        ]
    }
});