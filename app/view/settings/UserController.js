Ext.define('AppYF.view.settings.UserController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.user-controller',

    requires: [
        'AppYF.util.localStorage',
        'AppYF.util.YFConnection',
    ],

    savedData: null,

    /**
     * Performst to tasks:
     * 1) Saves the credentials inside the localStorage 
     * 2) Connects to yellowfin to validate credentials and retrieve tokens
     * This is not safe, and it is used just for this example.
     * Credentials should come from the backend or stored in a better way
     * @param {*} btn 
     */
    onSave: function (btn) {
        let me=this;
        let form=this.getReferences().form;
        let values=form.getForm().getValues();

        if (form.isValid()) {
            me.savedData.set(values);
            // Connect to Yellow fin, generate key
                let yfConn = Ext.create('AppYF.util.YFConnection', {
                    userName: values.username,
                    password: values.password,
                    clientOrg: values.clientOrg,
                    debug: true
                });

                yfConn.startConnection(function (success,data) {
                    if (success) {
                        me.savedData.set({
                           refreshToken: data.refreshToken,
                           accessToken: data.accessToken
                        });
                        form.getForm().setValues(data);
                    } else {
                        Ext.toast({
                            html: 'Wrong Credentials',
                            title: 'Could not generate key',
                            width: 200,
                            align: 'tr'
                        });
                    }
                });
        } else {
            Ext.toast({
                html: 'Missing info',
                title: 'Could not save',
                width: 200,
                align: 'tr'
            });
        }
    },

    /**
     * Puts the data retreived on the form
     * @param {*} data 
     */
    fillOutForm: function (data) {
        let form=this.getReferences().form;
        form.getForm().setValues(data);
    },

    /**
     * Initializes the view and controller
     * if there is stored credentials, it puts them inside the form fields
     */
    init: function () {
        this.savedData=Ext.create('AppYF.util.localStorage', {
            name: 'yf-credentials'
        });

        let data=this.savedData.read();
        if (data!==undefined && data!==null) {
            this.fillOutForm(data);
        }
    }


});
