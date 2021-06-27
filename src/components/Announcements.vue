<template>
  <div id="announcement">
    <Post
      v-for="(item, index) in this.$store.state.announcements"
      :key="index"
      :postContent="item"
      :index="index"
    />
  </div>
</template>

<script>
import Post from "./Post.vue";

export default {
  data() {
    return {};
  },
  components: {
    Post,
  },
  beforeMount() {
    //Setzt lokalen Zähler für laufende Timer auf 0
    this.$store.state.timer_running = 0;
    console.log("beforeMount Announcements.vue");
  },
};
</script>

<style scoped>
#announcement {
  justify-content: space-around;
  padding: 5px 0px;
  width: auto;
  height: 100%;
  overflow: scroll;
  /*background-color: bisque;*/
}
</style>