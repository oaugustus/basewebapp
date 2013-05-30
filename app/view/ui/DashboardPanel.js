/*
 * File: app/view/ui/DashboardPanel.js
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

Ext.define('App.view.ui.DashboardPanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.dashboardpanel',

    requires: [
        'App.view.MyPanel1',
        'App.view.MyPanel2'
    ],

    itemId: 'panelDashboard',
    margin: 10,
    style: 'border: solid 1px #157FCC;',
    layout: {
        type: 'card'
    },
    bodyBorder: true,
    bodyStyle: 'background-color: transparent !important;',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'top',
                    cls: 'sys-toolbar',
                    itemId: 'tbDashboard',
                    items: [
                        {
                            xtype: 'container',
                            cls: 'logo',
                            height: 50,
                            itemId: 'ctLogo',
                            style: {
                                backgroundColor: '#ECECEC'
                            },
                            width: 214
                        },
                        {
                            xtype: 'tbfill'
                        },
                        {
                            xtype: 'splitbutton',
                            itemId: 'btnUsuario',
                            iconCls: 'icon-user-edit',
                            text: 'Usuário',
                            menu: {
                                xtype: 'menu',
                                items: [
                                    {
                                        xtype: 'menuitem',
                                        itemId: 'btnTrocaSenha',
                                        iconCls: 'icon-lock',
                                        text: 'Trocar senha'
                                    }
                                ]
                            }
                        },
                        {
                            xtype: 'tbseparator'
                        },
                        {
                            xtype: 'button',
                            itemId: 'btnSair',
                            iconCls: 'icon-exit',
                            scale: 'medium',
                            text: 'Sair'
                        }
                    ]
                },
                {
                    xtype: 'container',
                    dock: 'top',
                    height: 1,
                    itemId: 'ctSeparator',
                    style: 'background-color: #fff;'
                },
                {
                    xtype: 'container',
                    dock: 'top',
                    itemId: 'ctModules',
                    layout: {
                        type: 'card'
                    },
                    items: [
                        {
                            xtype: 'toolbar',
                            itemId: 'menuLocation',
                            items: [
                                {
                                    xtype: 'container',
                                    flex: 1,
                                    margins: '0 5 0 0',
                                    cls: 'navbar',
                                    items: [
                                        {
                                            xtype: 'container',
                                            cls: 'navbar-inner',
                                            layout: {
                                                align: 'stretch',
                                                type: 'hbox'
                                            },
                                            items: [
                                                {
                                                    xtype: 'container',
                                                    margins: '0 10 0 0',
                                                    cls: 'locator-menu-icon icon-exit',
                                                    itemId: 'ctIcon',
                                                    width: 24
                                                },
                                                {
                                                    xtype: 'container',
                                                    margins: '0 10 0 0',
                                                    cls: 'brand',
                                                    html: 'Início',
                                                    itemId: 'ctApp'
                                                },
                                                {
                                                    xtype: 'container',
                                                    cls: 'brand active',
                                                    html: 'Cadastro',
                                                    itemId: 'ctModule'
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            xtype: 'tabpanel',
                            itemId: 'tabModule',
                            style: 'border: solid 2px  #157FCC;',
                            activeTab: 0,
                            items: [
                                {
                                    xtype: 'mypanel1'
                                },
                                {
                                    xtype: 'mypanel2'
                                }
                            ]
                        }
                    ]
                }
            ],
            items: [
                {
                    xtype: 'container',
                    itemId: 'ctModuleWrap',
                    layout: {
                        type: 'card'
                    }
                }
            ]
        });

        me.callParent(arguments);
    }

});