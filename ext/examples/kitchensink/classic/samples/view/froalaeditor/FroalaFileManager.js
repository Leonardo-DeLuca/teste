/**
 * This demonstrates the use of Ext.froala.EditorField, which is a
 * WYSIWYG html editor. There are two versions of the editor:
 * Ext.froala.EditorField, which is desiged to be used in forms,
 * and a non-field version named Ext.froala.Editor, for when you'd
 * like to use the editor component in other situations.
 */
Ext.define('KitchenSink.view.froalaeditor.FroalaFileManager', {
    extend: 'Ext.form.Panel',
    requires: ['Ext.froala.EditorField'],

    xtype: 'froala-file-manager',
    title: 'Froala File Manager Options',
    layout: 'fit',
    scrollable: 'y',
    frame: true,
    width: 850,
    bodyPadding: 10,

    bbar: ['->', {
        text: 'GETVALUES()',
        handler: function(button) {
            var form = button.up('form'),
                value = form.getForm().getValues(),
                window = Ext.create('Ext.window.Window', {
                    width: 650,
                    height: 350,
                    layout: 'fit',
                    modal: true,
                    items: [{
                        xtype: 'panel',
                        modal: true,
                        html: value,
                        padding: '10px'
                    }]
                });

            window.show();
        }
    }],

    items: [
        {
            xtype: 'froalaeditorfield',
            minHeight: 400,
            allowBlank: false,
            // The "editor" config is for native Froala configuration
            editor: {
                autofocus: true,
                fontSize: ['10', '12', '16', '24'],
                toolbarButtons: {
                    'moreRich': {
                        'buttons': ['insertFiles', 'trackChanges', 'markdown', 'insertImage', 'insertLink', 'insertVideo', 'insertTable',
                                    'emoticons', 'fontAwesome', 'specialCharacters', 'embedly',
                                    'insertFile', 'insertHR'
                        ],
                        'buttonsVisible': 4
                    },
                    'moreMisc': {
                        'buttons': ['undo', 'redo', 'fullscreen', 'print', 'getPDF', 'spellChecker', 'selectAll', 'html', 'help'],
                        'align': 'right',
                        'buttonsVisible': 2
                    }
                }
            },
            name: 'html',
            margin: 20,
            value: 'The classes should be defined in CSS, otherwise no changes will be visible on the image\'s appearance.' + '<img src="resources/images/Illustration_441x372.svg" width="200" height="200">'
        }
    ]
});
