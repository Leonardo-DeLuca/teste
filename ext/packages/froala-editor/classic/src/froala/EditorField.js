/**
 * A field version of [Froala Editor](https://www.froala.com). This allows you to use the Froala Editor
 * within a form and automatically have its name and value included in a form submit.
 */
Ext.define('Ext.froala.EditorField', {
    extend: 'Ext.form.Field',
    xtype: 'froalaeditorfield',
    mixins: {
        froalaeditor: 'Ext.froala.Mixin'
    },

    twoWayBindable: ['value'],
    defaultBindProperty: 'value',

    blankText: 'This field is required',
    allowBlank: true,
    baseCls: Ext.baseCSSPrefix + 'froala',

    /**
     * @event change
     * Fired when the html content changes
     * @param {Ext.froala.EditorField} this This component.
     * @param {String} the html content.
     */

    /**
     * @event ready
     * Fired after the FroalaEditor instance is initialized.
     * @param {Ext.froala.EditorField} this This component.
     * @param {Object} the FroalaEditor instance.
     */

    fieldSubTpl: [
        // note: {id} here is really {inputId}, but {cmpId} is available
        '<div id="{id}" data-ref="inputEl" {inputAttrTpl} class="{fieldCls}',
        '<tpl if="name"> name="{name}"</tpl>',
        '<tpl if="value"> value="{[Ext.util.Format.htmlEncode(values.value)]}"</tpl>',
        '<tpl if="placeholder"> placeholder="{placeholder}"</tpl>',
        '{%if (values.maxLength !== undefined){%} maxlength="{maxLength}"{%}%}',
        '<tpl if="readOnly"> readonly="readonly"</tpl>',
        '<tpl if="disabled"> disabled="disabled"</tpl>',
        '<tpl if="tabIdx != null"> tabindex="{tabIdx}"</tpl>',
        '<tpl if="fieldStyle"> style="{fieldStyle}"</tpl>',
        '<tpl if="ariaEl == \'inputEl\'">',
        '<tpl foreach="ariaElAttributes"> {$}="{.}"</tpl>',
        '</tpl>',
        '<tpl foreach="inputElAriaAttributes"> {$}="{.}"</tpl>',
        '></div>',
        {
            disableFormats: true
        }
    ],

    activeErrorsTpl: undefined,

    htmlActiveErrorsTpl: [
        '<tpl if="errors && errors.length">',
        '<ul class="{listCls}">',
        '<tpl for="errors"><li>{.}</li></tpl>',
        '</ul>',
        '</tpl>'
    ],

    getFroalaEditorDomElement: function() {
        return this.inputEl.dom;
    },

    initComponent: function() {
        var me = this;

        me.initiateFroala(arguments);
        me.callParent();

    },

    initiateFroala: function() {
        var me = this,
            config = me.config,
            editor;

        delete config.$initParent;

        // validate the field on undo and redo options
        if (!me.allowBlank) {
            config.events = {
                'commands.undo': function() {
                    me.validate();
                },
                'commands.redo': function() {
                    me.validate();
                    me.isValid();
                }
            };
        }

        me.froalaEl = new Ext.fly(document.createElement('div'));

        editor = me.mixins.froalaeditor.createFroalaEditor.call(me, config, me.froalaEl.dom);
        me.setEditor(editor);
    },

    afterRender: function() {
        var me = this,
            config = Ext.clone(me.config, false);

        delete config.$initParent;
        // to make form field borders align with froala
        me.addCls('curved-form-field-border');

        me.inputEl.appendChild(me.froalaEl.dom);

        // To validate field if value is binded
        if (!Ext.isEmpty(!me.allowBlank)) {
            me.validate();
        }
    },

    doDestroy: function() {
        this.setEditor(null);
        this.callParent();
    },

    setValue: function(value) {
        this.updateValue(value);
    },

    getValue: function() {
        var me = this,
            editor = me.editor,
            value;

        if (editor) {
            value = editor.el && editor.el.innerHTML;

            // There is &zerowidthspace; when ever we add and remove a character 
            // Hence removing any unwanted character while checking for the value.
            return value.replace(/[\u200B-\u200D\uFEFF]/g, '') === '<p><br></p>' ? '' : value;
        }
    },

    getRawValue: function() {
        var value = this.getValue();

        this.rawValue = value;

        return value;
    },

    getErrors: function(value) {
        var me = this,
            errors;

        value = this.getRawValue();
        errors = me.callParent([value]);

        if (value.length < 1) {
            if (!me.allowBlank) {
                errors.push(me.blankText);
            }
        }

        return errors;
    },

    updateValue: function(value) {
        this.mixins.froalaeditor.updateValue.call(this, value);
    },

    updateDisabled: function(disabled) {
        this.mixins.froalaeditor.updateDisabled.call(this, disabled);
    },

    privates: {
        // Overrides a private method in Ext.mixin.Observable
        doAddListener: function(ename) {
            var me = this,
                result;

            // It's safer to use arguments here, since there are so
            // many ways listener parameters are used.
            result = me.callParent(arguments);

            me.mixins.froalaeditor.handleAddListener.call(me, ename);

            return result;
        },

        // Overrides a private method in Ext.mixin.Observable
        doRemoveListener: function(ename) {
            var me = this,
                result;

            // It's safer to use arguments here, since there are so
            // many ways listener parameters are used.
            result = me.callParent(arguments);

            me.mixins.froalaeditor.handleRemoveListener.call(me, ename);

            return result;
        },
        // to show invalid text on editor input element
        getActionEl: function() {
            return (this.editor ? Ext.get(this.editor.el) : this.el);
        }
    }
});
