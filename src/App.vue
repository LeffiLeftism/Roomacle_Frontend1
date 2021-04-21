<template>
  <div id="app">
    <!-- Headlines are allways the same. They are not gonna change. -->
    <Header />

    <!-- "Bottom" and "Top" content changes with Navigation-Buttons -->
    <!-- Home view -->
    <div class="maxSize" v-if="this.$store.state.screen == 0">
      <div style="display: flex; height: 20%">
        <Roomnumber />
        <Roominfo />
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
        <button @click="readFile()">Import Data</button>
        <!--CalendarGenerator /-->
        <Navigation />
      </div>
    </div>
    <!-- End Info view -->

    <Header />
    <div style="display: flex; height: 20%">
      <Roomnumber />
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
import Roomnumber from "./components/Roomnumber";
import Roominfo from "./components/Roominfo";
import Calendar from "./components/Calendar.vue";
import CalendarSwitch from "./components/CalendarSwitch.vue";
import PersonsAll from "./components/PersonsAll.vue";

import db from "./assets/data.json";

export default {
  name: "App",
  components: {
    Header,
    Navigation,
    Announcements,
    Events,
    Roomnumber,
    Roominfo,
    Calendar,
    CalendarSwitch,
    PersonsAll,
  },
  data() {
    return {
      db,
    };
  },
  computed: {
    test() {
      return this.$store.state.screen;
    },
  },
  methods: {
    readFile() {
      this.$store.state.timings = db.timings;
      this.$store.state.persons = db.persons;
      this.$store.state.meetings = db.meetings;
      this.$store.state.announcements = db.announcements;
      this.$store.state.setup = db.setup;
    },
    recieveData: async function () {
      let response;
      console.log("Recieve all Data");
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      };
      let data = {
        type: "",
      };
      let json = [];

      data.type = "timings";
      options.body = JSON.stringify(data);
      response = await fetch("/recieve", options);
      json.timings = await response.json();

      data.type = "meetings";
      options.body = JSON.stringify(data);
      response = await fetch("/recieve", options);
      json.meetings = await response.json();

      data.type = "persons";
      options.body = JSON.stringify(data);
      response = await fetch("/recieve", options);
      json.persons = await response.json();

      data.type = "announcements";
      options.body = JSON.stringify(data);
      response = await fetch("/recieve", options);
      json.announcements = await response.json();

      data.type = "setup";
      options.body = JSON.stringify(data);
      response = await fetch("/recieve", options);
      json.setup = await response.json();

      this.$store.commit("importTimings", {
        data: json.timings,
      });
      this.$store.commit("importMeetings", {
        data: json.meetings,
      });
      this.$store.commit("importPersons", {
        data: json.persons,
      });
      this.$store.commit("importAnnouncements", {
        data: json.announcements,
      });
      this.$store.commit("importSetup", {
        data: json.setup[0],
      });
      console.log(this.$store.state.setup);

      console.log("Response:");
      console.log(json);
      console.log(this.$store.state);
    },
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
  mounted() {
    this.recieveData();
  },
  watch: {
    "$store.state.setup": {
      handler: function () {
        let setup = this.$store.state.setup;
        document.getElementById("roomnumber").textContent = setup.room.num;
        document.getElementById("fachbereich").textContent = setup.fachbereich;
        document.getElementById("studienbereich").textContent =
          setup.studienbereich;
        switch (setup.room.type) {
          case "buero":
            document.getElementById("roomtype").textContent = "Büro";
            document.getElementById("roomseats").textContent = "";
            break;
          case "vl":
            document.getElementById("roomtype").textContent =
              "Vorlesung/Seminarraumm";
            document.getElementById("roomseats").textContent =
              setup.room.seats + " Sitzplätze";
            break;
          default:
            document.getElementById("roomtype").textContent = "No valid Type";
            break;
        }
        console.log("Setup geupdated");
      },
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
#events {
  min-width: 25%;
  width: 55%;
}
#navigation {
  min-width: 15%;
  width: 15%;
}
header {
  font-weight: bolder;
  font-size: 2em;
  padding: 5px;
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
