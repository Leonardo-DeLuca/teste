// /**
//  * Demonstrates a responsive reset password form.
//  */
Ext.define('KitchenSink.view.templates.ResetPassword', {
    extend: 'Ext.Container',
    xtype: 'template-reset-password',
    controller: 'reset-password',

    autoSize: true,
    profiles: {
        defaults: {
            width: 340,
            height: 504,
            marginAccount: '4 0 0 0',
            cancelMargin: '20 0 0 0',
            buttonHeight: 30
        },
        graphite: {
            width: 340,
            height: 504,
            marginAccount: '0 0 0 0',
            cancelMargin: '5 0 0 0',
            buttonHeight: 50
        }
    },
    width: '${width}',
    height: '${height}',
    layout: {
        type: 'vbox',
        align: 'middle'
    },
    scrollable: 'y',
    // setting the background of the container
    style: 'background-color: var(--base-color)',
    otherContent: [
        {
            type: 'Controller',
            path: 'classic/samples/view/templates/ResetPasswordController.js'
        }
    ],

    items: [
        {
            xtype: 'form',
            width: 340,
            height: 474,
            reference: 'formResetPassword',
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
                    margin: '0 0 0 0',
                    alt: 'sencha-logo-image',
                    src: Ext.theme.name === "Aria" ? 'resources/images/SenchaLogoWht.svg' : 'resources/images/SenchaLogoLg.svg'
                },
                {
                    xtype: 'component',
                    margin: '10 0 0 0',
                    width: 280,
                    html: 'Forgot Your Password?',
                    style: {
                        'font-size': '24px',
                        'text-align': 'center'
                    }
                },
                {
                    xtype: 'component',
                    margin: '14 0 0 0',
                    width: 280,
                    html: 'Enter your email address and we\'ll' + '<br>' + 'send you a new password',
                    style: {
                        'font-size': '16px',
                        'text-align': 'center',
                        'line-height': '1.75',
                        'letter-spacing': '0.5px'
                    }
                },
                {
                    xtype: 'component',
                    reference: 'formResetPasswordFailure',
                    tpl: '<tpl if="errors.length">' +
                        '<span class="x-fa fa-exclamation-circle" style="color: red;">' +
                        ' EMAIL DOES NOT EXIST</span>' +
                        '</tpl>',
                    height: 26,
                    width: 280,
                    margin: '7 0 0 0',
                    style: {
                        'font-size': '20px',
                        'text-align': 'center',
                        'letter-spacing': '0.25px',
                        'font-weight': '500'
                    }
                },
                {
                    xtype: 'textfield',
                    allowBlank: false,
                    required: true,
                    width: 280,
                    margin: '24 0 0 0',
                    fieldLabel: 'Email Address',
                    msgTarget: 'qtip',
                    name: 'user',
                    placeholder: 'Email Address',
                    responsiveConfig: {
                        'desktop': {
                            msgTarget: 'side'
                        }
                    }
                },
                {
                    xtype: 'button',
                    text: 'LOG IN',
                    autoSize: true,
                    margin: '30 0 0 0',
                    height: '${buttonHeight}',
                    width: 280,
                    handler: 'onResetPassword',
                    style: {
                        'letter-spacing': '1.25px',
                        'font-size': '14px'
                    }
                },
                {
                    xtype: 'component',
                    height: 30,
                    margin: '${cancelMargin}',
                    width: 280,
                    style: {
                        'font-size': '14px',
                        'text-align': 'center',
                        'letter-spacing': '1.09px'
                    },
                    html: "<a style='color: var(--base-color);text-decoration: none;' href='#'>CANCEL</a>"
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
            html: 'Don’t have an account?' +
            "<a style='font-weight:bold;color:var(--base-foreground-color);text-decoration: none;' href='#template-create-account'> Sign-Up</a>"
        }
    ]
});
