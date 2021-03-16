<template>
  <div id="evpost">
    <span class="textline">{{ num }} | {{ name }}</span
    ><br />
    {{ tStart }} - {{ tEnd }}
    <br />
    {{ dozent }}
    <br />
    <span v-for="(item, index) in members" v-bind:key="index">
      {{ item }}
    </span>
  </div>
</template>

<script>
export default {
  props: {
    num: Number,
    name: String,
    tStart: String,
    tEnd: String,
    dozent: String,
    members: Array,
  },
};
</script>

<style>
#evpost {
  padding: 7px;
  margin-bottom: 5px;
  text-align: left;
  background-color: rgb(75, 204, 243);
}
.textline {
  font-size: 1em;
  font-weight: bold;
}
</style>