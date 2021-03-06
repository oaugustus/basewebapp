/*
 * File: app/controller/ui/LoginController.js
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

Ext.define('App.controller.ui.LoginController', {
    extend: 'Ext.app.Controller',

    routeAlias: 'login',
    routes: {
        '/': 'index'
    },
    authError: {
        usuario: {
            message: 'Usuário ou senha inválidos',
            width: 250
        }
    },

    refs: [
        {
            ref: 'loginPanel',
            selector: 'loginpanel',
            xtype: 'Ext.panel.Panel'
        },
        {
            ref: 'uiViewport',
            selector: 'uiviewport',
            xtype: 'Ext.container.Viewport'
        }
    ],

    panelLoginActivate: function(component, eOpts) {
        // coloca o foco no campo de login
        component.down('#txtLogin').focus(false, 250);
    },

    panelRecuperarSenhaActivate: function(component, eOpts) {
        // coloca o foco no campo de e-mail
        component.down('#txtEmail').focus(false, 250);
    },

    txtLoginKeyPress: function(textfield, e, eOpts) {
        var form = textfield.up('form');

        // se pressionou a tecla enter
        if (e.getKey() == 13) {
            // coloca o foco no campo de senha
            form.down('#txtSenha').focus();
        }
    },

    txtPassKeyPress: function(textfield, e, eOpts) {
        var form = textfield.up('form');

        // se pressionou a tecla enter
        if (e.getKey() == 13){
            // aciona a ação de clique do botão de acesso
            this.acessarClick(form.down('#btnAcessar'));
        }
    },

    acessarClick: function(button, e, eOpts) {
        var form = button.up('form');

        // se o formulário estiver válido
        if (form.isValid()) {
            form.up('loginpanel').setLoading('Validando usuário...');

            // chama o método remoto de validação de autenticação
            Actions.NetonApp_Security.auth(form.getValues(), this.onAuthResponse, this);
        }
    },

    txtEmailKeyPress: function(textfield, e, eOpts) {
        var form = textfield.up('form');

        // se pressionou a tecla enter
        if (e.getKey() == 13){
            // aciona a ação de recuperar senha
            this.recuperarSenhaClick(form.down('#btnSolicitarSenha'));
        }
    },

    recuperarSenhaClick: function(button, e, eOpts) {
        var form = button.up('form');

        // se o formulário for válido
        if (form.isValid()){
            form.up('loginpanel').setLoading('Solicitando recuperação...');

            Actions.NetonApp_Security.recoverPass(form.getValues(), this.onRecoverPassResponse, this)
        }
    },

    onAuthResponse: function(response) {
        var loginPanel = this.getLoginPanel();

        loginPanel.setLoading(false);

        // se a autenticação ocorreu
        if (response.success){
            this.getController('ui.DashboardController').showDashboardPanel();
        } else {
            Neton.Msg.flash({
                type: 'error',
                msg: this.authError[response.message].message,
                width: this.authError[response.message].width,
                callback: function(){
                    loginPanel.down('#txtLogin').focus(true, 250);
                }
            });
        }
    },

    showLoginPanel: function() {
        this.getUiViewport().getLayout().setActiveItem('panelLogin');
    },

    onRecoverPassResponse: function(response) {
        // oculta a máscara de carregamento
        this.getLoginPanel().setLoading(false);

        if (response === true){
            Neton.Msg.flash({
                type: 'success',
                msg: 'Sua senha foi enviada para o seu email',
                width: 300
            });
        } else {
            Neton.Msg.flash({
                type: 'error',
                msg: 'Usuário não localizado!',
                width: 200
            });
        }
    },

    index: function() {

    },

    init: function(application) {
        this.control({
            "loginpanel #panelLogin": {
                activate: this.panelLoginActivate
            },
            "loginpanel #panelRecuperarSenha": {
                activate: this.panelRecuperarSenhaActivate
            },
            "loginpanel #txtLogin": {
                keypress: this.txtLoginKeyPress
            },
            "loginpanel #txtSenha": {
                keypress: this.txtPassKeyPress
            },
            "loginpanel #btnAcessar": {
                click: this.acessarClick
            },
            "loginpanel #txtEmail": {
                keypress: this.txtEmailKeyPress
            },
            "loginpanel #btnSolicitarSenha": {
                click: this.recuperarSenhaClick
            }
        });
    }

});
