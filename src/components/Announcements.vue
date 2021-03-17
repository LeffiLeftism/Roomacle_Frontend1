<template>
  <div id="announcement">
    <Post
      thing="Verspätung"
      description="Wegen Stau 15 Minuten Verspätung"
      founddate="13:30"
      founder="Zinnen, Andreas"
      v-bind:announcement="this.announcement"
    />
    <Post
      thing="Mittagessen"
      description="Bin von 13:30 - 14:00 in der Mensa zusammen mit Andreas"
      founddate="16-03-2021"
      founder="Zinnen, Andreas"
      v-bind:announcement="this.announcement"
    />
  </div>
</template>

<script>
import Post from "./Post.vue";

export default {
  data() {
    return {
      announcement: true,
    };
  },
  components: {
    Post,
  },
};
</script>

<style scoped>
#announcement {
  justify-content: space-around;
  padding: 5px;
  /*background-color: bisque;*/
}
</style>