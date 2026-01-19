Ext.define('KitchenSink.view.templates.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.template-login',

    onLogin: function() {
        var me = this,
            errorCmp = me.lookup('formLoginFailure'),
            form = me.lookup('formLogin'),
            errors = [],
            data = {
                errors: errors
            };

        if (form.validate()) {
            Ext.Msg.alert('Login Success', 'You have been logged in!');
        }
        else {
            Ext.Msg.alert('Login Failure', 'The username/password provided is invalid.');

            form.getFields(false).forEach(function(field) {
                var error;

                if (!field.validate() && (error = field.getError())) {
                    errors.push({
                        errors: error,
                        name: field.getLabel()
                    });
                }
            });
        }

        if (errorCmp) {
            errorCmp.setData(data);
        }
    }
});
