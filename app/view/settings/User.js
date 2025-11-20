Ext.define('AppYF.view.settings.User', {
    extend: 'Ext.panel.Panel',
    xtype: 'user-setup',

    requires: [
        'AppYF.view.settings.UserController',
    ],
    controller: 'user-controller',

    layout: 'center',
    bodyStyle: {
        backgroundColor: '#eee'
    },
    

    items: [{
        xtype: 'form',
        width: 400,
        height: 600,
        bodyPadding: 16,
        border: 1,
        title: 'Yellowfin Credentials',
        reference: 'form',
        defaults: {
            labelAlign: 'top',
            width: '100%'
        },
        items: [{
            xtype: 'textfield',
            fieldLabel: 'Username',
            emptyText: 'Enter your YF username',
            name: 'username',
            allowBlank: false
        },{
            xtype: 'textfield',
            fieldLabel: 'Password',
            emptyText: 'Enter your YF username',
            name: 'password',
            inputType: 'password',
            allowBlank: false
        }, {
            xtype: 'textfield',
            fieldLabel: 'Customer',
            emptyText: 'Enter your Client Org',
            name: 'clientOrg',
            allowBlank: true
        }, {
            xtype: 'textfield',
            fieldLabel: 'Refresh Token',
            emptyText: 'Will be filled automatically',
            name: 'refreshToken',
            readOnly: true
        }, {
            xtype: 'textfield',
            fieldLabel: 'Access Token (expires after 20 minutes)',
            emptyText: 'Will be filled automatically - expires after 20 minutes',
            name: 'accessToken',
            readOnly: true
        }],
        bbar: ['->', {
            text: 'Save & Connect',
            handler: 'onSave'
        }]
    }],

});