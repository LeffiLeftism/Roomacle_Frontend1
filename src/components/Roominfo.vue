<template>
  <div id="roominfo">
    <span class="textline" v-if="this.$store.state.setup.room.type == 'buero'">
      <span id="roomtype">Büro</span>
      <span v-if="this.$store.state.setup.room.desc != ''">
        <br />
        {{ this.$store.state.setup.room.desc }}
      </span>
    </span>
    <span
      class="textline"
      v-else-if="this.$store.state.setup.room.type == 'vl'"
    >
      <span id="roomtype">Vorlesungsraum</span>
      <span v-if="this.$store.state.setup.room.desc != ''">
        <br />
        {{ this.$store.state.setup.room.desc }}
      </span>
    </span>
  </div>
</template>

<style scoped>
#roominfo {
  /*border: grey solid 2px;*/
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