<template>
  <div id="app">

    <!-- Headlines are allways the same. They are not gonna change. -->
    <Header
      studienbereich="Angewandte Physik und Medizintechnik"
      fachbereich="Ingenieurwissenschaften"
    />
    <div style="display: flex; height: 20%">
      <Roomnumber roomnumber="A-317" />
      <Roominfo roomtype="Seminarraum" roomseats="30 Sitzplätze" />
    </div>



    <!-- Bottom content changes with Navigation-Buttons -->
    <div class="bottom">
      <Calender />
      <Navigation />
    </div>

    <hr />

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

    <hr />

    <div style="width: 55%">
      <b-button-group>
        <b-button :disabled="false">
          Button 1 <br />
          bnt1
        </b-button>
        <b-button :disabled="false">Button 2</b-button>
        <b-button :disabled="true">Button 3</b-button>
        <b-button :disabled="false">Button 4</b-button>
        <b-button :disabled="false">Button 5</b-button>
        <b-button :disabled="false">Button 6</b-button>
      </b-button-group>
      <br />
      <b-button-group>
        <b-button :disabled="false">Button 1</b-button>
        <b-button :disabled="false">Button 2</b-button>
        <b-button :disabled="false">Button 3</b-button>
        <b-button :disabled="true">Button 4</b-button>
        <b-button :disabled="false">Button 5</b-button>
        <b-button :disabled="true">Button 6</b-button>
      </b-button-group>
      <br />
      <b-button-group>
        <b-button :disabled="true">Button 1</b-button>
        <b-button :disabled="false">Button 2</b-button>
        <b-button :disabled="false">Button 3</b-button>
        <b-button :disabled="false">Button 4</b-button>
        <b-button :disabled="false">Button 5</b-button>
        <b-button :disabled="false">Button 6</b-button>
      </b-button-group>
    </div>

    <br />
    <button @click="$vm2.open('modal-2')">Open normal modal</button>
    <vue-modal-2
      @on-close="$vm2.close('modal-2')"
      name="modal-2"
      :headerOptions="{
        title: 'Informations',
      }"
      noFooter
    >
      <div>
        <p>This modal has no footer</p>
      </div>
    </vue-modal-2>
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
  },
  data() {
    return {
      
    };
  },
  methods: {
    open() {
      this.$vm2.open("modal-1");
    },
    close() {
      this.$vm2.close("modal-1");
    },
  },
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
  height: 65%;
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
