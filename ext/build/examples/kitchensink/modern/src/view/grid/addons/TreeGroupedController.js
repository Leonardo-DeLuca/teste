Ext.define('KitchenSink.view.grid.addons.TreeGroupedGridController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.tree-grouped-grid',

    expandAll: function() {
        this.getView().expandAll();
    },

    collapseAll: function() {
        this.getView().collapseAll();
    },

    setGroupSummaryPosition: function(btn) {
        this.getView().setGroupSummaryPosition(btn.sum);
    },

    setSummaryPosition: function(btn) {
        this.getView().setSummaryPosition(btn.sum);
    }
});
