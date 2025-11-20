Ext.define('AppYF.view.reports.ReportView', {
    extend: 'Ext.panel.Panel',
    xtype: 'report-view',

    requires: [
        'AppYF.view.reports.ReportViewController'
    ],

    controller: 'report-view-controller',

    title: 'Reports',
    layout: 'fit',
    containerName: 'report-view',


    tbar: [{
        text: 'Settings',
        iconCls: 'fa fa-cog',
        handler: 'loadCredentials'
    }, '->', {
        text: 'Reconnect',
        iconCls: 'fa fa-sync',
        handler: 'reconnect'
    }, {
        text: 'Refresh',
        iconCls: 'fa fa-sync',
        handler: 'reloadView'
    }],

    items: [{
        xtype: 'dataview',
        reference: 'report-view',
        scrollable : true,

        listeners: {
            itemclick: 'openWindowFromList',
            store: {}
        },

        itemSelector: 'div.dataview-multisort-item',
    }],

    

    initComponent: function () {
        let ctrl = this.getController();
        let dv = this.items[0];

        dv.tpl = [
            '<tpl for=".">',
            '<div class="dataview-multisort-item" style="display: inline-block; overflow: hidden; vertical-align: middle; margin: 8px; border-radius: 8px; position: relative; width: 140px; height: 180px; border: 1px solid #ccc; background-color: #eee; ">',
                '<div style="position: absolute; top: 0px; left: 0px; width: 140px; height: 120px; background-color: #fff;">{[this.renderImg(values)]}</div>',
                '<div style="position: absolute; bottom: 0px; line-height: 12px; font-size: 10px; text-align: center; width: 140px; max-height: 60px; padding: 8px; box-sizing: border-box;">{name}</div>',
            '</div>',
            '</tpl>',
            ctrl,
            {
                renderImg: function (values) {
                    let me=this;
                    return ctrl.renderImage(values, "width: 140px; height: 120px;")
                }
            },
        ];

        this.callParent();
    }


    

    

});