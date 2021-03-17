<template>
  <div id="roomnumber">
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
#roomnumber {
  border: grey solid 2px;
  padding: 5px;
  display: inline-flex;
  align-items: center;
  justify-content: space-around;
  width: 45%;
  /*background-color: rgb(126, 70, 165);*/
}

.textline {
  font-size: 6em;
  font-weight: bold;
}
</style>