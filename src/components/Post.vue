<template>
  <div>
    <div
      class="lfpost"
      :class="[announcement === true ? 'announcement' : '']"
    >
      <span class="textline">{{ founddate }} | {{ thing }}</span
      ><br />
      {{ description }}
      <br />
      Erstellt von: {{ founder }}
    </div>
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
  created() {},
};
</script>

<style>
.lfpost {
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
</style>