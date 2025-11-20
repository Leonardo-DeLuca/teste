/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'AppYF.Application',

    name: 'AppYF',

    requires: [
        // This will automatically load all classes in the AppYF namespace
        // so that application classes do not need to require each other.
        'AppYF.*'
    ],

    // The name of the initial view to create.
    mainView: 'AppYF.view.main.Main'
});
