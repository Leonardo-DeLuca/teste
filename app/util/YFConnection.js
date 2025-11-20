/**
 * YFConnection
 * -------------
 * Class used to connect to the yellowfin server
 * This object can be:
 *   - Passed to a YFReport to obtain an embedded report 
 *   - Used to recover a report list
 * 
 * 
 * Steps:
 * - Create instance of this class
 * --- Make sure to pass the username and password
 * - Call the startConnection method
 * 
 * Once connected, you can:
 * - Get a list of reports
 * - Get thumbnails
 * - Get a specific report
 */
Ext.define('AppYF.util.YFConnection', {
    extend: 'Ext.Component',
    xtype: 'yf-connection',

    config: {
        userName: '',
        password: '',
        refreshToken: '',
        accessToken: '',
        serverUrl: window.location.origin,
        version: 'v3',
        nonce: null,
        debug: false
    },

    yfData: {
        refreshToken: '',
        accessToken: '',
        loginToken: {
            securityToken: '',
            tokenId: ''
        },
    },

    /**
     * PUBLIC METHODS
     */

        /**
         * StartConnection
         * --------------------------------------------------------------
         * CALL THIS METHOD FIRST TO OBTAIN A NON-EXPIRABLE TOKEN AND AN ACCESS TOKEN TOO
         * Will connect to the yellowfin server, and will return the response
         * @param {*} callback method returns if call was successful and response
         */
        startConnection: function (callback) {
            let me=this;
            me._yf_refreshToken(function (success,response) {
                if (me.config.debug) console.log(response);
                if (callback) {
                    callback(success,response);
                }
            });
        },

        /**
         * Connects to the yellowfin server, and load the reports, 
         * 
         * It will either generate a new store, or used the one passed as a parameter 
         * If set, it will call a callback method
         * @param {*} store 
         * @param {*} callback
         * @returns 
         */
        loadReports: function (store=null,callback=null) {
            let me=this;
            // Create the store for later use
                if (store===null || store===undefined) {
                    store = Ext.create('Ext.data.Store', {
                        autoLoad: false
                    });
                } 
            // Connect to yf, and when you get the data, put it in the store
                me._yf_loadReports(function (success,data) {
                    if (success) {
                        store.add(data.items);
                    }
                    if (callback) callback(success, store, data);

                });

            return store;
        },


        /**
         * Public call to load a thumbnail Image to be displayed with the report
         * @param {*} imageUrl  the actual url, or the yellowfin url that comes from the report list
         * @param {*} style     Indicates the css style to set the image design and style
         * @returns 
         */
        loadImage: function (imageUrl,style) {
            let me=this;

            return me._yf_loadImage(imageUrl,style);
        },

        /**
         * Called to load and show a YF report
         * It will generate a single-use login token, once retreived, it will load the report on screen
         * @param {*} extContainer 
         */
        loadReport: function (reportId,extContainer=null, style=null) {
            let me=this;
            let id=Ext.id();

            style = (style) ? style : "width: 200px; height: 200px;";
            
            // Empty Container
                if (extContainer) extContainer.setHtml(`<div id="${id}" style="${style}"></div>`);
            // Get Login tokens
                me._yf_loginToken(me.config.userName, function (success,loginToken) {
                    // Get Report
                        me._yf_loadReport(id,loginToken.securityToken,reportId);
                });
            
        },


    /** Private methods: Yellow fin Endpoint calls */

        /**
         * Called by the startConnection public method.
         * It Connects to Yellowfin server and recovers the Refresh and Access Token
         * These tokens are required to get data from the server
         * It requires both, an userName and a password to be setup when the class was instanced
         * 
         * @param {function} callback An optional callback method to be called after the tokens are retreived
         * 
         * @returns null
         */
        _yf_refreshToken: function (callback=null) {
            let me=this;
            let apiEndpoint = "refresh-tokens";
            let data={};

            console.log("%cInitializating YF Connection. And retreiving token", "color:#993;");

            Ext.Ajax.request({
                url: me.serverUrl+'/api/'+apiEndpoint,
                method: 'POST',
                headers: me._yf_getHeader(), // Get header generates all the parameters needed to connect to yellowfin
                jsonData: {
                    userName: me.config.userName,
                    password: me.config.password
                },
                success: function(response){
                    // Save Tokens
                    console.log("%cSuccessful initialization of YF Connection", "color:#993;");
                    let data = Ext.decode(response.responseText);
                    me.yfData.refreshToken = data.securityToken;
                    me.yfData.accessToken = data._embedded.accessToken.securityToken;
                    if (callback!==null) {
                        callback(true,me.yfData); // parse JSON
                    }
                },
                failure: function(response){
                    console.error('Request failed', response.status);
                    if (callback!==null) {
                        callback(false,response); // parse JSON
                    }
                }
            });
        },

        /**
         * Used internally to retreive the thumbnail Image of a report. 
         * Usually, used in conjunction with loadReports
         * @param {*} imageUrl 
         * @param {*} style     css style to apply to the thumbnail
         * @returns 
         */
        _yf_loadImage: function (imageUrl,style=null) {
            let me=this;

            style = (style) ? style : "width: 58px; height: 34px;" ;

            return new Ext.Promise(function (resolve, reject) {
                if (imageUrl.startsWith("/api/images/")) {
                    Ext.Ajax.request({
                        url: me.serverUrl+imageUrl,
                        method: 'GET',
                        headers: me._yf_getHeader(me.yfData.accessToken), // Get header generates all the parameters needed to connect to yellowfin
                        binary: true,
                        success: function(response){
                            let arrayBuffer = response.responseBytes || response.responseArrayBuffer || response.responseText;
                            let blob = new Blob([arrayBuffer], { type: 'image/png' }); // adjust MIME type if needed
                            let url = URL.createObjectURL(blob);
                            let img = document.createElement('img');
                            img.src = url;
                            img.style = style;
							resolve(img); /// TODO: CONTINUE HERE
                        },
                        failure: function(response){
                            console.error('Request failed', response.status);
                        }
                    });
                } else {
                    resolve("/" + imageUrl);
                }
            });
        },


        /**
         * Creates the header object required for Yellowfin calls
         * It will include:
         *  content-type
         *  authorization
         *  accept
         * 
         * 
         * @param {*} token The refresh token created on a previous startConnection call, if empty, if no token is passed, this will be treated as the first call, not passing a token to the backend
         * @returns 
         */
        _yf_getHeader: function (token=null) {
            let me=this;
            let ts = Date.now();
            let nonce = (me.config.nonce!==null ? me.config.nonce : Math.random().toString(36).slice(2));

            let header={
                "Content-Type": "application/json",
                "Authorization": (token) ? `YELLOWFIN ts=${ts}, nonce=${nonce}, token=${token}` : `YELLOWFIN ts=${ts}, nonce=${nonce}`,
                "Accept": `application/vnd.yellowfin.api-${me.config.version}+json`
            };

            return header;
        },



        /**
         * Loads the report into memory, it requires a login token
         * @param {*} extContainerId        The object that will contain the report
         * @param {*} loginToken            Previously generated single-use login token
         * @param {*} reportPublishUUID     The reports unique identifier
         */
        _yf_loadReport: function (extContainerId,loginToken,reportPublishUUID) {
            let me = this;
            let element = document.createElement('script');
            let container = document.getElementById(extContainerId);


            console.log("%cEmbed Chart", "color:#993;");
            
            Ext.Loader.loadScript({
                url: `${me.serverUrl}/JsAPI/${me.config.version}?token=${loginToken}`,
                onLoad: function() {
                    // Initialize chart once library is ready
                    console.log("%cChart API Loaded", "color:#993;");
                    //document.body.appendChild(script); // Add Script into Memory, and run it
                    
                    let options = {
                        reportId: reportPublishUUID,
                        element: container,
                        width: 590,
                        height: 450
                    };
                    yellowfin.init().then(() => {
                        yellowfin.showLoginPrompt=false;
                        yellowfin.loadReport(options).then(report => {
                            console.log("report = ", report);

                        });
                    });
                },
                onError: function() {
                },
            });

        },

        /**
         * Gets login token and login id
         * @param {*} userName      user that will load generate the login token, could be different than the one that created the original tokens
         * @param {*} callback
         * @returns 
         */
        _yf_loginToken: function(userName, callback) {
            let apiEndpoint = "login-tokens";
            let me = this;
            
            console.log('%c,Getting login token','color:#993;');

            Ext.Ajax.request({
                url: me.serverUrl+'/api/'+apiEndpoint,
                method: 'POST',
                headers: me._yf_getHeader(me.yfData.accessToken),
                jsonData: {
                    userName: me.config.userName
                },
                success: function(response){
                    // Save Tokens
                    console.log("%cSuccess retrieving YF token", "color:#993;");

                    let data = Ext.decode(response.responseText);
                    me.yfData.loginToken = {
                        securityToken: data.securityToken,
                        tokenId: data.tokenId
                    };

                    if (callback!==null) {
                        callback(true,me.yfData.loginToken); // parse JSON
                    }
                },
                failure: function(response){
                    console.error('Request failed', response.status);
                    if (callback!==null) {
                        callback(false,response); // parse JSON
                    }
                }
            });
        },


        /**
         * Will connect to Yellowfin and load the report list
         * Once done, it will return the data inside a callback method
         *      callback(success, response)
         * @param {*} callback 
         */
        _yf_loadReports: function (callback) {
            let me=this;
            let apiEndpoint = "reports";
            let data={};

            console.log("%cConnecting to reports API", "color:#993;");


            Ext.Ajax.request({
                url: me.serverUrl+'/api/'+apiEndpoint,
                method: 'GET',
                headers: me._yf_getHeader(me.yfData.accessToken),
                success: function(response){
                    // Save Tokens
                    console.log("%cSuccess retreived reports", "color:#993;");
                    let data = Ext.decode(response.responseText);
                    if (callback!==null) {
                        callback(true,data); // parse JSON
                    }
                },
                failure: function(response){
                    console.error('Request failed', response.status);
                    // Try and login again
                        let resp = Ext.decode(response.responseText);
                    if (callback!==null) {
                        callback(false,resp); // parse JSON
                    }
                }
            });
        },

    /**
     * Saves the params sent by config to the yfData, will be used in the startConnection method
     */
    _initParams: function () {
        if (this.config.refreshToken && this.config.accessToken) {
            this.yfData.refreshToken=this.config.refreshToken;
            this.yfData.accessToken=this.config.accessToken;
        }
    },

    /**
     * Used in Modern toolkit
     */
    initialize: function () {
        this._initParams();
        this.callParent();
    },

    /**
     * Used in Classic toolkit
     */
    initComponent: function () {
        this._initParams();
        this.callParent();
    }

});