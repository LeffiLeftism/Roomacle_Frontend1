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
    //Setzt die Zeit und das Datum in die Formen : DD.MM.YY  HH.MM.SS
    time() {
      return `${this.hour}:${this.minute}:${this.second}`;
    },
    date() {
      return `${this.day}.${this.month}.${this.year}`;
    },
  },
  methods: {
    refreshTime: function () {
      //Liest das aktuelle Datum und Uhrzeit und hinterlegt diese im lokalen Speicher
      var date = new Date();
      this.year = date.getFullYear();
      this.month = date.getMonth() + 1;
      this.day = date.getDate();
      this.hour = date.getHours();
      this.minute = date.getMinutes();
      this.second = date.getSeconds();
      this.month = this.fillUpTens(this.month);
      this.day = this.fillUpTens(this.day);
      this.minute = this.fillUpTens(this.minute);
      this.second = this.fillUpTens(this.second);
      this.$store.state.calendar.today.hour = this.hour;
      this.$store.state.calendar.today.minute = this.minute;
    },
    fillUpTens: function (i) {
      //Fügt bei Zahlen < 10 eine "0" davor hinzu
      if (i < 10) {
        i = "0" + i;
      }
      return i;
    },
  },
  created() {
    setInterval(() => {
      //Führt jede Sekunde die Funktion "refreshTime" aus
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