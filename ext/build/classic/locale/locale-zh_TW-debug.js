Ext.define("Ext.locale.zh_TW.data.summary.Count", {
    override: "Ext.data.summary.Count",

    text: "數數"
});
/**
 * Traditional Chinese translation
 * By hata1234
 * 09 April 2007
 */
Ext.onReady(function() {
    var parseCodes;

    if (Ext.Date) {
        Ext.Date.monthNames = ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"];

        Ext.Date.dayNames = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];

        Ext.Date.formatCodes.a = "(this.getHours() < 12 ? '上午' : '下午')";
        Ext.Date.formatCodes.A = "(this.getHours() < 12 ? '上午' : '下午')";

        parseCodes = {
            g: 1,
            c: "if (/(上午)/i.test(results[{0}])) {\n" +
                "if (!h || h == 12) { h = 0; }\n" +
                "} else { if (!h || h < 12) { h = (h || 0) + 12; }}",
            s: "(上午|下午)",
            calcAtEnd: true
        };

        Ext.Date.parseCodes.a = Ext.Date.parseCodes.A = parseCodes;
    }

    if (Ext.util && Ext.util.Format) {
        Ext.apply(Ext.util.Format, {
            thousandSeparator: ',',
            decimalSeparator: '.',
            currencySign: '\u00a5',
            // Chinese Yuan
            dateFormat: 'Y/m/d'
        });
    }
});

Ext.define("Ext.locale.zh_TW.view.View", {
    override: "Ext.view.View",
    emptyText: ""
});

Ext.define("Ext.locale.zh_TW.grid.plugin.DragDrop", {
    override: "Ext.grid.plugin.DragDrop",
    dragText: "選擇了 {0} 行"
});

Ext.define("Ext.locale.zh_TW.tab.Tab", {
    override: "Ext.tab.Tab",
    closeText: "關閉此標籤"
});

Ext.define("Ext.locale.zh_TW.form.field.Base", {
    override: "Ext.form.field.Base",
    invalidText: "數值不符合欄位規定"
});

// changing the msg text below will affect the LoadMask
Ext.define("Ext.locale.zh_TW.view.AbstractView", {
    override: "Ext.view.AbstractView",
    loadingText: "讀取中..."
});

Ext.define("Ext.locale.zh_TW.picker.Date", {
    override: "Ext.picker.Date",
    todayText: "今天",
    minText: "日期必須大於最小容許日期",
    maxText: "日期必須小於最大容許日期",
    disabledDaysText: "",
    disabledDatesText: "",
    nextText: "下個月 (Ctrl+右方向鍵)",
    prevText: "上個月 (Ctrl+左方向鍵)",
    monthYearText: "選擇月份 (Ctrl+上/下方向鍵選擇年份)",
    format: "y/m/d",
    ariaTitle: '{0}',
    ariaTitleDateFormat: 'Y\u5e74m\u6708d\u65e5',
    longDayFormat: 'Y\u5e74m\u6708d\u65e5',
    monthYearFormat: 'Y\u5e74m\u6708',
    getDayInitial: function(value) {
        // Grab the last character
        return value.substr(value.length - 1);
    }
});

Ext.define("Ext.locale.zh_TW.picker.Month", {
    override: "Ext.picker.Month",
    okText: "确定",
    cancelText: "取消"
});

Ext.define("Ext.locale.zh_TW.toolbar.Paging", {
    override: "Ext.PagingToolbar",
    beforePageText: "第",
    afterPageText: "頁，共{0}頁",
    firstText: "第一頁",
    prevText: "上一頁",
    nextText: "下一頁",
    lastText: "最後頁",
    refreshText: "重新整理",
    displayMsg: "顯示{0} - {1}筆,共{2}筆",
    emptyMsg: '沒有任何資料'
});

Ext.define("Ext.locale.zh_TW.form.field.Text", {
    override: "Ext.form.field.Text",
    minLengthText: "此欄位最少要輸入 {0} 個字",
    maxLengthText: "此欄位最多輸入 {0} 個字",
    blankText: "此欄位為必填",
    regexText: "",
    emptyText: null
});

Ext.define("Ext.locale.zh_TW.form.field.Number", {
    override: "Ext.form.field.Number",
    minText: "此欄位之數值必須大於 {0}",
    maxText: "此欄位之數值必須小於 {0}",
    nanText: "{0} 不是合法的數字"
});

Ext.define("Ext.locale.zh_TW.form.field.Date", {
    override: "Ext.form.field.Date",
    disabledDaysText: "無法使用",
    disabledDatesText: "無法使用",
    minText: "此欄位之日期必須在 {0} 之後",
    maxText: "此欄位之日期必須在 {0} 之前",
    invalidText: "{0} 不是正確的日期格式 - 必須像是 「 {1} 」 這樣的格式",
    format: "Y/m/d"
});

Ext.define("Ext.locale.zh_TW.form.field.ComboBox", {
    override: "Ext.form.field.ComboBox",
    valueNotFoundText: undefined
}, function() {
    Ext.apply(Ext.form.field.ComboBox.prototype.defaultListConfig, {
        loadingText: "讀取中 ..."
    });
});

Ext.define("Ext.locale.zh_TW.form.field.VTypes", {
    override: "Ext.form.field.VTypes",
    emailText: '此欄位必須輸入像 "user@example.com" 之E-Mail格式',
    urlText: '此欄位必須輸入像 "http:/' + '/www.example.com" 之網址格式',
    alphaText: '此欄位僅能輸入半形英文字母及底線( _ )符號',
    alphanumText: '此欄位僅能輸入半形英文字母、數字及底線( _ )符號'
});

Ext.define("Ext.locale.zh_TW.grid.header.Container", {
    override: "Ext.grid.header.Container",
    sortAscText: "正向排序",
    sortDescText: "反向排序",
    lockText: "鎖定欄位",
    unlockText: "解開欄位鎖定",
    columnsText: "欄位"
});

Ext.define("Ext.locale.zh_TW.grid.PropertyColumnModel", {
    override: "Ext.grid.PropertyColumnModel",
    nameText: "名稱",
    valueText: "數值",
    dateFormat: "Y/m/d"
});

Ext.define("Ext.locale.zh_TW.window.MessageBox", {
    override: "Ext.window.MessageBox",
    buttonText: {
        ok: "確定",
        cancel: "取消",
        yes: "是",
        no: "否"
    }
});

// This is needed until we can refactor all of the locales into individual files
Ext.define("Ext.locale.zh_TW.Component", {
    override: "Ext.Component"
});
Ext.define("Ext.locale.zh_TW.grid.feature.AdvancedGrouping", {
    override: "Ext.grid.feature.AdvancedGrouping",

    expandAllText: "展開全部",
    collapseAllText: "全部收縮",
    groupsText: "團體",
    groupByText: "小組由此字段",
    addToGroupingText: "添加到分組",
    removeFromGroupingText: "從分組中刪除",
    groupSummaryTpl: "概括 ({name})",
    summaryTpl: "概括 ({store.data.length})"
});
Ext.define("Ext.locale.zh_TW.grid.plugin.Summaries", {
    override: "Ext.grid.plugin.Summaries",

    textNone: "沒有任何",
    summaryText: "概括"
});
Ext.define("Ext.locale.zh_TW.grid.plugin.filterbar.Operator", {
    override: "Ext.grid.plugin.filterbar.Operator",

    operatorsTextMap: {
        eq: "是平等的",
        ne: "不平等",
        gt: "比...更棒",
        ge: "大於或等於",
        lt: "少於",
        le: "小於或等於",
        like: "喜歡",
        nlike: "不喜歡",
        empty: "空的",
        nempty: "不是空的",
        identical: "完全相同的",
        nidentical: "沒有相同",
        regex: "正則表達式",
        "in": "是",
        notin: "不是在"
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
Ext.define("Ext.locale.zh_TW.grid.plugin.grouping.Panel", {
    override: "Ext.grid.plugin.grouping.Panel",

    groupingPanelText: "將列標題拖動到該列的組",
    showGroupingPanelText: "按面板展示集團",
    hideGroupingPanelText: "通過面板隱藏小組",
    clearGroupText: "明確的群體",
    sortAscText: "升序",
    sortDescText: "排序下降",
    moveLeftText: "向左移動",
    moveRightText: "向右移",
    moveBeginText: "搬到開始",
    moveEndText: "搬到結束",
    removeText: "消除"
});
