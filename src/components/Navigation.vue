<template>
  <div id="navigations">
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
#navigations {
  display: inline-flex;
  justify-content: space-evenly;
  flex-direction: column;
  object-fit: contain;
  /*background-color: aquamarine;*/
  padding: 3px 0;
  width: 15%;
}
</style>
