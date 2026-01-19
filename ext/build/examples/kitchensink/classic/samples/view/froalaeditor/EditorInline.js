/**
 * This demonstrates the use of Ext.froala.EditorField, which is a
 * WYSIWYG html editor. There are two versions of the editor:
 * Ext.froala.EditorField, which is desiged to be used in forms,
 * and a non-field version named Ext.froala.Editor, for when you'd
 * like to use the editor component with the inline example for the 
 * Froala rich text editor.
 */
Ext.define('KitchenSink.view.froalaeditor.EditorInline', {
    extend: 'Ext.form.Panel',
    requires: ['Ext.froala.EditorField'],

    xtype: 'froala-editor-inline',
    title: 'Ext.froala.EditorField in inline mode',
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
    items: [
        {
            xtype: 'container',
            id: 'froalaContainer',
            items: [{
                xtype: 'froalaeditorfield',
                allowBlank: false,
                minHeight: 400,
                // The "editor" config is for native Froala configuration
                editor: {
                    autofocus: true,
                    fontSize: ['10', '12', '16', '24'],
                    toolbarInline: true,
                    scrollableContainer: '#froalaContainer'
                },
                name: 'html',
                margin: 20,
                value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed risus neque, mollis id auctor eget, aliquet vel augue. Sed egestas fermentum tempus. Praesent hendrerit eros et enim laoreet suscipit. Nam diam ante, ullamcorper id congue non, accumsan non augue. Aliquam non libero augue, vitae molestie orci. Nulla ac enim nec velit rhoncus venenatis. Aenean orci quam, eleifend ut aliquam iaculis, pellentesque ut arcu. Suspendisse lobortis commodo magna, vitae sodales orci luctus vestibulum. Cras eget ipsum sapien, vel dapibus metus. Etiam sed augue sit amet massa commodo commodo. Nam pellentesque dapibus ipsum. Proin eget malesuada magna. Curabitur elit diam, pellentesque id fermentum eget, congue ultricies nibh. Nunc tincidunt sem at diam porta tincidunt. Suspendisse fringilla felis in lectus blandit vulputate. Suspendisse mollis ipsum nec ante congue ut porttitor nunc bibendum. Maecenas mollis sem non justo iaculis vitae consequat augue pulvinar. Sed aliquet malesuada lobortis. Maecenas malesuada eros sed erat ultricies eleifend. Nulla facilisi. Pellentesque pharetra molestie mollis. Aenean venenatis tempus urna, quis convallis quam cursus eget.'
            }]
        }
    ]
});
