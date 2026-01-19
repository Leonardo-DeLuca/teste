Ext.define('KitchenSink.view.templates.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.template-login',

    onLogin: function() {
        var me = this,
            errorCmp = me.lookupReference('formLoginFailure'),
            fields,
            form = me.lookupReference('formLogin').getForm(),
            errors = [],
            data = {
                errors: errors
            };

        if (form.isValid()) {
            Ext.Msg.alert('Login Success', 'You have been logged in!');
        }
        else {
            Ext.Msg.alert('Login Failure', 'The username/password provided is invalid.');
            fields = form.getFields();

            fields.each(function(field) {
                var error;

                if (!field.validate() && (error = field.getErrors())) {
                    errors.push({
                        errors: error,
                        name: field.getFieldLabel()
                    });
                }
            });
        }

        if (errorCmp) {
            errorCmp.setData(data);
        }
    }
});
