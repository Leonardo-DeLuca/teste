Ext.define('AppYF.util.localStorage', {
    extend: 'Ext.Component',
    xtype: 'yf-localstorage',

    config: {
        name: Ext.id()
    },
    
    read: function () {
        let data = localStorage.getItem(this.name);

        if (data!==null && data!==undefined) {
            data = JSON.parse(atob(data));
        } else {
            data = {};
        }
        return data;
    },

    /**
     * Receives parameters in an struct/object
     * @param {*} params 
     */
    set: function (params) {
        let me=this;
        let data=me.read();

        // put params in data
            Ext.apply(data,params);

        localStorage.setItem(this.name, btoa(JSON.stringify(data)));
    },

});