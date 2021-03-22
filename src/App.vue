<template>
  <div id="app">
    <!-- Calender view -->
    <!-- Headlines are allways the same. They are not gonna change. -->
    <Header
      studienbereich="Angewandte Physik und Medizintechnik"
      fachbereich="Ing. Wissenschaften"
    />
    
    <!-- "Bottom" and "Top" content changes with Navigation-Buttons -->
    <div id="top" style="display: flex; height: 20%">
      <CalenderSwitch />
    </div>

    <div class="bottom">
      <Calender />
      <Navigation />
    </div>



    <hr />
    
    <!-- Home view -->
    <Header
      studienbereich="Angewandte Physik und Medizintechnik"
      fachbereich="Ingenieurwissenschaften"
    />
    <div style="display: flex; height: 20%">
      <Roomnumber roomnumber="A-317" />
      <Roominfo roomtype="Seminarraum" roomseats="30 Sitzplätze" />
    </div>
    <div class="bottom">
      <div id="notifications">
        <Announcements />
        <Lostandfound />
      </div>
      <Events />
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
import Calender from "./components/Calender.vue";
import CalenderSwitch from "./components/CalenderSwitch.vue";

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
    Calender,
    CalenderSwitch,
  },
  data() {
    return {};
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
.bottom {
  display: flex;
  height: 70%;
}
#notifications {
  display: block;
  box-sizing: border-box;
  margin: 0 1px;
  overflow: scroll;
  min-width: 25%;
  width: 35%;
}
#events {
  min-width: 25%;
  width: 55%;
}
#navigation {
  min-width: 15%;
  width: 15%;
}
::-webkit-scrollbar {
  display: none;
}
</style>
