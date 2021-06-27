<template>
  <div
    id="roomnumberComp"
    :class="[
      this.$store.state.upcomming_Meeting == true &&
      this.$store.state.setup.room.type == 'vl'
        ? 'marked'
        : '',
    ]"
  >
    <span id="roomnumber" class="textline">{{
      this.$store.state.setup.room.num
    }}</span>
  </div>
</template>


<style scoped>
#roomnumberComp {
  padding: 5px;
  display: inline-flex;
  align-items: center;
  justify-content: space-around;
  width: calc((85% / 2) + 1px);
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