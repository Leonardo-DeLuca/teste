Ext.define("Ext.locale.pt.data.summary.Count", {
    override: "Ext.data.summary.Count",

    text: "Contar"
});
/**
 * Portuguese/Brazil Translation by Weber Souza
 * 08 April 2007
 * Updated by Allan Brazute Alves (EthraZa)
 * 06 September 2007
 * Adapted to European Portuguese by Helder Batista (hbatista)
 * 31 January 2008
 */
Ext.onReady(function() {

    if (Ext.Date) {
        Ext.Date.monthNames = ["Janeiro", "Fevereiro", "Mar&ccedil;o", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

        Ext.Date.dayNames = ["Domingo", "Segunda", "Ter&ccedil;a", "Quarta", "Quinta", "Sexta", "S&aacute;bado"];
    }

    if (Ext.util && Ext.util.Format) {
        Ext.apply(Ext.util.Format, {
            thousandSeparator: '.',
            decimalSeparator: ',',
            currencySign: '\u20ac',
            // Portugese Euro
            dateFormat: 'd/m/Y'
        });
    }
});

Ext.define("Ext.locale.pt.view.View", {
    override: "Ext.view.View",
    emptyText: ""
});

Ext.define("Ext.locale.pt.grid.plugin.DragDrop", {
    override: "Ext.grid.plugin.DragDrop",
    dragText: "{0} linha(s) seleccionada(s)"
});

Ext.define("Ext.locale.pt.tab.Tab", {
    override: "Ext.tab.Tab",
    closeText: "Fechar"
});

Ext.define("Ext.locale.pt.form.field.Base", {
    override: "Ext.form.field.Base",
    invalidText: "O valor para este campo &eacute; inv&aacute;lido"
});

// changing the msg text below will affect the LoadMask
Ext.define("Ext.locale.pt.view.AbstractView", {
    override: "Ext.view.AbstractView",
    loadingText: "Carregando..."
});

Ext.define("Ext.locale.pt.picker.Date", {
    override: "Ext.picker.Date",
    todayText: "Hoje",
    minText: "Esta data &eacute; anterior &agrave; menor data",
    maxText: "Esta data &eacute; posterior &agrave; maior data",
    disabledDaysText: "",
    disabledDatesText: "",
    nextText: 'Pr&oacute;ximo M&ecirc;s (Control+Direita)',
    prevText: 'M&ecirc;s Anterior (Control+Esquerda)',
    monthYearText: 'Escolha um M&ecirc;s (Control+Cima/Baixo para mover entre os anos)',
    todayTip: "{0} (Espa&ccedil;o)",
    format: "d/m/Y",
    startDay: 0
});

Ext.define("Ext.locale.pt.picker.Month", {
    override: "Ext.picker.Month",
    okText: "&#160;OK&#160;",
    cancelText: "Cancelar"
});

Ext.define("Ext.locale.pt.toolbar.Paging", {
    override: "Ext.PagingToolbar",
    beforePageText: "P&aacute;gina",
    afterPageText: "de {0}",
    firstText: "Primeira P&aacute;gina",
    prevText: "P&aacute;gina Anterior",
    nextText: "Pr&oacute;xima P&aacute;gina",
    lastText: "&Uacute;ltima P&aacute;gina",
    refreshText: "Atualizar",
    displayMsg: "<b>{0} &agrave; {1} de {2} registo(s)</b>",
    emptyMsg: 'Sem registos para exibir'
});

Ext.define("Ext.locale.pt.form.field.Text", {
    override: "Ext.form.field.Text",
    minLengthText: "O tamanho m&iacute;nimo para este campo &eacute; {0}",
    maxLengthText: "O tamanho m&aacute;ximo para este campo &eacute; {0}",
    blankText: "Este campo &eacute; obrigat&oacute;rio.",
    regexText: "",
    emptyText: null
});

Ext.define("Ext.locale.pt.form.field.Number", {
    override: "Ext.form.field.Number",
    minText: "O valor m&iacute;nimo para este campo &eacute; {0}",
    maxText: "O valor m&aacute;ximo para este campo &eacute; {0}",
    nanText: "{0} n&atilde;o &eacute; um n&uacute;mero v&aacute;lido"
});

Ext.define("Ext.locale.pt.form.field.Date", {
    override: "Ext.form.field.Date",
    disabledDaysText: "Desabilitado",
    disabledDatesText: "Desabilitado",
    minText: "A data deste campo deve ser posterior a {0}",
    maxText: "A data deste campo deve ser anterior a {0}",
    invalidText: "{0} n&atilde;o &eacute; uma data v&aacute;lida - deve ser usado o formato {1}",
    format: "d/m/Y"
});

Ext.define("Ext.locale.pt.form.field.ComboBox", {
    override: "Ext.form.field.ComboBox",
    valueNotFoundText: undefined
}, function() {
    Ext.apply(Ext.form.field.ComboBox.prototype.defaultListConfig, {
        loadingText: "Carregando..."
    });
});

Ext.define("Ext.locale.pt.form.field.VTypes", {
    override: "Ext.form.field.VTypes",
    emailText: 'Este campo deve ser um endere&ccedil;o de e-mail v&aacute;lido, no formato "utilizador@dominio.com"',
    urlText: 'Este campo deve ser um URL no formato "http:/' + '/www.dominio.com"',
    alphaText: 'Este campo deve conter apenas letras e _',
    alphanumText: 'Este campo deve conter apenas letras, n&uacute;meros e _'
});

Ext.define("Ext.locale.pt.form.field.HtmlEditor", {
    override: "Ext.form.field.HtmlEditor",
    createLinkText: 'Por favor, entre com o URL do link:'
}, function() {
    Ext.apply(Ext.form.field.HtmlEditor.prototype, {
        buttonTips: {
            bold: {
                title: 'Negrito (Ctrl+B)',
                text: 'Deixa o texto seleccionado em negrito.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            italic: {
                title: 'Italico (Ctrl+I)',
                text: 'Deixa o texto seleccionado em italico.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            underline: {
                title: 'Sublinhado (Ctrl+U)',
                text: 'Sublinha o texto seleccionado.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            increasefontsize: {
                title: 'Aumentar Texto',
                text: 'Aumenta o tamanho da fonte.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            decreasefontsize: {
                title: 'Diminuir Texto',
                text: 'Diminui o tamanho da fonte.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            backcolor: {
                title: 'Cor de Fundo',
                text: 'Muda a cor do fundo do texto seleccionado.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            forecolor: {
                title: 'Cor da Fonte',
                text: 'Muda a cor do texto seleccionado.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            justifyleft: {
                title: 'Alinhar &agrave; Esquerda',
                text: 'Alinha o texto &agrave; esquerda.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            justifycenter: {
                title: 'Centrar Texto',
                text: 'Centra o texto no editor.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            justifyright: {
                title: 'Alinhar &agrave; Direita',
                text: 'Alinha o texto &agrave; direita.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            insertunorderedlist: {
                title: 'Lista com Marcadores',
                text: 'Inicia uma lista com marcadores.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            insertorderedlist: {
                title: 'Lista Numerada',
                text: 'Inicia uma lista numerada.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            createlink: {
                title: 'Hyperliga&ccedil;&atilde;o',
                text: 'Transforma o texto selecionado num hyperlink.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            sourceedit: {
                title: 'Editar Fonte',
                text: 'Troca para o modo de edi&ccedil;&atilde;o de c&oacute;digo fonte.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            }
        }
    });
});

Ext.define("Ext.locale.pt.grid.header.Container", {
    override: "Ext.grid.header.Container",
    sortAscText: "Ordem Ascendente",
    sortDescText: "Ordem Descendente",
    lockText: "Bloquear Coluna",
    unlockText: "Desbloquear Coluna",
    columnsText: "Colunas"
});

Ext.define("Ext.locale.pt.grid.PropertyColumnModel", {
    override: "Ext.grid.PropertyColumnModel",
    nameText: "Nome",
    valueText: "Valor",
    dateFormat: "d/m/Y"
});

Ext.define("Ext.locale.pt.window.MessageBox", {
    override: "Ext.window.MessageBox",
    buttonText: {
        ok: "OK",
        cancel: "Cancelar",
        yes: "Sim",
        no: "N&atilde;o"
    }
});

// This is needed until we can refactor all of the locales into individual files
Ext.define("Ext.locale.pt.Component", {
    override: "Ext.Component"
});
Ext.define("Ext.locale.pt.grid.feature.AdvancedGrouping", {
    override: "Ext.grid.feature.AdvancedGrouping",

    expandAllText: "Expandir todos",
    collapseAllText: "Recolher todos",
    groupsText: "Grupos",
    groupByText: "Agrupar por este campo",
    addToGroupingText: "Adicionar ao agrupamento",
    removeFromGroupingText: "Remover do agrupamento",
    groupSummaryTpl: "Resumo ({name})",
    summaryTpl: "Resumo ({store.data.length})"
});
Ext.define("Ext.locale.pt.grid.plugin.Summaries", {
    override: "Ext.grid.plugin.Summaries",

    textNone: "Nenhum",
    summaryText: "Resumo"
});
Ext.define("Ext.locale.pt.grid.plugin.filterbar.Operator", {
    override: "Ext.grid.plugin.filterbar.Operator",

    operatorsTextMap: {
        eq: "É igual",
        ne: "Não igual",
        gt: "Maior que",
        ge: "Maior ou igual a",
        lt: "Menor que",
        le: "Menor ou igual a",
        like: "Parece",
        nlike: "Não parece",
        empty: "Vazio",
        nempty: "Não está vazio",
        identical: "Idêntico",
        nidentical: "Não idênticos",
        regex: "Expressão regular",
        "in": "Está dentro",
        notin: "Não está dentro"
    }
}, function() {
    var prototype = this.prototype,
        texts = prototype.operatorsTextMap;

    texts['='] = texts.eq;
    texts['=='] = texts.eq;
    texts['!='] = texts.ne;
    texts['==='] = texts.identical;
    texts['!=='] = texts.nidentical;
    texts['>'] = texts.gt;
    texts['>='] = texts.ge;
    texts['<'] = texts.lt;
    texts['<='] = texts.le;
    texts['/='] = texts.regex;
});
Ext.define("Ext.locale.pt.grid.plugin.grouping.Panel", {
    override: "Ext.grid.plugin.grouping.Panel",

    groupingPanelText: "Arraste um cabeçalho de coluna aqui para agrupar por essa coluna",
    showGroupingPanelText: "Mostrar painel de agrupamento",
    hideGroupingPanelText: "Ocultar o grupo por painel",
    clearGroupText: "Limpar Grupo",
    sortAscText: "Ordem Ascendente",
    sortDescText: "Ordem Descendente",
    moveLeftText: "Mover para esquerda",
    moveRightText: "Mover para direita",
    moveBeginText: "Mover para início",
    moveEndText: "Mover para o final",
    removeText: "Remover"
});
