<template>
  <div id="navigation">
    <Button imgName="home.png" screen="0" />
    <Button imgName="calendar.png" screen="1" />
    <Button imgName="info.png" screen="2" />
    <div
      class="ring-container"
      style="block"
      v-if="this.$store.state.timer_running > 0"
    >
      <div class="ringring"></div>
    </div>
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

.ring-container {
  position: relative;
}

.ringring {
  border: 5px solid #ff5555;
  background: #ff5555;
  border-radius: 25px;
  height: 25px;
  width: 25px;
  position: absolute;
  left: 70%;
  top: -100px;
  animation: pulsate 1.5s ease-out;
  animation-iteration-count: infinite;
  opacity: 0;
}
@keyframes pulsate {
  0% {
    -webkit-transform: scale(0.1, 0.1);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    -webkit-transform: scale(1.2, 1.2);
    opacity: 0;
  }
}
</style>
