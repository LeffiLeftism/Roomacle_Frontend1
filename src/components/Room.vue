<template>
  <div id="room">
    <span class="textline">{{ roomnumber }}</span>
  </div>
</template>

<script>
export default {
  props: {
    roomnumber: String,
  },
};
</script>

<style scoped>
#room {
  display: inline-flex;
  align-items: center;
  justify-content: space-around;
  width: 50%;
  height: 20%;
  background-color:rgb(126, 70, 165);
}

</style>