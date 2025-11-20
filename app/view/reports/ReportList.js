/**
 * This view is an example list of people.
 */
Ext.define('AppYF.view.reports.ReportList', {
    extend: 'Ext.grid.Panel',
    xtype: 'report-list',

    requires: [
        'AppYF.view.reports.ReportViewController'
    ],

    controller: 'report-view-controller',

    title: 'Reports',
    emptyText: 'Must use valid Yellowfin Credentials.',
    containerName: '',

    tbar: [{
        text: 'Settings',
        iconCls: 'fa fa-cog',
        handler: 'loadCredentials'
    }, '->', {
        text: 'Reconnect',
        iconCls: 'fa fa-plug',
        handler: 'reconnect'
    }, {
        text: 'Refresh',
        iconCls: 'fa fa-sync',
        handler: 'reloadGrid'
    }],

    columns: [
        { text: 'Report Id',  dataIndex: 'reportId', width: 120 },
        { text: 'Report UUID', dataIndex: 'reportPublishUUID', width: 220 },
        { text: 'Category', dataIndex: 'categoryName', width: 120 },
        { text: 'Name', dataIndex: 'name', flex: 1 },
        { text: 'Description', dataIndex: 'description', flex: 2 },
        { 
            text: 'Thumbnail', 
            dataIndex: 'thumbnail', 
            width: 120,
            renderer: 'renderThumbnail'
        },
        { text: 'Creator', dataIndex: 'creatorName', width: 120},
        {
            xtype: 'actioncolumn',
            text: 'Actions',
            width: 100,
            items: [{
                iconCls: 'x-fa fa-chart-bar',  // font-awesome icon
                tooltip: 'View Report',
                handler: 'openWindowFromGrid'
            }]

        }
    ],



});
