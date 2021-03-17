<template>
  <div id="announcement">
    <LFpost
      thing="Verspätung"
      description="Wegen Stau 15 Minuten Verspätung"
      founddate="13:30"
      founder="Zinnen, Andreas"
    />
    <LFpost
      thing="Mittagessen"
      description="Bin von 13:30 - 14:00 in der Mensa zusammen mit Andreas"
      founddate="16-03-2021"
      founder="Zinnen, Andreas"
    />
  </div>
</template>

<script>
import LFpost from "./LFpost.vue";

export default {
  components: {
    LFpost,
  },
  props: {},
};
</script>

<style scoped>
#announcement {
  padding: 5px;
  align-items: center;
  justify-content: space-around;
  /*background-color: bisque;*/
}
</style>