Ext.define("Ext.locale.af.data.summary.Count", {
    override: "Ext.data.summary.Count",

    text: "Tel"
});
/**
 * List compiled by mystix on the extjs.com forums.
 * Thank you Mystix!
 *
 * Afrikaans Translations
 * by Thys Meintjes (20 July 2007)
 */
Ext.onReady(function() {

    if (Ext.Date) {
        Ext.Date.monthNames = ["Januarie", "Februarie", "Maart", "April", "Mei", "Junie", "Julie", "Augustus", "September", "Oktober", "November", "Desember"];

        Ext.Date.dayNames = ["Sondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrydag", "Saterdag"];
    }

    if (Ext.util && Ext.util.Format) {
        Ext.apply(Ext.util.Format, {
            thousandSeparator: '.',
            decimalSeparator: ',',
            currencySign: 'R',
            // Sith Efrikan Rand
            dateFormat: 'd-m-Y'
        });
    }
});

Ext.define("Ext.locale.af.view.View", {
    override: "Ext.view.View",
    emptyText: ""
});

Ext.define("Ext.locale.af.grid.plugin.DragDrop", {
    override: "Ext.grid.plugin.DragDrop",
    dragText: "{0} geselekteerde ry(e)"
});

Ext.define("Ext.locale.af.tab.Tab", {
    override: "Ext.tab.Tab",
    closeText: "Maak die oortjie toe"
});

Ext.define("Ext.locale.af.form.field.Base", {
    override: "Ext.form.field.Base",
    invalidText: "Die waarde in hierdie veld is foutief"
});

// changing the msg text below will affect the LoadMask
Ext.define("Ext.locale.af.view.AbstractView", {
    override: "Ext.view.AbstractView",
    loadingText: "Besig om te laai..."
});

Ext.define("Ext.locale.af.picker.Date", {
    override: "Ext.picker.Date",
    todayText: "Vandag",
    minText: "Hierdie datum is vroër as die minimum datum",
    maxText: "Hierdie dataum is later as die maximum datum",
    disabledDaysText: "",
    disabledDatesText: "",
    nextText: 'Volgende Maand (Beheer+Regs)',
    prevText: 'Vorige Maand (Beheer+Links)',
    monthYearText: "Kies 'n maand (Beheer+Op/Af volgende/vorige jaar)",
    todayTip: "{0} (Spasie)",
    format: "d-m-y",
    startDay: 0
});

Ext.define("Ext.locale.af.toolbar.Paging", {
    override: "Ext.PagingToolbar",
    beforePageText: "Bladsy",
    afterPageText: "van {0}",
    firstText: "Eerste Bladsy",
    prevText: "Vorige Bladsy",
    nextText: "Volgende Bladsy",
    lastText: "Laatste Bladsy",
    refreshText: "Verfris",
    displayMsg: "Wys {0} - {1} van {2}",
    emptyMsg: 'Geen data om te wys nie'
});

Ext.define("Ext.locale.af.form.field.Text", {
    override: "Ext.form.field.Text",
    minLengthText: "Die minimum lengte van die veld is {0}",
    maxLengthText: "Die maximum lengte van die veld is {0}",
    blankText: "Die veld is verpligtend",
    regexText: "",
    emptyText: null
});

Ext.define("Ext.locale.af.form.field.Number", {
    override: "Ext.form.field.Number",
    minText: "Die minimum waarde vir die veld is {0}",
    maxText: "Die maximum waarde vir die veld is {0}",
    nanText: "{0} is nie 'n geldige waarde nie"
});

Ext.define("Ext.locale.af.form.field.Date", {
    override: "Ext.form.field.Date",
    disabledDaysText: "Afgeskakel",
    disabledDatesText: "Afgeskakel",
    minText: "Die datum in hierdie veld moet na {0} wees",
    maxText: "Die datum in hierdie veld moet voor {0} wees",
    invalidText: "{0} is nie 'n geldige datum nie - datumformaat is {1}",
    format: "d/m/y",
    altFormats: "d/m/Y|d-m-y|d-m-Y|d/m|d-m|dm|dmy|dmY|d|Y-m-d"
});

Ext.define("Ext.locale.af.form.field.ComboBox", {
    override: "Ext.form.field.ComboBox",
    valueNotFoundText: undefined
}, function() {
    Ext.apply(Ext.form.field.ComboBox.prototype.defaultListConfig, {
        loadingText: "Besig om te laai..."
    });
});

Ext.define("Ext.locale.af.form.field.VTypes", {
    override: "Ext.form.field.VTypes",
    emailText: "Hierdie veld moet 'n e-pos adres wees met die formaat 'gebruiker@domein.za'",
    urlText: "Hierdie veld moet 'n URL wees me die formaat 'http:/'+'/www.domein.za'",
    alphaText: 'Die veld mag alleenlik letters en _ bevat',
    alphanumText: 'Die veld mag alleenlik letters, syfers en _ bevat'
});

Ext.define("Ext.locale.af.grid.header.Container", {
    override: "Ext.grid.header.Container",
    sortAscText: "Sorteer Oplopend",
    sortDescText: "Sorteer Aflopend",
    lockText: "Vries Kolom",
    unlockText: "Ontvries Kolom",
    columnsText: "Kolomme"
});

Ext.define("Ext.locale.af.grid.PropertyColumnModel", {
    override: "Ext.grid.PropertyColumnModel",
    nameText: "Naam",
    valueText: "Waarde",
    dateFormat: "Y-m-j"
});

Ext.define("Ext.locale.af.window.MessageBox", {
    override: "Ext.window.MessageBox",
    buttonText: {
        ok: "OK",
        cancel: "Kanselleer",
        yes: "Ja",
        no: "Nee"
    }
});

// This is needed until we can refactor all of the locales into individual files
Ext.define("Ext.locale.af.Component", {
    override: "Ext.Component"
});
Ext.define("Ext.locale.af.grid.feature.AdvancedGrouping", {
    override: "Ext.grid.feature.AdvancedGrouping",

    expandAllText: "Brei almal uit",
    collapseAllText: "Ineenstort",
    groupsText: "Groepe",
    groupByText: "Groep deur hierdie veld",
    addToGroupingText: "Voeg by groepering",
    removeFromGroupingText: "Verwyder uit groepering",
    groupSummaryTpl: "Opsomming ({name})",
    summaryTpl: "Opsomming ({store.data.length})"
});
Ext.define("Ext.locale.af.grid.plugin.Summaries", {
    override: "Ext.grid.plugin.Summaries",

    textNone: "Geen",
    summaryText: "Opsomming"
});
Ext.define("Ext.locale.af.grid.plugin.filterbar.Operator", {
    override: "Ext.grid.plugin.filterbar.Operator",

    operatorsTextMap: {
        eq: "Is gelyk",
        ne: "Nie gelyk nie",
        gt: "Groter as",
        ge: "Groter as of gelyk aan",
        lt: "Minder as",
        le: "Minder as of gelyk aan",
        like: "Soos",
        nlike: "Nie soos",
        empty: "Leegmaak",
        nempty: "Nie leeg nie",
        identical: "Identies",
        nidentical: "Nie identies nie",
        regex: "Gewone uitdrukking",
        "in": "Is in",
        notin: "Is nie in nie"
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
Ext.define("Ext.locale.af.grid.plugin.grouping.Panel", {
    override: "Ext.grid.plugin.grouping.Panel",

    groupingPanelText: "Sleep 'n kolomopskrif hier om deur die kolom te groepeer",
    showGroupingPanelText: "Wys groep per paneel",
    hideGroupingPanelText: "Versteek groep deur paneel",
    clearGroupText: "Duidelike groep",
    sortAscText: "Sorteer stygend",
    sortDescText: "Sorteer aflopend",
    moveLeftText: "Skuif na links",
    moveRightText: "Beweeg regs",
    moveBeginText: "Beweeg om te begin",
    moveEndText: "Beweeg om te eindig",
    removeText: "Verwyder"
});
