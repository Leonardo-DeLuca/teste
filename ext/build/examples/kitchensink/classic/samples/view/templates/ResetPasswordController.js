Ext.define('KitchenSink.view.templates.ResetPasswordController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.reset-password',

    onResetPassword: function() {
        var me = this,
            errorCmp = me.lookup('formResetPasswordFailure'),
            fields,
            form = me.lookupReference('formResetPassword').getForm(),
            errors = [],
            data = {
                errors: errors
            };

        if (form.isValid()) {
            Ext.Msg.alert('Password Reset Successful', 'You have successfully changed the password!');
        }
        else {
            Ext.Msg.alert('Failure', 'Please check your email id and retry.');
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
