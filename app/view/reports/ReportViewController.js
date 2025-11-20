Ext.define('AppYF.view.reports.ReportViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.report-view-controller',

    requires: [
        'AppYF.util.localStorage',
        'AppYF.util.YFConnection',
    ],

    yfCredentials: null,
    yfConn: null,

    /**
     * Method that will use saved credentials to connect to yellowfin
     * Since this method will be used only on the report list views, it will set the view data store
     * automatically by calling the yellowfin class loadReports method
     */
    connectToYellowFin: function (data) {
        let me=this;
        let viewMain = this.getView();
        let view = (viewMain.containerName!=='') ? this.getReferences()[viewMain.containerName] : viewMain;
        me.yfCredentials=data;

        me.yfConn = Ext.create('AppYF.util.YFConnection', {
            userName: data.username,
            password: data.password,
            clientOrg: data.clientOrg,
            refreshToken: data.refreshToken,
            accessToken: data.accessToken,
            debug: true
        });

        view.setStore(me.yfConn.loadReports(null, function () {
        }));

    },

    /**
     * Method called when the "Reconnect" button is pressed
     * Will generate new tokens
     */
    reconnect: function () {
        let me=this;
        let view=this.getView();

        me.yfConn.startConnection(function (success,data) {
            if (success) {
                // save tokens
                    let cred=Ext.create('AppYF.util.localStorage', {
                        name: 'yf-credentials'
                    });
                    cred.set({
                        refreshToken: data.refreshToken,
                        accessToken: data.accessToken
                    });
                
                if (view.containerName===''){
                    me.reloadGrid();
                } else {
                    me.reloadView();
                }
            } else {
                Ext.toast({
                    html: 'Wrong Credentials',
                    title: 'Could not generate key',
                    width: 200,
                    align: 'tr'
                });
            }
        });
    },



    /**
     * Calls the load report method again, loading the store with new data
     * Used on the data view
     */
    reloadView: function () {
        let me=this;
        let view=me.getReferences()['report-view'];

        view.mask('Retreiving Reports');
        view.setStore(me.yfConn.loadReports(view.store, function (success,store,response) {
            view.unmask();
        }));
    },

    /**
     * Calls the load report method again, loading the store with new data
     * Used on the grid view
     */
    reloadGrid: function () {
        let me=this;
        let view=me.getView();

        view.mask('Retreiving Reports');
        view.setStore(me.yfConn.loadReports(view.store, function (success,store,response) {
            view.unmask();
        }));
    },

    /**
     * Called by the grid renderer, this method calls the render image method to create the image
     * @param {*} value 
     * @param {*} cell 
     * @param {*} row 
     * @returns 
     */
    renderThumbnail: function (value, cell, row) {
        return this.renderImage(row.data);
    },

    /**
     * Called by the data view, or the renderThumbnail method
     * @param {*} image 
     * @param {*} style 
     * @returns 
     */
    renderImage: function (image, style="") {
        let me=this;
        let tempId = Ext.id();
        let htmlImage = "<div id="+tempId+"></div>";
        
        try {
            me.yfConn.loadImage(image._embedded.thumbnail._links.self.href,style).then(function (content) {
                let obj=document.getElementById(tempId);
                obj.appendChild(content);
            });
        } catch (any) {
            htmlImage = "<div id="+tempId+"></div>";
        }
        return htmlImage;
    },

    /**
     * Opens a window when the action button on the data view is clicked
     * @param {*} view 
     * @param {*} record 
     */
    openWindowFromList: function(view, record) {
        this.openWindow(record);
    },

    /**
     * Opens a window when the action button on the grid is clicked
     * @param {*} grid 
     * @param {*} rowIndex 
     * @param {*} colIndex 
     */
    openWindowFromGrid: function (grid, rowIndex,colIndex) {
        let rec = grid.getStore().getAt(rowIndex);
        this.openWindow(rec);
    },

    /**
     * Called by the grid or data view methods, opens the actual window with the report
     * @param {*} rec 
     */
    openWindow: function(rec) {
        let me = this; 
        
        let wnd = Ext.create('AppYF.view.reports.ReportWindow', {
            title: `Report: ${rec.get('name')}`,
            yfConn: me.yfConn,
            yfImageId: rec.get('reportPublishUUID')
        });
        wnd.show();
    },

    /**
     * Opens the Credentials panel. Used to set new user/password combination
     */
    loadCredentials: function () {
        let view=this.getView();
        let tabPanel = view.up('app-main');
        tabPanel.setActiveTab('settings'); 
    },
    

    /**
     * Init method,
     * 1) Reads from the local storage object
     * 2) Connects to yellowfin by using saved data
     * 
     */
    init: function () {
        this.savedData=Ext.create('AppYF.util.localStorage', {
            name: 'yf-credentials'
        });

        let data = this.savedData.read();
        if (data!==undefined && data!==null) {
            this.connectToYellowFin(data);
        } else {
            Ext.toast({
                title: 'Invalid Connection',
                html: 'Setup your credentials under Settings to make the Report list work',
                width: 200,
                align: 'tr'
            });
        }
    }
});