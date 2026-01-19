/**
 * This example shows how to use the FilterBar plugin of the Grid.
 */
Ext.define('KitchenSink.view.grid.FilterBar', {
    extend: 'Ext.grid.Panel',
    xtype: 'grid-advanced-filterbar',

    requires: [
        'KitchenSink.view.grid.FilterBarController',
        'Ext.grid.plugin.filterbar.FilterBar'
    ],

    controller: 'grid-advanced-filterbar',

    //<example>
    otherContent: [{
        type: 'Controller',
        path: 'classic/samples/view/grid/FilterBarController.js'
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

    title: 'FilterBar example',
    width: '${width}',
    height: '${height}',

    collapsible: true,
    collapseFirst: false,
    frame: true,
    minHeight: 200,

    columns: [{
        dataIndex: 'person',
        text: 'Person',
        filterType: {
            type: 'string',
            value: 'Robert',
            operator: '='
        }
    }, {
        dataIndex: 'country',
        text: 'Country',
        filterType: 'inlist',
        flex: 1
    }, {
        dataIndex: 'company',
        text: 'Company',
        filterType: 'list',
        flex: 1
    }, {
        text: 'Date',
        dataIndex: 'date',
        xtype: 'datecolumn',
        filterType: {
            type: 'date'
        }
    }, {
        xtype: 'numbercolumn',
        dataIndex: 'quantity',
        text: 'Quantity',
        filterType: 'number'
    }, {
        xtype: 'numbercolumn',
        dataIndex: 'value',
        text: 'Value',
        filterType: 'number'
    }],

    plugins: {
        gridfilterbar: true
    },

    viewModel: {
        data: {
            filtered: false
        }
    },

    store: {
        type: 'sales',
        filters: [{
            property: 'country',
            operator: 'in',
            value: ['Australia', 'Belgium']
        }]
    },

    header: {
        itemPosition: 1, // after title before collapse tool
        items: [{
            ui: 'default-toolbar',
            xtype: 'button',
            cls: 'dock-tab-btn',
            text: 'Filter bar visibility',
            menu: [{
                text: 'Show',
                handler: 'showFilterBar'
            }, {
                text: 'Hide',
                handler: 'hideFilterBar'
            }]
        }, {
            ui: 'default-toolbar',
            xtype: 'button',
            cls: 'dock-tab-btn',
            text: 'Reconfigure',
            menu: [{
                text: 'Sales data',
                handler: 'doReconfigure',
                grid: {
                    store: {
                        type: 'sales',

                        filters: [{
                            property: 'country',
                            operator: '==',
                            value: 'Belgium'
                        }]
                    },
                    columns: [
                        { text: 'Company', dataIndex: 'company', editor: 'textfield', groupable: true, filterType: 'string' },
                        { text: 'Country', dataIndex: 'country', editor: 'textfield', groupable: true, filterType: 'list' },
                        { text: 'Person', dataIndex: 'person', editor: 'textfield', groupable: true },
                        { text: 'Date', dataIndex: 'date', xtype: 'datecolumn', format: 'd.m.Y', filterType: 'date' },
                        { text: 'Value', dataIndex: 'value', xtype: 'numbercolumn', editor: 'numberfield', align: 'right', filterType: 'number' },
                        { text: 'Quantity', dataIndex: 'quantity', xtype: 'numbercolumn', editor: 'numberfield', align: 'right' }
                    ]
                }
            }, {
                text: 'Employees data',
                handler: 'doReconfigure',
                grid: {
                    store: {
                        type: 'big-data'
                    },
                    columns: [
                        { text: 'Name', dataIndex: 'name', renderer: 'concatNames', groupable: true, width: 200, filterType: { type: 'string', value: 'vicky' } },
                        { text: 'Date of birth', dataIndex: 'dob', xtype: 'datecolumn', filterType: 'date' },
                        { text: 'Join date', dataIndex: 'joinDate', xtype: 'datecolumn', filterType: 'date' },
                        { text: 'Notice<br>period', dataIndex: 'noticePeriod', groupable: true, filterType: 'list' },
                        { text: 'Email address', dataIndex: 'email', renderer: 'renderMailto', filterType: 'string' },
                        { text: 'Department', dataIndex: 'department', filterType: 'list' },
                        { text: 'Salary', dataIndex: 'salary', xtype: 'numbercolumn', align: 'right', filterType: { type: 'number', operator: '>=' } }
                    ]
                }
            }]
        }, {
            ui: 'default-toolbar',
            xtype: 'button',
            cls: 'dock-tab-btn',
            text: 'Clear filters',
            handler: 'clearFilters',
            bind: {
                disabled: '{!filtered}'
            }
        }]
    }

});
