<template>
  <div id="events">
    <div v-for="(item, index) in db.veranstaltungen" :key="index">
      <Evpost :termin="db.veranstaltungen[index]" :time="db.time" />
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