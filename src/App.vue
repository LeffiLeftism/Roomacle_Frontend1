<template>
  <div id="app">
    <!--------------------------------------Büroräume--------------------------------------->
    <div class="maxSize" v-if="this.$store.state.setup.room">
      <div class="maxSize" v-if="this.$store.state.setup.room.type == 'buero'">
        <!-- Home view -->
        <div class="maxSize" v-if="this.$store.state.screen == 0">
          <Header />
          <div class="top" style="display: flex; height: 20%">
            <Roomnumber />
            <Roominfo />
          </div>
          <div class="bottom">
            <PersonsAll />
            <Navigation />
          </div>
        </div>
        <!-- End Home view -->
        <!-- Calendar view -->
        <div class="maxSize" v-else-if="this.$store.state.screen == 1">
          <Header />
          <div class="top" style="display: flex; height: 20%">
            <PersonSwitch />
          </div>
          <div class="bottom">
            <!--div class="bottomSpacer"></div-->
            <Calendar
              :meetings="
                this.$store.state.persons[
                  this.$store.state.person_index_calendar
                ].meetings
              "
            />
            <Navigation />
          </div>
        </div>
        <!-- End Calendar view -->
        <!-- Info view -->
        <div class="maxSize" v-else-if="this.$store.state.screen == 2">
          <Header />
          <div class="top" style="display: flex; height: 20%">
            <Roomnumber />
            <Roominfo />
          </div>
          <div class="bottom">
            <div style="width: 85%">
              <div class="notifications">
                <Announcements />
              </div>
              <button @click="openModal()">Login</button>
            </div>
            <Navigation />
          </div>
        </div>
        <!-- End Info view -->
      </div>
      <!--------------------------------------Büroräume Ende--------------------------------------->
      <!--------------------------------------Vorlesungsräume--------------------------------------->
      <!-- Home view -->
      <div class="maxSize" v-if="this.$store.state.setup.room.type == 'vl'">
        <div class="maxSize" v-if="this.$store.state.screen == 0">
          <Header />
          <div style="display: flex; height: 20%">
            <Roomnumber />
            <Roominfo />
          </div>
          <div class="bottom">
            <div style="width: 85%">
              <Events />
            </div>
            <Navigation />
          </div>
        </div>
        <!-- Home view end -->

        <!-- Calendar view -->
        <div class="maxSize" v-else-if="this.$store.state.screen == 1">
          <Header />
          <div class="top" style="display: flex; height: 20%">
            <CalendarSwitch />
          </div>
          <div class="bottom">
            <div style="width: 85%">
              <Calendar :meetings="this.$store.state.meetings" />
            </div>
            <Navigation />
          </div>
        </div>
        <!-- End Calendar view -->
        <!-- Info view -->
        <div class="maxSize" v-else-if="this.$store.state.screen == 2">
          <Header />
          <div class="top" style="display: flex; height: 20%">
            <Roomnumber />
            <Roominfo />
          </div>
          <div class="bottom">
            <div style="width: 85%">
              <div class="notifications">
                <Announcements />
              </div>
              <button @click="openModal()">Login</button>
            </div>
            <Navigation />
          </div>
        </div>
        <!-- End Info view -->
        <!-- -->
      </div>
      <!--------------------------------------Vorlesungsräume Ende--------------------------------------->
    </div>
    <div class="maxSize" v-else>
      <button class="maxSize" @click="readFile()">IMPORT</button>
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
import PersonSwitch from "./components/PersonSwitch.vue";
import Login from "./components/Login.vue";

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
    PersonSwitch,
  },
  data() {
    return {
      db,
    };
  },
  computed: {},
  methods: {
    startTimer(/*postContent*/) {/*
      if (postContent.timerActive && !postContent.started) {
        postContent.show = true;
        let x = setInterval(() => {
          console.log(
            "Started: " + postContent.started + " | Ended: " + postContent.ended
          );
          //console.log(postContent.title)
          if (postContent.timerActive && !postContent.ended) {
            //console.log("Update Timer");
            if (!postContent.started) {
              postContent.started = true;
              this.$store.state.timer_running++;
            }
            this.setTimer(postContent);
          } else if (postContent.ended) {
            clearInterval(x);
            console.log("End Timer");
            this.$store.state.timer_running--;
            postContent.timerActive = false;
            postContent.show = false;
          }
        }, 1000);
      }*/
    },
    
    readFile() {
      this.$store.commit("importTimings", {
        data: db.timings,
      });
      this.$store.commit("importMeetings", {
        data: db.meetings,
      });
      this.$store.commit("importPersons", {
        data: db.persons,
      });
      this.$store.commit("importAnnouncements", {
        data: db.announcements,
      });
      this.$store.commit("importSetup", {
        data: db.setup,
      });
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
    print2console(content) {
      console.log(content);
    },
    openModal() {
      try {
        this.$modal.show(
          Login,
          {},
          {
            adaptive: false,
            clickToClose: false,
            width: "800",
            height: "400",
            name: "InputModal",
          }
        );
      } catch (err) {
        console.log("Error on Login Popup.");
      }
    },
    closeModal() {
      this.$modal.hide("InputModal");
    },
    setToday: function () {
      let dt = new Date();
      this.$store.commit("setToday", {
        day: this.fillUpTens(dt.getDate()),
        month: this.fillUpTens(dt.getMonth()),
        year: this.fillUpTens(dt.getFullYear()),
      });
    },
    fillUpTens(number) {
      if (number < 10) number = "0" + number;
      else number = String(number);
      return number;
    },
  },
  created() {
    this.setToday();
    console.log("Create APP");
  },
  mounted() {
    this.recieveData();
    /*this.$store.state.announcements.forEach((element) => {
      this.startTimer(element);
    });*/
  },
  watch: {
    "$store.state.announcements": function () {
      //console.log("Got new Timer");
      this.$store.state.announcements.forEach((element) => {
        this.startTimer(element);
      });
    },
    "$store.state.screen": function () {
      console.log("Recieve");
      this.recieveData();
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
  width: 100%;
  height: 90%;
}
.bottom {
  display: flex;
  height: 70%;
}
.bottomSpacer {
  width: 85%;
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
