<template>
  <div id="lfpost">
    <span class="textline">{{ founddate }} | {{ thing }}</span
    ><br />
    {{ description }}
    <br />
    Zu finden bei: {{ founder }}
  </div>
</template>

<script>
export default {
  props: {
    thing: String,
    description: String,
    founddate: String,
    founder: String,
  },
};
</script>

<style>
#lfpost {
  padding: 7px;
  text-align: left;
  background-color: rgb(192, 153, 228);
}
.textline {
  font-size: 1em;
  font-weight: bold;
}
</style>