<template>
  <div
    id="roomnumberComp"
    :class="[this.$store.state.upcomming_Meeting == true ? 'marked' : '']"
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
.marked {
  background: rgb(255, 130, 0);
  color: rgb(255, 255, 255);
  border-right-color: rgb(255, 130, 0);
}
.unmarked {
  border-right-color: grey;
}
</style>