/*
 * File: app/view/MyPanel1.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.2.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('App.view.MyPanel1', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.mypanel1',

    title: 'Início',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'top',
                    items: [
                        {
                            xtype: 'button',
                            module: 'panel',
                            allowDepress: false,
                            enableToggle: true,
                            iconAlign: 'top',
                            iconCls: 'teste',
                            scale: 'medium',
                            text: 'Painel',
                            toggleGroup: 'module'
                        },
                        {
                            xtype: 'button',
                            module: 'smash',
                            allowDepress: false,
                            enableToggle: true,
                            iconAlign: 'top',
                            iconCls: 'teste',
                            scale: 'medium',
                            text: 'Container',
                            toggleGroup: 'module'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});