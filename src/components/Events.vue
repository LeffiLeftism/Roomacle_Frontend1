<template>
  <div id="events">
    <div v-for="(item, index) in this.$store.state.meetings" :key="index">
      <Evpost
        v-if="item.date.infinity == true || todayDate < item.date.end"
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
      todayDate: "", //this.$store.state.calendar.today.testDate,
      //`${this.$store.state.calendar.today.year}-${this.$store.state.calendar.today.month}-${this.$store.state.calendar.today.day}`,
    };
  },
  methods: {
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
    /*
          (item.date.infinity == true || today < item.date.end) &&
          today > item.date.start &&
          (this.ISOweek(today) - this.ISOweek(item.date.start)) %
            item.date.repeatedly ==
            0
*/
  },
  updated() {
    this.todayDate = new Date(
      this.$store.state.calendar.today.year,
      this.$store.state.calendar.today.month,
      this.$store.state.calendar.todayy.day,
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
  padding: 5px;
  overflow: scroll;
  /*background-color: darkseagreen;*/
}
</style>