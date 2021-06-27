<template>
  <div id="events">
    <div v-for="(item, index) in this.$store.state.meetings" :key="index">
      <Evpost
        v-if="sameWeekDay(item, index)"
        :termin="item"
        :time="$store.state.timings"
      />
    </div>
  </div>
</template>

<script>
import Evpost from "../components/Evpost.vue";

export default {
  components: {
    Evpost,
  },
  data() {
    return {
      todayDate: "",
      show_meeting: false,
    };
  },
  computed: {
    today: function () {
      let date = new Date(
        this.$store.state.calendar.today.year,
        this.$store.state.calendar.today.month,
        this.$store.state.calendar.today.day,
        0,
        0,
        0,
        0
      );
      return date;
    },
  },
  methods: {
    sameWeekDay(dS, index) {
      //Überprüft, ob die übergebene Veranstaltung am aktuellen Tag angezeigt wird
      let dateStart = new Date(dS.date.start);
      let dateEnd = new Date(dS.date.end);
      dateStart.setHours(0, 0, 0, 0);
      dateEnd.setHours(23, 59, 59, 999);

      let Week_dS = this.ISOweek(dateStart);
      let Week_today = this.ISOweek(this.today);
      let Week_dif;
      //Überprüft, ob die Veranstaltung in der Woche stattfindet
      if (dS.date.repeatedly > 0) {
        Week_dif = (Week_today - Week_dS) % dS.date.repeatedly;
      } else {
        Week_dif = Week_today - Week_dS;
      }


      let end_time =
        this.$store.state.timings[dS.std_start + dS.duration - 1 - 1].tEnd

      let end_hour = end_time.substr(0, 2);
      let end_minute = end_time.substr(3, 2);

      let checkEnd;
      //Überprüft, ob die Veranstaltung zur aktuellen Uhrzeit schon vorüber ist
      if (end_hour == this.$store.state.calendar.today.hour) {
        if (end_minute >= this.$store.state.calendar.today.minute) {
          checkEnd = true;
        } else {
          checkEnd = false;
        }
      } else if (end_hour > this.$store.state.calendar.today.hour) {
        checkEnd = true;
      } else {
        checkEnd = false;
      }
      let result =
        this.today.getDay() == dateStart.getDay() &&
        Week_dif == 0 &&
        (this.today < dateEnd || dS.date.infinity) &&
        checkEnd;
      if (result) {
        this.show_meeting = true;
        this.$store.state.upcomming_Meeting = true;
        return true;
      } else {
        if (
          index == this.$store.state.meetings.length - 1 &&
          !this.show_meeting
        ) {
          this.$store.state.upcomming_Meeting = false;
        }
        return false;
      }
    },
    ISOweek(dt) {
      //Gibt die Kalenderwoche der des übergebenen Datums zurück
      var tdt = new Date(dt.valueOf());
      var dayn = (dt.getDay() + 6) % 7;
      tdt.setDate(tdt.getDate() - dayn + 3);
      var firstThursday = tdt.valueOf();
      tdt.setMonth(0, 1);
      if (tdt.getDay() !== 4) {
        tdt.setMonth(0, 1 + ((4 - tdt.getDay() + 7) % 7));
      }
      return 1 + Math.ceil((firstThursday - tdt) / 604800000);
    },
  },
  beforeUpdate() {
    this.$store.state.upcomming_Meeting = false;
  },
  updated() {
    console.log("Update");
    this.todayDate = new Date(
      this.$store.state.calendar.today.year,
      this.$store.state.calendar.today.month,
      this.$store.state.calendar.today.day,
      0,
      0,
      0,
      0
    );
  },
};
</script>

<style scoped>
#events {
  display: inline-block;
  padding: 5px 0px;
  overflow: scroll;
  width: 100%;
  height: 95%;
}
</style>