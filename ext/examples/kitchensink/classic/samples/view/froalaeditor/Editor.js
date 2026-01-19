/**
 * This demonstrates the use of Ext.froala.EditorField, which is a
 * WYSIWYG html editor. There are two versions of the editor:
 * Ext.froala.EditorField, which is desiged to be used in forms,
 * and a non-field version named Ext.froala.Editor, for when you'd
 * like to use the editor component in other situations.
 */
Ext.define('KitchenSink.view.froalaeditor.Editor', {
    extend: 'Ext.form.Panel',
    requires: ['Ext.froala.EditorField'],

    xtype: 'froala-editor',
    title: 'Ext.froala.EditorField inside a form panel',
    layout: 'fit',
    scrollable: 'y',
    frame: true,
    width: '100%',
    bodyPadding: 10,

    bbar: ['->', {
        text: 'GETVALUES()',
        formBind: true,
        handler: function(button) {
            var form = button.up('form');

            Ext.Msg.alert('getValues()', Ext.JSON.encode(form.getValues()));
        }
    }],
    items: [{
        xtype: 'froalaeditorfield',
        allowBlank: false,
        minHeight: 400,
        // The "editor" config is for native Froala configuration
        editor: {
            autofocus: true,
            fontSize: ['10', '12', '16', '24'],
            quickInsertEnabled: false
        },
        name: 'html',
        margin: 20,
        value: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }
    ]
});
