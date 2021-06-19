<template>
  <div
    class="announcementsPopup"
    :class="[postContent.pinned === true ? 'green' : 'blue']"
  >
    <header>
      {{ postContent.title }}
    </header>
    {{ postContent.content }}
    <br />
    Erstellt am: {{ postContent.date }} um {{ postContent.time }} Uhr
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
  border: 5px solid;
  padding: 5px;
  height: 100%;
}
.blue {
  border-color: rgb(75, 190, 255);
}
.green {
  border-color: rgb(155, 195, 40);
}
</style>