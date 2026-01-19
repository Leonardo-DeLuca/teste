Ext.define('KitchenSink.view.templates.ResetPasswordController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.reset-password',

    onResetPassword: function() {
        var me = this,
            errorCmp = me.lookup('formResetPasswordFailure'),
            form = me.lookup('formResetPassword'),
            errors = [],
            data = {
                errors: errors
            };

        if (form.validate()) {
            Ext.Msg.alert('Password Reset Successful', 'You have successfully changed the password!');
        }
        else {
            Ext.Msg.alert('Failure', 'Please check your email id and retry.');

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
