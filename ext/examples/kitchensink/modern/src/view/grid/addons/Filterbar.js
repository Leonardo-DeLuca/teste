Ext.define('KitchenSink.view.grid.addons.Filterbar', {
    extend: 'Ext.grid.Grid',
    xtype: 'grid-filterbar',
    controller: 'grid-filterbar',

    title: 'Grid Filterbar',

    requires: [
        'Ext.grid.plugin.filterbar.FilterBar'
    ],

    //<example>
    otherContent: [{
        type: 'Controller',
        path: 'modern/src/view/grid/addons/FilterbarController.js'
    }, {
        type: 'Model',
        path: 'modern/src/model/Sale.js'
    }],
    emptyText: 'No Matching Records',
    //</example>

    // rowLines: true,

    plugins: {
        gridfilterbar: true
    },

    store: {
        type: 'sales',

        filters: [{
            property: 'country',
            operator: '==',
            value: 'Belgium'
        }]
    },

    rowNumbers: true,

    columns: [
        {
            text: 'Company',
            dataIndex: 'company',
            flex: 1,
            groupable: true,
            filterType: 'string'
        },
        {
            text: 'Country',
            dataIndex: 'country',
            flex: 1,
            groupable: true,
            filterType: 'list'
        },
        {
            text: 'Person',
            dataIndex: 'person',
            groupable: true
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
            editor: 'numberfield',
            align: 'right',
            filterType: 'number'
        },
        {
            text: 'Quantity',
            dataIndex: 'quantity',
            xtype: 'numbercolumn',
            editor: 'numberfield',
            align: 'right'
        }
    ],

    titleBar: {
        shadow: false,
        items: [{
            xtype: 'button',
            align: 'right',
            text: 'Visibility',
            menu: [{
                text: 'Show',
                handler: 'showFilterBar'
            }, {
                text: 'Hide',
                handler: 'hideFilterBar'
            }]
        }, {
            xtype: 'button',
            align: 'right',
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
                        { text: 'Company', dataIndex: 'company', editor: 'textfield', width: 150, groupable: true, filterType: 'string' },
                        { text: 'Country', dataIndex: 'country', editor: 'textfield', width: 150, groupable: true, filterType: 'list' },
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
                        model: 'Employee',
                        autoLoad: true,
                        pageSize: 0,
                        proxy: {
                            type: 'ajax',
                            url: '/KitchenSink/BigData'
                        }
                    },
                    columns: [
                        { text: 'Name', dataIndex: 'fullName', renderer: 'concatNames', groupable: true, width: 200, filterType: { type: 'string', value: 'danni' } },
                        { text: 'Date of birth', dataIndex: 'dob', xtype: 'datecolumn', filterType: 'date' },
                        { text: 'Join date', dataIndex: 'joinDate', xtype: 'datecolumn', filterType: 'date' },
                        { text: 'Notice<br>period', dataIndex: 'noticePeriod', groupable: true, filterType: 'list' },
                        { text: 'Email address', dataIndex: 'email', renderer: 'renderMailto', cell: { encodeHtml: false }, filterType: 'string' },
                        { text: 'Department', dataIndex: 'department', filterType: 'list' },
                        { text: 'Salary', dataIndex: 'salary', xtype: 'numbercolumn', align: 'right', filterType: { type: 'number', operator: '>=' } }
                    ]
                }
            }]
        }, {
            xtype: 'button',
            align: 'right',
            text: 'Clear filters',
            handler: 'clearFilters',
            bind: {
                disabled: '{!filtered}'
            }
        }]
    }
});
