Ext.define('KitchenSink.view.grid.FilterBarController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.grid-advanced-filterbar',

    init: function(view) {
        this.setupStoreListeners(view.getStore());
        this.callParent([view]);
    },

    setupStoreListeners: function(store) {
        Ext.destroy(this.storeListeners);
        this.storeListeners = store.on({
            filterchange: 'onFilterChanged',
            scope: this
        });
    },

    doReconfigure: function(menu) {
        var config = menu.grid,
            view = this.getView(),
            store, filters;

        view.reconfigure(config.store, config.columns);
        store = view.getStore();
        this.setupStoreListeners(store);
        filters = store.getFilters(false);
        this.getViewModel().set('filtered', filters && filters.length > 0);
    },

    concatNames: function(v, cellValues, rec) {
        return rec.get('forename') + ' ' + rec.get('surname');
    },

    renderMailto: function(v) {
        return '<a href="mailto:' + encodeURIComponent(v) + '">' +
            Ext.htmlEncode(v) + '</a>';
    },

    showFilterBar: function() {
        this.getView().showFilterBar();
    },

    hideFilterBar: function() {
        this.getView().hideFilterBar();
    },

    onFilterChanged: function(store, filters) {
        this.getViewModel().set('filtered', filters.length > 0);
    },

    clearFilters: function() {
        var filters = this.getView().getStore().getFilters(false);

        if (filters) {
            filters.removeAll();
        }
    }

});
