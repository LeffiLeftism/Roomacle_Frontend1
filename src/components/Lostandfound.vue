<template>
  <div id="lostandfound">
    <LFpost thing="USB-Stick" description ="32GB blau mit roten Punkten" founddate="13-03-2021" founder="Januzaj, Visar"/>
  </div>
</template>

<script>
import LFpost from "../components/LFpost.vue";
export default {
  components: {
    LFpost,
  },
};
</script>

<style scoped>
#lostandfound {
  justify-content: space-around;
  width: 25%;
  background-color:indianred;
  padding: 10px;
}
</style>