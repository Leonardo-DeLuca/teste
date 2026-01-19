/**
 * Demonstrates a responsive login form.
 */
Ext.define('KitchenSink.view.templates.Login', {
    extend: 'Ext.Container',
    xtype: 'template-login',
    controller: 'template-login',

    autoSize: true,
    profiles: {
        defaults: {
            width: 340,
            height: 544
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
        pack: Ext.platformTags.phone && window.orientation === 0 ? 'center' : undefined,
        align: 'middle'
    },
    scrollable: 'y',
    otherContent: [
        {
            type: 'Controller',
            path: 'modern/src/view/templates/LoginController.js'
        }
    ],
    // setting the background of the container
    style: 'background-color: var(--base-color)',

    items: [
        {
            xtype: 'formpanel',
            height: 514,
            width: 340,
            reference: 'formLogin',
            layout: {
                type: 'vbox',
                align: 'middle'
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
                    height: 27,
                    html: 'Login Into Your Account',
                    style: {
                        'font-size': '20px',
                        'text-align': 'center',
                        'margin': 'auto'
                    }
                },
                {
                    xtype: 'component',
                    reference: 'formLoginFailure',
                    tpl: '<tpl if="errors.length">' +
                        '<span class="x-fa fa-exclamation-circle" style="color: red;">' +
                        ' Login Failure</span>' +
                        '</tpl>',
                    height: 26,
                    width: 280,
                    style: {
                        'font-size': '20px',
                        'text-align': 'center',
                        'margin': 'auto'
                    }
                },
                {
                    xtype: 'textfield',
                    allowBlank: false,
                    required: true,
                    width: 280,
                    label: 'Email Address',
                    name: 'email',
                    placeholder: 'Email Address',
                    errorTarget: 'qtip',
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
                    xtype: 'passwordfield',
                    allowBlank: false,
                    required: true,
                    width: 280,
                    label: 'Password',
                    name: 'pass',
                    placeholder: 'password',
                    errorTarget: 'qtip',
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
                    xtype: 'checkbox',
                    width: 280,
                    bodyAlign: 'left',
                    boxLabel: 'Keep me logged in',
                    name: 'remember',
                    style: {
                        'font-size': '16px',
                        'letter-spacing': '1.25px',
                        'color': 'rgba(17, 17, 17, 0.54)',
                        'margin': 'auto'
                    }
                },
                {
                    xtype: 'button',
                    text: 'LOG IN',
                    autoSize: true,
                    handler: 'onLogin',
                    width: 280,
                    ui: 'action',
                    style: {
                        'text-align': 'center',
                        'letter-spacing': '1.25px',
                        'font-size': '14px',
                        'margin': 'auto'
                    }
                },
                {
                    xtype: 'component',
                    html: "<a style='color: var(--base-color);text-decoration: none;' href='#template-reset-password'>Forgot your Password?</a>",
                    style: {
                        'font-size': '16px',
                        'text-align': 'center',
                        'margin': 'auto'
                    },
                    width: 280
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
            html: 'Don’t have an account?' +
                "<a style='font-weight:bold;color:var(--base-foreground-color);text-decoration: none;' href='#template-create-account'> Sign-Up</a>",
            responsiveConfig: {
                'phone': {
                    margin: '13 0 0 0'
                }
            }
        }
    ]
});
