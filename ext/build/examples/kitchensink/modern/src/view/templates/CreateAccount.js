/**
 * This example shows how to have a responsive create account template.
 */
Ext.define('KitchenSink.view.templates.CreateAccount', {
    extend: 'Ext.Container',
    xtype: 'template-create-account',
    controller: 'create-account',

    autoSize: true,
    profiles: {
        defaults: {
            width: 340,
            height: 674
        },
        phone: {
            defaults: {
                // reset the properties for phone
                height: undefined,
                margin: undefined,
                padding: undefined,
                shadow: undefined,
                width: undefined
            }
        }
    },
    width: '${width}',
    height: '${height}',
    layout: {
        type: 'vbox',
        // the height is set so that the form is properly visible on the mobile phones of smaller height
        pack: (Ext.platformTags.phone && window.orientation === 0 && window.innerHeight > 750) ? 'center' : undefined,
        align: 'middle'
    },
    // setting the background of the container
    style: 'background-color: var(--base-color)',
    scrollable: 'y',
    otherContent: [
        {
            type: 'Controller',
            path: 'modern/src/view/templates/CreateAccountController.js'
        }
    ],

    items: [
        {
            xtype: 'formpanel',
            width: 340,
            height: 644,
            reference: 'formCreateAccount',
            layout: {
                type: 'vbox'
            },
            bodyPadding: 30,
            items: [
                {
                    xtype: 'image',
                    height: 90,
                    width: 280,
                    alt: 'sencha-logo-image',
                    src: 'resources/images/SenchaLogoLg.svg'
                },
                {
                    xtype: 'component',
                    width: 280,
                    html: 'Create an Account',
                    style: {
                        'font-size': '22px',
                        'text-align': 'center',
                        'margin': 'auto'
                    }
                },
                {
                    xtype: 'component',
                    reference: 'formRegisterFailure',
                    height: 26,
                    width: 280,
                    tpl: '<tpl if="errors.length">' +
                        '<span class="x-fa fa-exclamation-circle" style="color: red;">' +
                        ' Account Already Exists</span>' +
                        '</tpl>',
                    style: {
                        'font-size': '18px',
                        'text-align': 'center',
                        'letter-spacing': '0.25px',
                        'font-weight': '500',
                        'margin': 'auto'
                    }
                },
                {
                    xtype: 'textfield',
                    allowBlank: false,
                    required: true,
                    label: 'Name',
                    name: 'name',
                    placeholder: 'Name',
                    errorTarget: 'qtip',
                    width: 280,
                    style: {
                        'margin': 'auto'
                    },
                    responsiveConfig: {
                        'desktop': {
                            errorTarget: 'side'
                        }
                    }
                },
                {
                    xtype: 'textfield',
                    allowBlank: false,
                    required: true,
                    label: 'Organization',
                    name: 'organization',
                    placeholder: 'Organization',
                    errorTarget: 'qtip',
                    width: 280,
                    style: {
                        'margin': 'auto'
                    },
                    responsiveConfig: {
                        'desktop': {
                            errorTarget: 'side'
                        }
                    }
                },
                {
                    xtype: 'textfield',
                    allowBlank: false,
                    required: true,
                    label: 'Email Address',
                    name: 'email',
                    placeholder: 'Email Address',
                    errorTarget: 'qtip',
                    style: {
                        'margin': 'auto'
                    },
                    width: 280,
                    responsiveConfig: {
                        'desktop': {
                            errorTarget: 'side'
                        }
                    }
                },
                {
                    xtype: 'passwordfield',
                    allowBlank: false,
                    required: true,
                    label: 'Password',
                    name: 'pass',
                    placeholder: 'password',
                    errorTarget: 'qtip',
                    style: {
                        'margin': 'auto'
                    },
                    width: 280,
                    responsiveConfig: {
                        'desktop': {
                            errorTarget: 'side'
                        }
                    }
                },
                {
                    xtype: 'checkbox',
                    boxLabel: 'I accept the ' +
                        "<a style='font-weight:bold;color:var(--base-color);text-decoration: none;' href='#'>Terms</a>",
                    width: 280,
                    bodyAlign: 'left',
                    name: 'accept',
                    style: {
                        'font-size': '16px',
                        'letter-spacing': '1.25px',
                        'color': 'rgba(17, 17, 17, 0.54)',
                        'margin': 'auto'
                    }
                },
                {
                    xtype: 'button',
                    text: 'SIGN UP',
                    autoSize: true,
                    handler: 'onRegister',
                    width: 280,
                    ui: 'action',
                    style: {
                        'text-align': 'center',
                        'letter-spacing': '1.25px',
                        'font-size': '14px',
                        'margin': 'auto'
                    }
                }
            ]
        },
        {
            xtype: 'component',
            margin: '4 0 0 0',
            width: 280,
            style: {
                'font-size': '16px',
                'text-align': 'center',
                'color': 'var(--base-foreground-color)',
                'letter-spacing': '1.25px'
            },
            html: 'Already have an account?' +
                "<a style='font-weight:bold;color:var(--base-foreground-color);text-decoration: none;' href='#template-login'> Log In</a>",
            responsiveConfig: {
                'phone': {
                    margin: '13 0 0 0'
                }
            }
        }
    ]
});
