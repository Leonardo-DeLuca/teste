topSuite("Ext.calendar.panel.Panel", ['Ext.calendar.*'], function() {
    var describeTouch =  Ext.supports.Touch ? describe : xdescribe,
        view, cell;

    function makeView(cfg) {
        cfg = Ext.apply({
            width: 800,
            height: 600
        }, cfg);
        view = new Ext.calendar.panel.Panel(cfg);
        view.render(Ext.getBody());
        view.getView().activeView.getView().doRefresh();
    }

    afterEach(function() {
        view = Ext.destroy(view);
    });

    // EXTJS-26815
    describe("TodayCellCls", function() {
        describe("month view", function() {
            var weekCls = "x-today-cell-highlight-weeks-day";

            it("calender should be having the today cell highlighted when config is true", function() {
                makeView({
                    highlightToday: true
                });

                var monthView = view.getView();

                expect(monthView.el.selectNode('.' + weekCls)).toBeTruthy();
            });

            it("calender should not be having the today cell highlighted when config is false", function() {
                makeView({
                    highlightToday: false
                });

                var monthView = view.getView();

                expect(monthView.el.selectNode('.' + weekCls)).toBeNull();
            });
        });

        describe("week view", function() {
            var dayCls = "x-today-cell-highlight-day";

            it("calender should be having the today cell highlighted when config is true", function() {
                makeView({
                    highlightToday: true,
                    defaultView: 'week'
                });

                var weekView = view.getView();

                expect(weekView.el.selectNode('.' + dayCls)).toBeTruthy();
            });

            it("calender should not be having the today cell highlighted when config is false", function() {
                makeView({
                    highlightToday: false,
                    defaultView: 'week'
                });

                var weekView = view.getView();

                expect(weekView.el.selectNode('.' + dayCls)).toBeNull();
            });
        });
    });

    describeTouch("Touch interaction", function() {
        var calendarView;

        beforeEach(function() {
            makeView({
                highlightToday: true,
                store: {
                    model: 'Ext.calendar.model.Calendar',
                    data: [{
                        id: 1,
                        title: "Personal Meeting",
                        name: 'Event A',
                        startDate: new Date(),
                        endDate: new Date(),
                        allDay: true
                    }, {
                        "id": 2,
                        "title": "Office Meeting",
                        name: 'Event B',
                        startDate: new Date(),
                        endDate: new Date(),
                        allDay: true
                    }, {
                        "id": 3,
                        "title": "Scrum Call",
                        name: 'Event 5',
                        startDate: new Date(),
                        endDate: new Date(),
                        allDay: true
                    }, {
                        "id": 4,
                        "title": "Personal Alarm",
                        name: 'Event 4',
                        startDate: new Date(),
                        endDate: new Date(),
                        allDay: true
                    }, {
                        "id": 5,
                        "title": "Appointment",
                        name: 'Event 8',
                        startDate: new Date(),
                        endDate: new Date(),
                        allDay: true
                    }]
                }
            });
            calendarView = view.getView().activeView.getView();
        });
        afterEach(function() {
            if (calendarView.form.getEl) {
                calendarView.form.getEl().down('.x-calendar-picker-field-icon').destroy();
            }

            view = view.destroy();
        });
        describe("month view", function() {
            it("should display 'Add Events' form on tap", function() {
                cell = calendarView.getCell(new Date());
                Ext.testHelper.touchStart(cell);
                waitsFor(function() {
                    return calendarView.form && calendarView.form.isVisible();
                });
                runs(function() {
                    expect(calendarView.form.isVisible()).toBeTruthy();
                });
            });
        });

        describe("week view", function() {
            it("should display 'Add Events' form on tap", function() {
                var calenderEvent, header, column, widget, selectField;

                view.getView().setView('week');
                calendarView = view.getView().activeView.getView();

                waitsFor(function() {
                    return calendarView.getColumn(0);
                });
                runs(function() {
                    column = calendarView.getColumn(0);
                    header = calendarView.getHeader(0);
                    Ext.testHelper.touchStart(calendarView.getColumn(0));
                    Ext.testHelper.touchMove(calendarView.getColumn(0), { x: 0, y: 60 });
                    Ext.testHelper.touchEnd(calendarView.getColumn(0));
                    calenderEvent = Ext.get(column).el.down('.x-calendar-event');
                    widget = Ext.get(column).down('.x-calendar-event-day').dom;
                    Ext.testHelper.touchStart(widget);
                    Ext.testHelper.touchEnd(widget);
                    waitsFor(function() {
                        calenderEvent = calenderEvent.component.destroy();

                        return calendarView.form && calendarView.form.isVisible();
                    });
                    runs(function() {
                        expect(calendarView.form.isVisible()).toBeTruthy();
                        selectField = calendarView.form.down('calendar-calendar-picker');
                        selectField.expand();
                        expect(selectField.getPicker().isVisible()).toBeTruthy();
                        Ext.get(header.cells[0]).destroy();
                        header = header.destroy();
                        widget = Ext.get(widget).destroy();
                        Ext.get(column).down('.x-calendar-days-day-event-container').destroy();
                        column = Ext.get(column).destroy();
                    });
                });
            });
        });
    });
});
