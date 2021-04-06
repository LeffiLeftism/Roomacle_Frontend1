<template>
  <div id="events">
    <div v-for="(item, index) in db.veranstaltungen" :key="index">
      <Evpost
        v-if="db.veranstaltungen[index].date == todayDate"
        :termin="db.veranstaltungen[index]"
        :time="db.time"
      />
    </div>
    <!--<Evpost />-->
  </div>
</template>

<script>
import Evpost from "../components/Evpost.vue";
import db from "../assets/data.json";

export default {
  components: {
    Evpost,
  },
  data() {
    return {
      db,
      todayDate: this.$store.state.calendar.today.testDate,
      //`${this.$store.state.calendar.today.year}-${this.$store.state.calendar.today.month}-${this.$store.state.calendar.today.day}`,
    };
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