import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        calender: {
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
        changeWeekStart (state, payload) {
            state.calender.weekStart.day = payload.day;
            state.calender.weekStart.month = payload.month;
            state.calender.weekStart.year = payload.year;
        },
        changeWeekEnd (state, payload) {
            state.calender.weekEnd.day = payload.day;
            state.calender.weekEnd.month = payload.month;
            state.calender.weekEnd.year = payload.year;
        },
        setToday (state, payload) {
            state.calender.today.day = payload.day;
            state.calender.today.month = payload.month;
            state.calender.today.year = payload.year;
        },
        setScreen (state, payload) {
            switch (payload) {
                case "HOME":
                    state.screen = 0;
                    break;
                case "CALENDER":
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
    },
    actions: {}
});