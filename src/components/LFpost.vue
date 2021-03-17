<template>
  <div id="lfpost">
    <span class="textline">{{ founddate }} | {{ thing }}</span
    ><br />
    {{ description }}
    <br />
    Erstellt von: {{ founder }}
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
  },
};
</script>

<style>
#lfpost {
  max-width: 100%;
  padding: 7px;
  margin-bottom: 5px;
  text-align: left;
  background-color: rgb(192, 153, 228);
}
.textline {
  font-size: 1em;
  font-weight: bold;
}
</style>