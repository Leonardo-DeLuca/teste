/**
 * This example shows how to create buttons.
 *
 * Buttons can contain text and an icon, and the icon can be aligned to any side of the
 * button using the `iconAlign` config.
 */
Ext.define('KitchenSink.view.button.BasicButtons', {
    extend: 'Ext.Container',
    xtype: 'basic-buttons',

    cls: 'button-view',
    layout: 'vbox',
    width: '${width}',

    viewModel: {
        data: {
            disabled: false
        }
    },

    //<example>
    profiles: {
        classic: {
            width: 420
        },
        neptune: {
            width: 475
        },
        triton: {
            width: 500
        },
        'neptune-touch': {
            width: 585
        },
        graphite: {
            width: 680
        },
        'classic-material': {
            width: 680
        }
    },
    //</example>

    items: [{
        xtype: 'checkbox',
        boxLabel: 'Disabled',
        margin: '0 0 0 10',
        bind: '{disabled}'
    }, {
        xtype: 'container',
        layout: {
            type: 'table',
            columns: 4,
            tdAttrs: { style: 'padding: 5px 10px;' }
        },
        defaults: {
            bind: {
                disabled: '{disabled}',
                tooltip: '{disabled ? "Buttons are disabled" : "Button tooltip"}'
            }
        },

        items: [{
            xtype: 'component',
            html: 'Text Only',
            bind: null
        }, {
            xtype: 'button',
            text: 'Small'
        }, {
            xtype: 'button',
            text: 'Medium',
            scale: 'medium'
        }, {
            xtype: 'button',
            text: 'Large',
            scale: 'large'
        }, {
            xtype: 'component',
            html: 'Icon Only',
            bind: null
        }, {
            iconCls: 'button-home-small',
            xtype: 'button'
        }, {
            xtype: 'button',
            iconCls: 'button-home-medium',
            scale: 'medium'
        }, {
            xtype: 'button',
            iconCls: 'button-home-large',
            scale: 'large'
        }, {
            xtype: 'component',
            html: 'Icon and Text (left)',
            bind: null
        }, {
            xtype: 'button',
            iconCls: 'button-home-small',
            text: 'Small'
        }, {
            xtype: 'button',
            iconCls: 'button-home-medium',
            text: 'Medium',
            scale: 'medium'
        }, {
            xtype: 'button',
            iconCls: 'button-home-large',
            text: 'Large',
            scale: 'large'
        }, {
            xtype: 'component',
            html: 'Icon and Text (top)',
            bind: null
        }, {
            xtype: 'button',
            iconCls: 'button-home-small',
            text: 'Small',
            iconAlign: 'top'
        }, {
            xtype: 'button',
            iconCls: 'button-home-medium',
            text: 'Medium',
            scale: 'medium',
            iconAlign: 'top'
        }, {
            xtype: 'button',
            iconCls: 'button-home-large',
            text: 'Large',
            scale: 'large',
            iconAlign: 'top'
        }, {
            xtype: 'component',
            html: 'Icon and Text (right)',
            bind: null
        }, {
            xtype: 'button',
            iconCls: 'button-home-small',
            text: 'Small',
            iconAlign: 'right'
        }, {
            xtype: 'button',
            iconCls: 'button-home-medium',
            text: 'Medium',
            scale: 'medium',
            iconAlign: 'right'
        }, {
            xtype: 'button',
            iconCls: 'button-home-large',
            text: 'Large',
            scale: 'large',
            iconAlign: 'right'
        }, {
            xtype: 'component',
            html: 'Icon and Text (bottom)',
            bind: null
        }, {
            xtype: 'button',
            iconCls: 'button-home-small',
            text: 'Small',
            iconAlign: 'bottom'
        }, {
            xtype: 'button',
            iconCls: 'button-home-medium',
            text: 'Medium',
            scale: 'medium',
            iconAlign: 'bottom'
        }, {
            xtype: 'button',
            iconCls: 'button-home-large',
            text: 'Large',
            scale: 'large',
            iconAlign: 'bottom'
        }]
    }]
});
