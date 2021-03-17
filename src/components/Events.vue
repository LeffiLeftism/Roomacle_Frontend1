<template>
  <div id="events">
    <Evpost
      num="0815"
      name="iPPP"
      tStart="13:30"
      tEnd="15:00"
      dozent="Zinner, Andreas"
      v-bind:members="['iING', 'IWI', 'MB']"
    />
    <Evpost
      num="3448"
      name="GDK"
      tStart="8:15"
      tEnd="9:45"
      dozent="Schweizer, Jochen"
      v-bind:members="['iING']"
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
  display: inline-block;
  padding: 5px;
  overflow: scroll;
  /*background-color: darkseagreen;*/
}
</style>