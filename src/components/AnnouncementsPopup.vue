<template>
  <div class="announcementsPopup">
    <header>
      {{ postContent.title }}
    </header>
    {{ postContent.content }}
    <br />
    Gültig ab: {{ postContent.date }}
    <br />
    Erstellt von: {{ postContent.creator }}
    <br />
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
  border: 5px solid rgb(155, 195, 40);
  padding: 5px;
  height: 100%;
}
</style>