/**
 * This example shows how to use the grouping feature of the Grid.
 */
Ext.define('KitchenSink.view.grid.addons.TreeGroupedGrid', {
    extend: 'Ext.grid.TreeGrouped',
    xtype: 'tree-grouped-grid',

    requires: [
        'KitchenSink.view.grid.addons.TreeGroupedGridController',
        'Ext.grid.cell.Number',
        'Ext.grid.plugin.GroupingPanel',
        'Ext.grid.plugin.Summaries'
    ],

    controller: 'tree-grouped-grid',

    //<example>
    otherContent: [{
        type: 'Controller',
        path: 'modern/src/view/grid/addons/TreeGroupedController.js'
    }, {
        type: 'Model',
        path: 'modern/src/model/Sale.js'
    }, {
        type: 'Store',
        path: 'modern/src/store/Sales.js'
    }],
    //</example>

    title: 'Tree grouped grid',
    stateful: true,
    stateId: 'tree-grouped-grid',

    groupHeaderTpl: '{name} ({group.length})',
    summaryPosition: 'docked',

    plugins: {
        groupingpanel: true,
        gridsummaries: true
    },

    store: {
        type: 'sales',

        groupers: [{
            property: 'date',
            // you can provide a formatter that is used to create groups
            formatter: 'date("Y")'
        }, 'person', 'company']
    },

    columns: [
        {
            text: 'Company',
            dataIndex: 'company',
            groupable: true,
            flex: 1,
            filterType: 'string'
        },
        {
            text: 'Country',
            dataIndex: 'country',
            groupable: true,
            flex: 1,
            filterType: 'list'
        },
        {
            text: 'Person',
            dataIndex: 'person',
            groupable: true,
            summary: 'count'
        },
        {
            text: 'Date',
            dataIndex: 'date',
            xtype: 'datecolumn',
            filterType: 'date'
        },
        {
            text: 'Value',
            dataIndex: 'value',
            xtype: 'numbercolumn',
            align: 'right',
            filterType: 'number',

            summary: 'average'
        },
        {
            text: 'Quantity',
            dataIndex: 'quantity',
            xtype: 'numbercolumn',
            align: 'right',
            summary: 'sum'
        }
    ],

    titleBar: {
        shadow: false,
        items: [{
            xtype: 'button',
            align: 'right',
            text: 'Group sum',
            menu: {
                defaults: {
                    handler: 'setGroupSummaryPosition'
                },
                indented: false,
                items: [{
                    text: 'Top',
                    sum: 'top'
                }, {
                    text: 'Bottom',
                    sum: 'bottom'
                }, {
                    text: 'Hidden',
                    sum: 'hidden'
                }]
            }
        }, {
            xtype: 'button',
            align: 'right',
            text: 'Sum',
            menu: {
                defaults: {
                    handler: 'setSummaryPosition'
                },
                items: [{
                    text: 'Docked',
                    sum: 'docked'
                }, {
                    text: 'Top',
                    sum: 'top'
                }, {
                    text: 'Bottom',
                    sum: 'bottom'
                }, {
                    text: 'Hidden',
                    sum: 'hidden'
                }]
            }
        }, {
            xtype: 'button',
            align: 'right',
            text: 'Visibility',
            menu: {
                items: [{
                    text: 'Expand all',
                    handler: 'expandAll'
                }, {
                    text: 'Collapse all',
                    handler: 'collapseAll'
                }]
            }
        }]
    }

});
