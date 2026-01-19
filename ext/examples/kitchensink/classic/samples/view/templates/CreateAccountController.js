Ext.define('KitchenSink.view.templates.CreateAccountController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.create-account',

    onRegister: function() {
        var me = this,
            errorCmp = me.lookup('formRegisterFailure'),
            fields,
            form = me.lookup('formCreateAccount').getForm(),
            errors = [],
            data = {
                errors: errors
            };

        if (form.isValid()) {
            Ext.Msg.alert('Registration Successful', 'You have successfully registered!');
        }
        else {
            Ext.Msg.alert('Registration Failure', 'Please check for form errors and retry.');
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
