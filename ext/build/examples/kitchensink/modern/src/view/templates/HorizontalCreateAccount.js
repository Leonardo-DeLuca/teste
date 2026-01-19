/**
 * This example shows how to have a horizontal create account template.
 *
 * This template changes its layout according to the various screen sizes
 * it has a vertical layout which has an internal horizontal layout  
 * for potrait mode and phone the horizontal layout is not used
 * only vertical layout is used
 */
Ext.define('KitchenSink.view.templates.HorizontalCreateAccount', {
    extend: 'Ext.Container',
    xtype: 'template-horizontal-create-account',
    controller: 'create-account',

    autoSize: true,
    profiles: {
        defaults: {
            width: 1000,
            height: 610
        },
        phone: {
            defaults: {
                width: undefined,
                height: undefined,
                layout: undefined
            }
        },

        tablet: {
            defaults: {
                width: window.innerWidth > 600 && window.innerWidth <= 992 ? 600 : 1024,
                height: window.innerWidth > 600 && window.innerWidth <= 992 ? 959 : 770
            }
        }
    },
    width: '${width}',
    height: '${height}',
    // setting the background of the container
    style: Ext.platformTags.desktop ? 'background-color: var(--base-color)' : undefined,
    layout: {
        type: 'vbox',
        pack: Ext.platformTags.tablet && window.innerWidth > 992 ? 'center' : undefined,
        align: 'middle'
    },
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
            responsiveConfig: {
                desktop: {
                    width: 1000,
                    height: 580
                },
                tablet: {
                    width: window.innerWidth > 600 && window.innerWidth <= 992 ? 600 : 1024,
                    height: window.innerWidth > 600 && window.innerWidth <= 992 ? 959 : 770
                },
                phone: {
                    width: window.innerWidth,
                    height: 918
                }
            },
            reference: 'formCreateAccount',
            layout: {
                type: 'vbox'
            },
            bodyPadding: 30,
            items: [
                {
                    xtype: 'image',
                    height: 30,
                    width: '${width}',
                    align: 'stretch',
                    margin: '-30 -30 10 -30',
                    alt: 'sencha-logo-image',
                    src: 'resources/images/SenchaLogoSm.svg',
                    style: 'background-color: #f0f1f7;',
                    responsiveConfig: {
                        'desktop': {
                            height: 48
                        }
                    }
                },
                {
                    xtype: 'container',
                    autoSize: true,
                    responsiveConfig: {
                        'desktop || (tablet && width > 992)': {
                            layout: 'hbox'
                        }
                    },
                    items: [
                        {
                            xtype: 'image',
                            align: 'middle',
                            alt: 'illustration-image',
                            src: 'resources/images/Illustration_328x276.svg',
                            hidden: true,
                            responsiveConfig: {
                                'tablet && width >= 600 && width < 993': {
                                    height: 295,
                                    width: '100%',
                                    align: 'middle',
                                    hidden: false,
                                    margin: '20 0 0 0'
                                },
                                'phone': {
                                    height: 241,
                                    width: '100%',
                                    align: 'middle',
                                    hidden: false,
                                    margin: '0 0 0 0'
                                }
                            }
                        },
                        {
                            xtype: 'container',
                            flex: 1,
                            layout: {
                                type: 'vbox',
                                align: 'middle'
                            },
                            autoSize: true,
                            items: [
                                {
                                    xtype: 'component',
                                    margin: '30 0 0 0',
                                    html: 'Create an Account',
                                    width: '100%',
                                    responsiveConfig: {
                                        'tablet && width > 1200': {
                                            margin: '50 0 0 0'
                                        }
                                    },
                                    style: {
                                        'font-size': '24px',
                                        'text-align': 'center'
                                    }
                                },
                                {
                                    xtype: 'textfield',
                                    label: 'Name',
                                    errorTarget: 'qtip',
                                    allowBlank: false,
                                    required: true,
                                    width: 280,
                                    name: 'name',
                                    placeholder: 'Name',
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
                                    label: 'Organization',
                                    allowBlank: false,
                                    required: true,
                                    errorTarget: 'qtip',
                                    width: 280,
                                    name: 'organization',
                                    placeholder: 'Organization',
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
                                    label: 'Email Address',
                                    allowBlank: false,
                                    required: true,
                                    errorTarget: 'qtip',
                                    style: {
                                        'margin': 'auto'
                                    },
                                    width: 280,
                                    name: 'email-address',
                                    placeholder: 'Email Address',
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
                                    errorTarget: 'qtip',
                                    width: 280,
                                    label: 'Password',
                                    name: 'pass',
                                    placeholder: 'password',
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
                            xtype: 'container',
                            flex: 2,
                            autoSize: true,
                            items: [
                                {
                                    xtype: 'image',
                                    alt: 'illustration-image',
                                    responsiveConfig: {
                                        'desktop || (tablet && width > 992)': {
                                            height: 390,
                                            width: '100%',
                                            margin: '80 0 0 0',
                                            src: 'resources/images/Illustration_441x372.svg'
                                        }
                                    }
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'component',
                    width: '100%',
                    html: 'Already have an account?' +
                    "<a style='font-weight:bold;color:var(--base-color);text-decoration: none;' href='#template-login'> Log In</a>",
                    height: 0,
                    style: {
                        'font-size': '16px',
                        'text-align': 'center',
                        'letter-spacing': '1.25px',
                        'color': 'rgba(17, 17, 17, 0.54)'
                    },
                    hidden: true,
                    responsiveConfig: {
                        'tablet && width > 992': {
                            margin: '35 0 0 0',
                            hidden: false
                        },
                        'tablet && width >=600 && width < 993': {
                            margin: '15 0 0 0',
                            hidden: false
                        },
                        'phone': {
                            margin: '20 0 0 0',
                            hidden: false
                        }
                    }
                }
            ]
        },
        {
            xtype: 'component',
            style: {
                'font-size': '16px',
                'text-align': 'center',
                'color': 'var(--base-foreground-color)',
                'letter-spacing': '1.25px'
            },
            responsiveConfig: {
                'desktop': {
                    margin: '4 0 0 0',
                    html: 'Already have an account?' +
                        "<a style='font-weight:bold;color:var(--base-foreground-color);text-decoration: none;' href='#template-login'> Log In</a>"
                }
            }
        }
    ]
});
