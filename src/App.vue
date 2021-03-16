<template>
  <div id="app">
    <Header
      studienbereich="Angewandte Physik und Medizintechnik"
      fachbereich="Ingenieurwissenschaften"
    />
    <Room roomnumber="A 317" />
    <Notifications />
    <Lostandfound />
    <Events />
    <Navigation />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Navigation from "./components/Navigation.vue";
import Notifications from "./components/Notifications.vue";
import Events from "./components/Events.vue";
import Lostandfound from "./components/Lostandfound.vue";
import Room from "./components/Room.vue";

export default {
  name: "App",
  components: {
    Header,
    Navigation,
    Notifications,
    Events,
    Lostandfound,
    Room,
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
}

.textline {
  font-size: 4em;
  font-weight: bold;
}
</style>
