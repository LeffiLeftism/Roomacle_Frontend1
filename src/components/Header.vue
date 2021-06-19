<template>
  <div id="header">
    <img
      id="logo"
      :src="this.$store.state.setup.base64Code"
      alt="Logo..."
      style="margin: 3px"
    />
    <span class="evenSpacing">
      <span class="headertext"
        >FB:
        <span id="fachbereich" v-if="this.$store.state.setup.studienbereich">{{
          this.$store.state.setup.studienbereich
        }}</span>
        <span id="fachbereich" v-else>Fachbereich</span>
      </span>
      <span class="headertext"
        >SB:
        <span id="studienbereich" v-if="this.$store.state.setup.fachbereich">
          {{ this.$store.state.setup.fachbereich }}</span
        >
        <span id="studienbereich" v-else> Studienbereich</span>
      </span>
      <span class="headertext">{{ this.time }}<br />{{ this.date }}</span>
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      year: "",
      month: "",
      day: "",
      hour: "",
      minute: "",
      second: "",
    };
  },
  computed: {
    time() {
      return `${this.hour}:${this.minute}:${this.second}`;
    },
    date() {
      return `${this.day}.${this.month}.${this.year}`;
    },
  },
  props: {},
  methods: {
    refreshTime: function () {
      var date = new Date();
      this.year = date.getFullYear();
      this.month = date.getMonth() + 1;
      this.day = date.getDate();
      this.hour = date.getHours();
      this.minute = date.getMinutes();
      this.second = date.getSeconds();
      this.month = this.checkTime(this.month);
      this.day = this.checkTime(this.day);
      this.minute = this.checkTime(this.minute);
      this.second = this.checkTime(this.second);
      this.$store.state.calendar.today.hour = this.hour;
      this.$store.state.calendar.today.minute = this.minute;
    },
    checkTime: function (i) {
      if (i < 10) {
        i = "0" + i;
      }
      return i;
    },
  },
  created() {
    setInterval(() => {
      this.refreshTime();
    }, 1000);
  },
};
</script>

<style scoped>
#header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 10%;
  /*background-color:aqua;*/
}

#logo {
  max-height: 100%;
  max-width: 25%;
  padding: 3px;
}
.headertext {
  font-weight: bold;
  padding: 3px;
}
.evenSpacing {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 75%;
}
</style>