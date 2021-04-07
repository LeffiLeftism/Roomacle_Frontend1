<template>
  <div id="app">
    <!-- Headlines are allways the same. They are not gonna change. -->
    <Header
      studienbereich="Angewandte Physik und Medizintechnik"
      fachbereich="Ing. Wissenschaften"
    />

    <!-- "Bottom" and "Top" content changes with Navigation-Buttons -->
    <!-- Home view -->
    <div class="maxSize" v-if="this.$store.state.screen == 0">
      <div style="display: flex; height: 20%">
        <Roomnumber roomnumber="A-317" />
        <Roominfo roomtype="Seminarraum" roomseats="30 Sitzplätze" />
      </div>
      <div class="bottom">
        <div class="notifications">
          <Announcements />
          <Lostandfound />
        </div>
        <Events />
        <Navigation />
      </div>
    </div>
    <!-- End home view -->

    <!-- Calendar view -->
    <div class="maxSize" v-else-if="this.$store.state.screen == 1">
      <div id="top" style="display: flex; height: 20%">
        <CalendarSwitch />
      </div>

      <div class="bottom">
        <Calendar />
        <Navigation />
      </div>
    </div>
    <!-- End Calendar view -->

    <!-- Info view -->
    <div class="maxSize" v-else-if="this.$store.state.screen == 2">
      <div id="top" style="display: flex; height: 20%"></div>
      <div class="bottom">
        <CalendarGenerator />
        <Navigation />
      </div>
    </div>
    <!-- End Info view -->

    <Header
      studienbereich="Angewandte Physik und Medizintechnik"
      fachbereich="Ing. Wissenschaften"
    />
    <div style="display: flex; height: 20%">
      <Roomnumber roomnumber="A-317" />
      <div
        class="notifications"
        style="
          width: 60%;
          border: grey solid 2px;
          border-left: 1px;
          padding: 5px;
        "
      >
        <Announcements />
      </div>
      <!--Roominfo roomtype="Seminarraum" roomseats="30 Sitzplätze" /-->
    </div>
    <div class="bottom">
      <PersonsAll />
      <Navigation />
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Navigation from "./components/Navigation.vue";
import Announcements from "./components/Announcements.vue";
import Events from "./components/Events.vue";
import Lostandfound from "./components/Lostandfound.vue";
import Roomnumber from "./components/Roomnumber";
import Roominfo from "./components/Roominfo";
import Calendar from "./components/Calendar.vue";
import CalendarSwitch from "./components/CalendarSwitch.vue";
import CalendarGenerator from "./components/CalendarGenerator.vue";
import PersonsAll from "./components/PersonsAll.vue";

export default {
  name: "App",
  components: {
    Header,
    Navigation,
    Announcements,
    Events,
    Lostandfound,
    Roomnumber,
    Roominfo,
    Calendar,
    CalendarSwitch,
    CalendarGenerator,
    PersonsAll,
  },
  data() {
    return {};
  },
  computed: {
    test() {
      return this.$store.state.screen;
    },
  },
  methods: {
    open() {
      this.$vm2.open("modal-1");
    },
    close() {
      this.$vm2.close("modal-1");
    },
    print2console(content) {
      console.log(content);
    },
  },
  created() {},
};
</script>

<style>
#app {
  box-sizing: border-box;
  height: 480px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 0 5px;
}
#events {
  min-width: 25%;
  width: 55%;
}
#navigation {
  min-width: 15%;
  width: 15%;
}
.notifications {
  display: block;
  box-sizing: border-box;
  overflow: scroll;
  min-width: 25%;
  width: 35%;
}
.bottom {
  display: flex;
  height: 70%;
}
.maxSize {
  width: 100%;
  height: 100%;
}
.content {
  width: 85%;
}
::-webkit-scrollbar {
  display: none;
}
</style>
