<template>
  <div id="roomnumberComp">
    <span id="roomnumber" class="textline">{{
      this.$store.state.setup.room.num
    }}</span>
  </div>
</template>

<script>
export default {
  props: {},
};
</script>

<style scoped>
#roomnumberComp {
  border-right: grey solid 2px;
  padding: 5px;
  display: inline-flex;
  align-items: center;
  justify-content: space-around;
  width: calc((85% / 2) + 1px);
  /*background-color: rgb(126, 70, 165);*/
}

.textline {
  font-size: 6em;
  font-weight: bold;
}
</style>