<template>
  <div id="lfpost" :class="[announcement === true ? 'announcement': 'noone']">
    <span class="textline">{{ founddate }} | {{ thing }}</span
    ><br />
    {{ description }}
    <br />
    Erstellt von: {{ founder }} <br />
    {{ announcement }}
  </div>
</template>

<script>
export default {
  props: {
    thing: String,
    description: String,
    founddate: String,
    founder: String,
    color: String,
    announcement: Boolean,
  },
};
</script>

<style>
#lfpost {
  border: black dotted 5px;
  max-width: 100%;
  padding: 7px;
  margin-bottom: 5px;
  text-align: left;
}
.textline {
  font-size: 1em;
  font-weight: bold;
}
.announcement {
  background-color: rgba(255, 0, 0, 0.548);
}
.noone {
  /*background-color: rgba(225, 0, 255, 0.5);*/
}
</style>