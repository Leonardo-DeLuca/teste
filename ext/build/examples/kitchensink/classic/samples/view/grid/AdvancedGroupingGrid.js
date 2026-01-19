/**
 * This example shows how to use the advanced grouping feature of the Grid.
 */
Ext.define('KitchenSink.view.grid.AdvancedGroupingGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'advanced-grouping-grid',

    requires: [
        'KitchenSink.view.grid.AdvancedGroupingGridController',
        'Ext.grid.plugin.GroupingPanel',
        'Ext.grid.plugin.Summaries'
    ],

    controller: 'advanced-grouping-grid',

    //<example>
    otherContent: [{
        type: 'Controller',
        path: 'classic/samples/view/grid/AdvancedGroupingGridController.js'
    }, {
        type: 'Model',
        path: 'classic/samples/model/pivot/Sale.js'
    }, {
        type: 'Store',
        path: 'classic/samples/store/pivot/Sales.js'
    }],
    profiles: {
        classic: {
            width: 600,
            height: 350,
            columnWidth: 100,
            menuWidth: 100,
            columnLines: true
        },
        neptune: {
            width: 750,
            height: 350,
            columnWidth: 100,
            menuWidth: 100,
            columnLines: true
        },
        graphite: {
            width: 950,
            height: 600,
            columnWidth: 120,
            menuWidth: 120,
            columnLines: true
        },
        'classic-material': {
            width: 950,
            height: 600,
            columnWidth: 120,
            menuWidth: 150,
            columnLines: false
        }
    },
    //</example>

    title: 'Sales',
    width: '${width}',
    height: '${height}',

    collapsible: true,
    collapseFirst: false,
    frame: true,
    minHeight: 200,

    bind: '{sales}',

    columns: [{
        dataIndex: 'person',
        text: 'Person',
        groupable: true
    }, {
        dataIndex: 'country',
        text: 'Country',
        groupable: true,
        flex: 1
    }, {
        dataIndex: 'company',
        text: 'Company',
        groupable: true,
        flex: 1
    }, {
        text: 'Date',
        dataIndex: 'date',
        xtype: 'datecolumn'
    }, {
        xtype: 'numbercolumn',
        dataIndex: 'value',
        text: 'Value',
        summaryFormatter: 'number("0,000.00")'
    }],

    features: [{
        ftype: 'advancedgroupingsummary',
        startCollapsed: true
    }],

    enableLocking: true,

    plugins: {
        groupingpanel: true,
        gridsummaries: true
    },

    viewModel: {
        data: {
            groupBy: null
        },
        stores: {
            sales: {
                type: 'sales',
                groupers: [
                    'country', 'company'
                ]
            }
        }
    },

    header: {
        itemPosition: 1, // after title before collapse tool
        items: [{
            ui: 'default-toolbar',
            xtype: 'button',
            cls: 'dock-tab-btn',
            text: 'Group summary position',
            menu: [{
                text: 'top',
                handler: 'changeGroupSummaryPosition'
            }, {
                text: 'bottom',
                handler: 'changeGroupSummaryPosition'
            }, {
                text: 'hidden',
                handler: 'changeGroupSummaryPosition'
            }]
        }, {
            ui: 'default-toolbar',
            xtype: 'button',
            cls: 'dock-tab-btn',
            text: 'Summary position',
            menu: [{
                text: 'docked',
                handler: 'changeSummaryPosition'
            }, {
                text: 'top',
                handler: 'changeSummaryPosition'
            }, {
                text: 'bottom',
                handler: 'changeSummaryPosition'
            }, {
                text: 'hidden',
                handler: 'changeSummaryPosition'
            }]
        }, {
            ui: 'default-toolbar',
            xtype: 'button',
            cls: 'dock-tab-btn',
            text: 'Visibility',
            menu: [{
                text: 'Expand all',
                handler: 'expandAll'
            }, {
                text: 'Collapse all',
                handler: 'collapseAll'
            }]
        }]
    }

});
