<template>
  <div
    id="roomnumberComp"
    :class="[this.$store.state.upcomming_Meeting == true ? 'red' : '']"
  >
    <span id="roomnumber" class="textline">{{
      this.$store.state.setup.room.num
    }}</span>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      red: false,
    };
  },
  watch: {
    "$store.state.upcomming_Meeting": function () {
      this.red = this.$store.state.upcomming_Meeting;
    },
  },
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
.red {
  background: rgb(255, 0, 0);
}
</style>