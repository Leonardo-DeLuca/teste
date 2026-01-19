// /**
//  * This example shows how to have a horizontal create account template.
//  *
//  * This template changes its layout according to the various screen sizes
//  * it has a vertical layout which has an internal horizontal layout  
//  * for potrait mode and phone the horizontal layout is not used
//  * only vertical layout is used
//  */
Ext.define('KitchenSink.view.templates.HorizontalCreateAccount', {
    extend: 'Ext.Container',
    xtype: 'template-horizontal-create-account',
    controller: 'create-account',

    autoSize: true,
    profiles: {
        defaults: {
            width: 1000,
            height: 610,
            margin: '45 0 0 0',
            marginAccount: '4 0 0 0',
            buttonHeight: 30
        },

        graphite: {
            width: 1000,
            height: 610,
            margin: '15 0 0 0',
            marginAccount: '0 0 0 0',
            buttonHeight: 45
        },
        'classic-material': {
            width: 1000,
            height: 610,
            marginAccount: '4 0 0 0',
            margin: (Ext.isIE || Ext.isEdge) ? '10 0 0 0' : '25 0 0 0',
            buttonHeight: 30
        },

        tablet: {
            defaults: {
                width: window.innerWidth > 992 ? 1024 : 600,
                height: window.innerWidth > 992 ? 770 : 959,
                margin: window.innerWidth > 992 ? '55 0 0 0' : '40 0 0 0'
            },
            'neptune-touch': {
                width: window.innerWidth > 992 ? 1024 : 600,
                height: window.innerWidth > 992 ? 770 : 959,
                margin: window.innerWidth > 992 ? '45 0 0 0' : '30 0 0 0'
            },
            'classic-material': {
                width: window.innerWidth > 992 ? 1024 : 600,
                height: window.innerWidth > 992 ? 770 : 959,
                margin: window.innerWidth > 992 ? '45 0 0 0' : '30 0 0 0'
            },
            'crisp-touch': {
                width: window.innerWidth > 992 ? 1024 : 600,
                height: window.innerWidth > 992 ? 770 : 959,
                margin: window.innerWidth > 992 ? '40 0 0 0' : '30 0 0 0'
            },
            graphite: {
                width: window.innerWidth > 992 ? 1024 : 600,
                height: window.innerWidth > 992 ? 770 : 959,
                margin: window.innerWidth > 992 ? '40 0 0 0' : '30 0 0 0'
            }
        }
    },
    width: '${width}',
    height: '${height}',
    // setting the background of the container
    style: Ext.platformTags.desktop ? 'background-color: var(--base-color)' : undefined,
    layout: {
        type: 'vbox',
        align: 'middle'
    },
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
            responsiveConfig: {
                desktop: {
                    width: 1000,
                    height: 580
                },
                tablet: {
                    width: window.innerWidth > 992 ? 1024 : 600,
                    height: window.innerWidth > 992 ? 770 : 959
                }
            },
            reference: 'formCreateAccount',
            items: [
                {
                    xtype: 'image',
                    height: 30,
                    width: '100%',
                    align: 'stretch',
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
                            layout: 'hbox',
                            width: '100%'
                        },
                        'tablet && width < 992': {
                            width: '100%'
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
                                    margin: '25 0 0 0',
                                    html: 'Create an Account',
                                    width: '100%',
                                    responsiveConfig: {
                                        'width > 1200': {
                                            margin: '50 0 0 0'
                                        },
                                        'tablet && width > 992': {
                                            margin: '80 0 0 0'
                                        }
                                    },
                                    style: {
                                        'font-size': '24px',
                                        'text-align': 'center'
                                    }
                                },
                                {
                                    xtype: 'textfield',
                                    fieldLabel: 'Name',
                                    msgTarget: 'qtip',
                                    allowBlank: false,
                                    required: true,
                                    width: 280,
                                    name: 'name',
                                    placeholder: 'Name',
                                    margin: '55 0 0 0',
                                    responsiveConfig: {
                                        'desktop': {
                                            msgTarget: 'side'
                                        }
                                    }
                                },
                                {
                                    xtype: 'textfield',
                                    fieldLabel: 'Organization',
                                    allowBlank: false,
                                    msgTarget: 'qtip',
                                    required: true,
                                    width: 280,
                                    name: 'organization',
                                    placeholder: 'Organization',
                                    margin: '${margin}',
                                    responsiveConfig: {
                                        'desktop': {
                                            msgTarget: 'side'
                                        }

                                    }
                                },
                                {
                                    xtype: 'textfield',
                                    fieldLabel: 'Email Address',
                                    allowBlank: false,
                                    required: true,
                                    msgTarget: 'qtip',
                                    width: 280,
                                    name: 'email-address',
                                    placeholder: 'Email Address',
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
                                    allowBlank: false,
                                    required: true,
                                    msgTarget: 'qtip',
                                    width: 280,
                                    fieldLabel: 'Password',
                                    name: 'pass',
                                    placeholder: 'password',
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
                                        "<a style='font-weight:bold;color: var(--base-color);text-decoration: none;' href='#'>Terms</a>",
                                    width: 280,
                                    bodyAlign: 'left',
                                    margin: '20 0 0 0',
                                    name: 'accept',
                                    style: {
                                        'font-size': '16px',
                                        'letter-spacing': '1.25px',
                                        'color': 'rgba(17, 17, 17, 0.54)'
                                    },
                                    responsiveConfig: {
                                        'width > 1200': {
                                            margin: '20 0 0 0'
                                        },
                                        'tablet && width > 992': {
                                            margin: '40 0 0 0'
                                        }
                                    }
                                },
                                {
                                    xtype: 'button',
                                    text: 'SIGN UP',
                                    autoSize: true,
                                    height: '${buttonHeight}',
                                    handler: 'onRegister',
                                    width: 280,
                                    margin: '20 0 0 0',
                                    style: {
                                        'text-align': 'center',
                                        'letter-spacing': '1.25px',
                                        'font-size': '14px'

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
                                            margin: '90 0 0 0',
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
                    "<a style='font-weight:bold;color: var(--base-color);text-decoration: none;' href='#template-login'> Log In</a>",
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
                            margin: '50 0 0 0',
                            hidden: false
                        },
                        'tablet && width >=600 && width < 993': {
                            margin: '15 0 0 0',
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
                    margin: '${marginAccount}',
                    html: 'Already have an account?' +
                        "<a style='font-weight:bold;color: var(--base-foreground-color);text-decoration: none;' href='#template-login'> Log In</a>"
                }
            }
        }
    ]
});
