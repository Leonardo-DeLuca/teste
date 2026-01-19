/**
 * This view is for the indexed panel on left with a search field for filtering and 
 * navigating in form of a tree list accordion.
 */

Ext.define('KitchenSink.view.NavigationPanel', {
    extend: 'Ext.Panel',
    xtype: 'navigation-panel',
    scrollable: true,
    platformConfig: {
        '!phone': {
            hidden: true,
            resizable: {
                split: true,
                edges: 'east'
            },
            stateId: 'navigationPanel',
            stateful: [
                'hidden',
                'width'
            ]
        }
    },
    hideHeaders: true,
    id: 'navigationPanel',
    width: 300,
    items: [
        {
            xtype: 'searchfield',
            flex: "1",
            docked: "top",
            margin: "7px",
            id: 'treeSearch'
        },
        {
            id: 'indextreeList',
            xtype: 'treelist',
            expanderFirst: false,
            expanderOnly: false,
            selectOnExpander: false,
            store: 'Navigation',
            scrollable: 'y'
        }
    ],
    defaultFocus: ':focusable:last'
});
