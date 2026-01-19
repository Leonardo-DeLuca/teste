Ext.define('KitchenSink.view.BreadcrumbBar', {
    extend: 'Ext.Toolbar',
    xtype: 'breadcrumb',
    items: [{
        id: "treeNavId",
        xtype: 'tool',
        type: 'menu',
        margin: '3 3 3 3',
        tooltip: 'Switch to Tree View \u2325N'
    }],
    defaultFocus: ':focusable:last'
});
