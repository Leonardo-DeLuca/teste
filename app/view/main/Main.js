/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('AppYF.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'AppYF.view.main.MainController',
        'AppYF.view.main.MainModel',

        'AppYF.view.reports.ReportList',
        'AppYF.view.reports.ReportView',

        'AppYF.view.settings.User'
    ],

    controller: 'main',
    viewModel: 'main',

    ui: 'navigation',

    tabBarHeaderPosition: 1,
    titleRotation: 0,
    tabRotation: 0,

    header: {
        layout: {
            align: 'stretchmax'
        },
        title: {
            bind: {
                text: '{name}'
            },
            flex: 0
        },
        iconCls: 'fa-th-list'
    },

    tabBar: {
        flex: 1,
        layout: {
            align: 'stretch',
            overflowHandler: 'none'
        }
    },

    responsiveConfig: {
        tall: {
            headerPosition: 'top'
        },
        wide: {
            headerPosition: 'left'
        }
    },

    defaults: {
        bodyPadding: 0,
        layout: 'fit',
        tabConfig: {
            responsiveConfig: {
                wide: {
                    iconAlign: 'left',
                    textAlign: 'left'
                },
                tall: {
                    iconAlign: 'top',
                    textAlign: 'center',
                    width: 120
                }
            }
        }
    },

    items: [{
        title: 'Report List',
        iconCls: 'fa-tachometer-alt',
        // The following grid shares a store with the classic version's grid as well!
        items: [{
            xtype: 'report-list'
        }]
    }, {
        title: 'Report View',
        iconCls: 'fa-dungeon',
        items: [{
            xtype: 'report-view'
        }]
    }, {
        title: 'Settings',
        iconCls: 'fa-user-circle',
        itemId: 'settings',
        items: [{
            xtype: 'user-setup'
        }]
    }]
});
