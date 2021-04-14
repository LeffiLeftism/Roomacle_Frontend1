<template>
  <div id="roominfo">
    <span class="textline">
      <span id="roomtype">Raumtyp</span>
      <br />
      <span id="roomseats">Raumsitze</span>
    </span>
  </div>
</template>

<script>
export default {
  props: {},
};
</script>

<style scoped>
#roominfo {
  border: grey solid 2px;
  border-left: 1px;
  padding-left: 10px;
  display: inline-flex;
  align-items: center;
  width: 55%;
  /*background-color: rgb(126, 70, 165);*/
}

.textline {
  text-align: left;
  font-size: 2em;
  font-weight: bold;
}
</style>