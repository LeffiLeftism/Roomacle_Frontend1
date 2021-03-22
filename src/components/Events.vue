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
      todayDate: this.$store.state.calender.today.testDate//`${this.$store.state.calender.today.year}-${this.$store.state.calender.today.month}-${this.$store.state.calender.today.day}`,
    };
  },
  computed: {},
  created() {
    //console.log(this.todayDate);
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