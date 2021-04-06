<template>
  <div id="navigation">
    <Button imgName="home.png" screen ="0"/>
    <Button imgName="calendar.png" screen ="1"/>
    <Button imgName="info.png" screen ="2"/>
  </div>
</template>

<script>
import Button from "../components/Button.vue";

export default {
  components: {
    Button,
  },
};
</script>

<style scoped>
#navigation {
  display: inline-flex;
  justify-content: space-evenly;
  flex-direction: column;
  padding: 5px;
  /*background-color: aquamarine;*/
}
</style>
