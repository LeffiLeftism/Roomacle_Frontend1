<template>
  <div id="navigation">
    <Button imgName="home.png" />
    <Button imgName="calender.png" />
    <Button imgName="info.png" />
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
