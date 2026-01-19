/**
 * This demonstrates the use of Ext.froala.EditorField, which is a
 * WYSIWYG html editor. There are two versions of the editor:
 * Ext.froala.EditorField, which is desiged to be used in forms,
 * and a non-field version named Ext.froala.Editor, for when you'd
 * like to use the editor component in other situations.
 */
Ext.define('KitchenSink.view.froalaeditor.FroalaDocumentReady', {
    extend: 'Ext.form.Panel',
    requires: ['Ext.froala.EditorField'],

    xtype: 'froala-document-ready',
    title: 'Froala Editor Document Ready',
    layout: 'fit',
    scrollable: 'y',
    frame: true,
    width: '100%',
    height: 500,
    bodyPadding: 10,

    bbar: ['->', {
        text: 'GETVALUES()',
        handler: function(button) {
            var form = button.up('form');

            Ext.Msg.alert('getValues()', Ext.JSON.encode(form.getValues()));
        }
    }],

    items: [
        {
            xtype: 'froalaeditorfield',
            allowBlank: false,
            minHeight: 400,
            // The "editor" config is for native Froala configuration
            editor: {
                documentReady: true
            },
            name: 'html',
            value: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            margin: 20
        }
    ]
});
