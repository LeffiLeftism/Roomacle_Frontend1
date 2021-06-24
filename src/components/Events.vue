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
      let dateStart = new Date(dS.date.start);
      let dateEnd = new Date(dS.date.end);
      dateStart.setHours(0, 0, 0, 0);
      dateEnd.setHours(23, 59, 59, 999);

      let Week_dS = this.ISOweek(dateStart);
      let Week_today = this.ISOweek(this.today);
      let Week_dif;
      if (dS.date.repeatedly > 0) {
        Week_dif = (Week_today - Week_dS) % dS.date.repeatedly;
      } else {
        Week_dif = Week_today - Week_dS;
      }

      /*console.log("_______________");
      console.log(dS);
      console.log(this.today);
      console.log(dateStart);
      console.log(dateEnd);
      console.log(this.today.getDay());
      console.log(dateStart.getDay());
      console.log("------------");
      console.log(dS.date.repeatedly);
      console.log(Week_dS);
      console.log(Week_today);
      console.log(Week_dif);*/

      //let start_time = this.$store.state.timings[dS.std_start - 1].tStart;
      let end_time = this.$store.state.timings[
        dS.std_start + dS.duration - 1 - 1
      ].tEnd;

      //let start_hour = start_time.substr(0, 2);
      //let start_minute = start_time.substr(3, 2);

      let end_hour = end_time.substr(0, 2);
      let end_minute = end_time.substr(3, 2);

      /*console.log(start_hour + " | " + start_minute);
      console.log(end_hour + " | " + end_minute);*/



      //if true, if clock is ahead of time. When meeting started, false

      /*let checkStart; 
      if (start_hour == this.$store.state.calendar.today.hour) {
        if (start_minute < this.$store.state.calendar.today.minute) {
          checkStart = false;
        } else {
          checkStart = true;
        }
      } else if (start_hour > this.$store.state.calendar.today.hour) {
        checkStart = true;
      } else {
        checkStart = false;
      }*/

      //console.log("Start: " + checkStart);
      //console.log(start_hour);
      //console.log(this.$store.state.calendar.today.hour);

      let checkEnd;
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

      //console.log("End: " + checkEnd);
      /*console.log(end_hour);
      console.log(this.$store.state.calendar.today.hour);
      console.log(end_minute);
      console.log(this.$store.state.calendar.today.minute);*/

      let result =
        this.today.getDay() == dateStart.getDay() &&
        Week_dif == 0 &&
        (this.today < dateEnd || dS.date.infinity) &&
        checkEnd;

      /*console.log(index + " | " + (this.$store.state.meetings.length - 1));
      console.log(result);*/
      //console.log("Check Meeting");
      if (result) {
        //console.log(dS);
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
      //console.log("Date " + dt);
      //console.log("Date.day " + dt.getDay());
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
  mounted() {
    //console.log("------------");
    //console.log("Mounted");
    /*
          (item.date.infinity == true || today < item.date.end) &&
          today > item.date.start &&
          (this.ISOweek(today) - this.ISOweek(item.date.start)) %
            item.date.repeatedly ==
            0
*/
  },
  beforeUpdate() {
    //console.log("Before Update");
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
  /*background-color: darkseagreen;*/
  width: 100%;
  height: 95%;
}
</style>