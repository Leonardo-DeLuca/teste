/**
 * This example demonstrates the use of split buttons. A split button is similar to a menu
 * button, but its arrow can fire an event separately from the default click event of the
 * button.  This event would typically be used to display a dropdown menu, but can also be
 * used to attach a custom action.
 */
Ext.define('KitchenSink.view.button.SplitButtons', {
    extend: 'Ext.Container',
    xtype: 'split-buttons',

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
            width: 470
        },
        neptune: {
            width: 590
        },
        triton: {
            width: 620
        },
        'neptune-touch': {
            width: 675
        },
        graphite: {
            width: 830
        },
        'classic-material': {
            width: 830
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
            },
            menu: [{
                text: 'Menu Item 1'
            }, {
                text: 'Menu Item 2'
            }, {
                text: 'Menu Item 3'
            }]
        },

        items: [{
            xtype: 'component',
            html: 'Text Only',
            bind: null
        }, {
            xtype: 'splitbutton',
            text: 'Small'
        }, {
            xtype: 'splitbutton',
            text: 'Medium',
            scale: 'medium'
        }, {
            xtype: 'splitbutton',
            text: 'Large',
            scale: 'large'
        }, {
            xtype: 'component',
            html: 'Icon Only (toggle)',
            bind: null
        }, {
            iconCls: 'button-home-small',
            xtype: 'splitbutton',
            enableToggle: true
        }, {
            xtype: 'splitbutton',
            iconCls: 'button-home-medium',
            scale: 'medium',
            enableToggle: true
        }, {
            xtype: 'splitbutton',
            iconCls: 'button-home-large',
            scale: 'large',
            enableToggle: true
        }, {
            xtype: 'component',
            html: 'Icon and Text (left)',
            bind: null
        }, {
            xtype: 'splitbutton',
            iconCls: 'button-home-small',
            text: 'Small'
        }, {
            xtype: 'splitbutton',
            iconCls: 'button-home-medium',
            text: 'Medium',
            scale: 'medium'
        }, {
            xtype: 'splitbutton',
            iconCls: 'button-home-large',
            text: 'Large',
            scale: 'large'
        }, {
            xtype: 'component',
            html: 'Icon and Text (top)',
            bind: null
        }, {
            xtype: 'splitbutton',
            iconCls: 'button-home-small',
            text: 'Small',
            iconAlign: 'top'
        }, {
            xtype: 'splitbutton',
            iconCls: 'button-home-medium',
            text: 'Medium',
            scale: 'medium',
            iconAlign: 'top'
        }, {
            xtype: 'splitbutton',
            iconCls: 'button-home-large',
            text: 'Large',
            scale: 'large',
            iconAlign: 'top'
        }, {
            xtype: 'component',
            html: 'Icon and Text (right)',
            bind: null
        }, {
            xtype: 'splitbutton',
            iconCls: 'button-home-small',
            text: 'Small',
            iconAlign: 'right'
        }, {
            xtype: 'splitbutton',
            iconCls: 'button-home-medium',
            text: 'Medium',
            scale: 'medium',
            iconAlign: 'right'
        }, {
            xtype: 'splitbutton',
            iconCls: 'button-home-large',
            text: 'Large',
            scale: 'large',
            iconAlign: 'right'
        }, {
            xtype: 'component',
            html: 'Icon and Text (bottom)',
            bind: null
        }, {
            xtype: 'splitbutton',
            iconCls: 'button-home-small',
            text: 'Small',
            iconAlign: 'bottom'
        }, {
            xtype: 'splitbutton',
            iconCls: 'button-home-medium',
            text: 'Medium',
            scale: 'medium',
            iconAlign: 'bottom'
        }, {
            xtype: 'splitbutton',
            iconCls: 'button-home-large',
            text: 'Large',
            scale: 'large',
            iconAlign: 'bottom'
        }]
    }]
});
