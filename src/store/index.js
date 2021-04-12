import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        timings: [],
        meetings: [],
        persons: [],
        calendar: {
            today: {
                day: '',
                month: '',
                year: '',
                testDate: '2021-03-15'
            },
            weekStart: {
                day: '',
                month: '',
                year: ''
            },
            weekEnd: {
                day: '',
                month: '',
                year: ''
            }
        },
        screen: 0,
    },
    getters: {},
    mutations: {
        changeWeekStart(state, payload) {
            state.calendar.weekStart.day = payload.day;
            state.calendar.weekStart.month = payload.month;
            state.calendar.weekStart.year = payload.year;
        },
        changeWeekEnd(state, payload) {
            state.calendar.weekEnd.day = payload.day;
            state.calendar.weekEnd.month = payload.month;
            state.calendar.weekEnd.year = payload.year;
        },
        setToday(state, payload) {
            state.calendar.today.day = payload.day;
            state.calendar.today.month = payload.month;
            state.calendar.today.year = payload.year;
        },
        setScreen(state, payload) {
            switch (payload) {
                case "HOME":
                    state.screen = 0;
                    break;
                case "CALENDAR":
                    state.screen = 1;
                    break;
                case "INFO":
                    state.screen = 2;
                    break;
                default:
                    state.screen = 0;
                    break;
            }
        },
        importTimings(state, payload) {
            state.timings = payload.data;
        },
        importMeetings(state, payload) {
            state.meetings = payload.data;
        },
        importPersons(state, payload) {
            state.persons = payload.data;
        },
    },
    actions: {}
});