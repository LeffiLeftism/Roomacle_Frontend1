<template>
  <div class="announcementsPopup">
    <header>
      {{ postContent.date }}
      <span v-if="postContent.time">| {{ postContent.time }}</span>
    </header>
    {{ postContent.content }}
    <br />
    Erstellt von: {{ postContent.creator }}
  </div>
</template>

<script>
export default {
  props: {
    postContent: Object,
  },
};
</script>

<style scoped>
.announcementsPopup {
  border: 5px grey solid;
  padding: 5px;
  height: 100%;
}
</style>