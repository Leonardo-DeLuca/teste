Ext.define('KitchenSink.view.templates.CreateAccountController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.create-account',

    onRegister: function() {
        var me = this,
            errorCmp = me.lookup('formRegisterFailure'),
            form = me.lookup('formCreateAccount'),
            errors = [],
            data = {
                errors: errors
            };

        if (form.validate()) {
            Ext.Msg.alert('Registration Successful', 'You have successfully registered!');
        }
        else {
            Ext.Msg.alert('Registration Failure', 'Please check for form errors and retry.');

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
