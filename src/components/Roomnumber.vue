<template>
  <div id="roomnumberComp">
    <span id="roomnumber" class="textline">R.Num</span>
  </div>
</template>

<script>
export default {
  props: {},
};
</script>

<style scoped>
#roomnumberComp {
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