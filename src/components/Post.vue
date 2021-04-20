<template>
  <div>
    <div
      class="lfpost"
      :class="[this.postContent.announcement === true ? 'announcement' : '']"
    >
      <span class="textline"
        >{{ this.postContent.date }} | {{ this.postContent.time }} </span
      ><br />
      {{ this.postContent.content }}
      <br />
      Erstellt von: {{ this.postContent.creator }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    postContent: Object,
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