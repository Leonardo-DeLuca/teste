Ext.define('AppYF.view.reports.ReportWindow', {
    extend: 'Ext.window.Window',
    xtype: 'report-window',

    width: 600,
    height: 500,

    title: 'Yellowfin Report',
    modal: true,

    layout:'fit',

    config: {
        yfConn: null,
        yfImageId: null,
    },

    items: [{
        xtype: 'panel',
        html: 'hello',
        itemId: 'reportContainer'
    }],

    loadReport: function () {
        let me=this;
        debugger;
        if (me.yfConn!==null && me.yfImageId!==null) {
            me.yfConn.loadReport(me.yfImageId,me.getComponent('reportContainer'));
        }
    },

    initComponent: function () {
        let me=this;

        me.callParent();
        me.loadReport();
    }

    
});