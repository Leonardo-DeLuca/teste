Ext.define('KitchenSink.view.grid.addons.FilterbarController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.grid-filterbar',

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
            grid = this.getView(),
            store, filters;

        // we set the store first because columns may bring additional filters on the store
        grid.setStore(config.store);
        grid.setColumns(config.columns);

        store = grid.getStore();

        this.setupStoreListeners(store);
        filters = store.getFilters(false);
        this.getViewModel().set('filtered', filters && filters.length > 0);
    },

    concatNames: function(v, rec, cell) {
        return rec.get('forename') + ' ' + rec.get('surname');
    },

    renderMailto: function(v) {
        return '<a href="mailto:' + v + '">' +
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
