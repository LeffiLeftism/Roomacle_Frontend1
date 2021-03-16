<template>
  <div id="events">
    <Evpost
      v-bind:num="1234"
      name="iPPP"
      tStart="13:30"
      tEnd="15:00"
      dozent="Zinner, Andreas"
      v-bind:members="['iING', 'IWI', 'MB']"
    />
  </div>
</template>

<script>
import Evpost from "../components/Evpost.vue";

export default {
  components: {
    Evpost,
  },
};
</script>

<style scoped>
#events {
  padding: 5px;
  padding-right: 10px;
  display: inline-block;
  width: 60%;
  overflow: scroll;
  /*background-color: darkseagreen;*/
}
</style>