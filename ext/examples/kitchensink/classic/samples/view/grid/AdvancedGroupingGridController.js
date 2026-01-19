Ext.define('KitchenSink.view.grid.AdvancedGroupingGridController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.advanced-grouping-grid',

    expandAll: function() {
        this.getView().expandAll();
    },

    collapseAll: function() {
        this.getView().collapseAll();
    },

    changeGroupSummaryPosition: function(item) {
        this.getView().setGroupSummaryPosition(item.text);
    },

    changeSummaryPosition: function(item) {
        this.getView().setSummaryPosition(item.text);
    }

});
