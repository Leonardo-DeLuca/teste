// /**
//  * This example shows how to have a responsive create account template.
//  */
Ext.define('KitchenSink.view.templates.CreateAccount', {
    extend: 'Ext.Container',
    xtype: 'template-create-account',
    controller: 'create-account',

    autoSize: true,
    profiles: {
        defaults: {
            width: 340,
            height: 674,
            margin: '40 0 0 0',
            marginAccount: '4 0 0 0',
            buttonHeight: 30
        },
        'classic-material': {
            width: 340,
            height: 674,
            margin: (Ext.isIE || Ext.isEdge) ? '10 0 0 0' : '25 0 0 0',
            marginAccount: '4 0 0 0',
            buttonHeight: 30
        },
        'crisp-touch': {
            width: 340,
            height: 674,
            margin: '30 0 0 0',
            marginAccount: '4 0 0 0',
            buttonHeight: 30
        },
        'neptune-touch': {
            width: 340,
            height: 674,
            margin: '30 0 0 0',
            marginAccount: '4 0 0 0',
            buttonHeight: 30
        },
        graphite: {
            width: 340,
            height: 674,
            margin: '15 0 0 0',
            marginAccount: '0 0 0 0',
            buttonHeight: 50
        }
    },
    width: '${width}',
    height: '${height}',
    layout: {
        type: 'vbox',
        align: 'middle'
    },
    // setting the background of the container
    style: 'background-color: var(--base-color)',
    scrollable: 'y',
    otherContent: [
        {
            type: 'Controller',
            path: 'classic/samples/view/templates/CreateAccountController.js'
        }
    ],

    items: [
        {
            xtype: 'form',
            width: 340,
            height: 644,
            reference: 'formCreateAccount',
            bodyPadding: 30,
            items: [
                {
                    xtype: 'image',
                    height: 90,
                    width: 280,
                    alt: 'secha-logo-image',
                    src: Ext.theme.name === "Aria" ? 'resources/images/SenchaLogoWht.svg' : 'resources/images/SenchaLogoLg.svg',
                    responsiveConfig: {
                        'desktop': {
                            height: 90
                        }
                    }
                },
                {
                    xtype: 'component',
                    margin: '15 0 0 0',
                    width: 280,
                    html: 'Create an Account',
                    style: {
                        'font-size': '22px',
                        'text-align': 'center'
                    }
                },
                {
                    xtype: 'component',
                    reference: 'formRegisterFailure',
                    margin: '15 0 0 0',
                    height: 15,
                    tpl: '<tpl if="errors.length">' +
                        '<span class="x-fa fa-exclamation-circle" style="color: red;">' +
                        ' Account Already Exists</span>' +
                        '</tpl>',
                    width: 280,
                    style: {
                        'font-size': '18px',
                        'text-align': 'center',
                        'letter-spacing': '0.25px',
                        'font-weight': '500'
                    },
                    responsiveConfig: {
                        'desktop': {
                            height: 26
                        }
                    }
                },
                {
                    xtype: 'textfield',
                    allowBlank: false,
                    required: true,
                    fieldLabel: 'Name',
                    name: 'name',
                    width: 280,
                    placeholder: 'Name',
                    msgTarget: 'qtip',
                    margin: '${margin}',
                    responsiveConfig: {
                        'desktop': {
                            msgTarget: 'side'
                        }
                    }
                },
                {
                    xtype: 'textfield',
                    allowBlank: false,
                    required: true,
                    width: 280,
                    fieldLabel: 'Organization',
                    name: 'organization',
                    placeholder: 'Organization',
                    msgTarget: 'qtip',
                    margin: '${margin}',
                    responsiveConfig: {
                        'desktop': {
                            msgTarget: 'side'
                        }
                    }
                },
                {
                    xtype: 'textfield',
                    allowBlank: false,
                    required: true,
                    width: 280,
                    fieldLabel: 'Email Address',
                    name: 'email',
                    placeholder: 'Email Address',
                    msgTarget: 'qtip',
                    margin: '${margin}',
                    responsiveConfig: {
                        'desktop': {
                            msgTarget: 'side'
                        }
                    }
                },
                {
                    xtype: 'textfield',
                    inputType: 'password',
                    width: 280,
                    allowBlank: false,
                    required: true,
                    fieldLabel: 'Password',
                    name: 'pass',
                    placeholder: 'password',
                    msgTarget: 'qtip',
                    margin: '${margin}',
                    responsiveConfig: {
                        'desktop': {
                            msgTarget: 'side'
                        }
                    }
                },
                {
                    xtype: 'checkbox',
                    boxLabel: 'I accept the ' +
                        "<a style='color:var(--base-color);text-decoration: none;' href='#'>Terms</a>",
                    width: 280,
                    bodyAlign: 'left',
                    name: 'accept',
                    margin: '35 0 0 0',
                    style: {
                        'font-size': '16px',
                        'letter-spacing': '1.25px',
                        'color': 'rgba(17, 17, 17, 0.54)'
                    }
                },
                {
                    xtype: 'button',
                    text: 'SIGN UP',
                    autoSize: true,
                    handler: 'onRegister',
                    height: '${buttonHeight}',
                    width: 280,
                    margin: '30 0 0 0',
                    style: {
                        'text-align': 'center',
                        'letter-spacing': '1.25px',
                        'font-size': '14px'
                    }
                }
            ]
        },
        {
            xtype: 'component',
            margin: '${marginAccount}',
            width: 280,
            style: {
                'font-size': '16px',
                'text-align': 'center',
                'color': 'var(--base-foreground-color)',
                'letter-spacing': '1.25px'
            },
            html: 'Already have an account?' +
                "<a style='font-weight:bold;color:var(--base-foreground-color);text-decoration: none;' href='#template-login'> Log In</a>"
        }
    ]
});
